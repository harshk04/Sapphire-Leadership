import nodemailer from 'nodemailer';

const recipientEmail = 'sunilkumawatsir@gmail.com';

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
    to: recipientEmail,
    subject: `${submission.formName}: ${submission.subject}`,
    text,
    html,
    replyTo:
      typeof submission.fields.email === 'string' && submission.fields.email
        ? submission.fields.email
        : undefined,
  });
}
