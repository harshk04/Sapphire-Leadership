import nodemailer from 'nodemailer';
import type { ConsultationBookingRecord } from './consultation-bookings';
import { formatIndiaDate, formatIndianMobile } from './consultation-utils';

const defaultAdminEmail = 'sunilkumawatsir@gmail.com';

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required SMTP environment variable: ${name}`);
  }
  return value;
}

function parseBoolean(value: string | undefined, fallback = false): boolean {
  if (value == null) return fallback;
  return value.toLowerCase() === 'true';
}

function parseNumber(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export type SubmissionFieldValue = string | number | boolean | null | undefined;

export type FormSubmission = {
  formName: string;
  sourcePage: string;
  subject: string;
  fields: Record<string, SubmissionFieldValue>;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatValue(value: SubmissionFieldValue): string {
  if (value == null || value === '') return 'Not provided';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  return String(value);
}

function getAdminEmail() {
  return (
    process.env.ADMIN_EMAIL ||
    process.env.ADMIN_BOOKING_EMAIL ||
    process.env.BOOKING_ADMIN_EMAIL ||
    defaultAdminEmail
  );
}

function getPublicBaseUrl() {
  return (
    process.env.PUBLIC_APP_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'http://localhost:3000'
  ).replace(/\/$/, '');
}

function formatBookingRows(booking: ConsultationBookingRecord) {
  return [
    ['Name', booking.name],
    ['Organization', booking.organization],
    ['Designation', booking.designation],
    ['Email', booking.email],
    ['Phone', formatIndianMobile(booking.phone)],
    ['Selected Service', booking.service],
    ['Date', formatIndiaDate(booking.date)],
    ['Time', booking.time],
    ['Meeting Mode', booking.meetingMode],
    ['Message', booking.message],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #d7dee8;font-weight:600;color:#0b2c59;background:#f7f9fb;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border:1px solid #d7dee8;color:#10203a;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join('');
}

export function createSmtpTransport() {
  const useSsl = parseBoolean(process.env.SMTP_USE_SSL);
  const useStartTls = parseBoolean(process.env.SMTP_USE_STARTTLS, true);
  const timeoutSeconds = parseNumber(process.env.SMTP_TIMEOUT_SECONDS, 15);

  return nodemailer.createTransport({
    host: getEnv('SMTP_HOST'),
    port: parseNumber(process.env.SMTP_PORT, 587),
    secure: useSsl,
    requireTLS: useStartTls,
    auth: {
      user: getEnv('SMTP_USERNAME'),
      pass: getEnv('SMTP_PASSWORD'),
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: timeoutSeconds * 1000,
    greetingTimeout: timeoutSeconds * 1000,
    socketTimeout: timeoutSeconds * 1000,
  });
}

export async function sendSubmissionEmail(submission: FormSubmission) {
  const transporter = createSmtpTransport();
  const fromEmail = getEnv('SMTP_FROM_EMAIL');
  const fromName = process.env.SMTP_FROM_NAME || 'Sapphire Leadership';

  const rows = Object.entries(submission.fields)
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #d7dee8;font-weight:600;color:#0b2c59;background:#f7f9fb;">${escapeHtml(
            key,
          )}</td>
          <td style="padding:8px 12px;border:1px solid #d7dee8;color:#10203a;">${escapeHtml(
            formatValue(value),
          )}</td>
        </tr>`,
    )
    .join('');

  const html = `
    <div style="font-family:Arial,sans-serif;color:#10203a;line-height:1.6">
      <h2 style="margin:0 0 8px;color:#0b2c59;">${escapeHtml(submission.formName)} submission</h2>
      <p style="margin:0 0 18px;">${escapeHtml(submission.subject)}</p>
      <p style="margin:0 0 12px;font-weight:600;color:#8b6b2f;">Form filled on Sapphire Leadership &amp; Advisor website.</p>
      <p style="margin:0 0 18px;"><strong>Source page:</strong> ${escapeHtml(submission.sourcePage)}</p>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;

  const text = [
    `${submission.formName} submission`,
    submission.subject,
    'Form filled on Sapphire Leadership & Advisor website.',
    `Source page: ${submission.sourcePage}`,
    '',
    ...Object.entries(submission.fields).map(([key, value]) => `${key}: ${formatValue(value)}`),
  ].join('\n');

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: getAdminEmail(),
    subject: `${submission.formName}: ${submission.subject}`,
    text,
    html,
    replyTo:
      typeof submission.fields.email === 'string' && submission.fields.email
        ? submission.fields.email
        : undefined,
  });
}

export async function sendConsultationBookingEmails(
  booking: ConsultationBookingRecord,
) {
  const transporter = createSmtpTransport();
  const fromEmail = getEnv('SMTP_FROM_EMAIL');
  const fromName = process.env.SMTP_FROM_NAME || 'Sapphire Leadership';
  const adminEmail = getAdminEmail();

  const adminText = [
    'New Consultation Booking – Sapphire Leadership & Advisor',
    '',
    `Name: ${booking.name}`,
    `Organization: ${booking.organization}`,
    `Designation: ${booking.designation}`,
    `Email: ${booking.email}`,
    `Phone: ${formatIndianMobile(booking.phone)}`,
    `Selected Service: ${booking.service}`,
    `Date: ${formatIndiaDate(booking.date)}`,
    `Time: ${booking.time}`,
    `Meeting Mode: ${booking.meetingMode}`,
    `Message: ${booking.message}`,
    '',
    `Review and confirm this booking: ${getPublicBaseUrl()}/admin`,
  ].join('\n');

  const userText = [
    `Dear ${booking.name},`,
    '',
    'Thank you for booking a consultation with Sapphire Leadership & Advisor.',
    '',
    'We have received your request and will contact you shortly to confirm the meeting details.',
    '',
    'Consultation Details:',
    '',
    `Service: ${booking.service}`,
    `Date: ${formatIndiaDate(booking.date)}`,
    `Time: ${booking.time}`,
    `Meeting Mode: ${booking.meetingMode}`,
    `Message: ${booking.message}`,
    '',
    'Regards,',
    'Dr. Sunil Kumawat',
    'Sapphire Leadership & Advisor',
    'Empowering Leaders. Transforming Education.',
  ].join('\n');

  const adminHtml = `
    <div style="font-family:Arial,sans-serif;color:#10203a;line-height:1.6">
      <h2 style="margin:0 0 12px;color:#0b2c59;">New Consultation Booking – Sapphire Leadership &amp; Advisor</h2>
      <table style="border-collapse:collapse;width:100%;max-width:760px;">
        <tbody>${formatBookingRows(booking)}</tbody>
      </table>
      <p style="margin:18px 0 0;font-weight:600;color:#8b6b2f;">
        Review and confirm this booking:
        <a href="${escapeHtml(`${getPublicBaseUrl()}/admin`)}" style="color:#0b2c59;text-decoration:none;">${escapeHtml(`${getPublicBaseUrl()}/admin`)}</a>
      </p>
    </div>
  `;

  const userHtml = `
    <div style="font-family:Arial,sans-serif;color:#10203a;line-height:1.7">
      <p style="margin:0 0 16px;">Dear ${escapeHtml(booking.name)},</p>
      <p style="margin:0 0 16px;">Thank you for booking a consultation with Sapphire Leadership &amp; Advisor.</p>
      <p style="margin:0 0 16px;">We have received your request and will contact you shortly to confirm the meeting details.</p>
      <h3 style="margin:24px 0 10px;color:#0b2c59;">Consultation Details</h3>
      <table style="border-collapse:collapse;width:100%;max-width:760px;">
        <tbody>${formatBookingRows(booking)}</tbody>
      </table>
      <p style="margin:24px 0 0;">Regards,<br/>Dr. Sunil Kumawat<br/>Sapphire Leadership &amp; Advisor<br/>Empowering Leaders. Transforming Education.</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: adminEmail,
    subject: 'New Consultation Booking – Sapphire Leadership & Advisor',
    text: adminText,
    html: adminHtml,
    replyTo: booking.email,
  });

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: booking.email,
    subject: 'Your Consultation Request Has Been Received',
    text: userText,
    html: userHtml,
  });
}
