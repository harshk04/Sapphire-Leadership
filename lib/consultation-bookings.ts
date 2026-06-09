import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import {
  consultationServices,
  consultationStatuses,
  consultationTimeSlots,
  type ConsultationMeetingMode,
  type ConsultationService,
  type ConsultationStatus,
  type ConsultationTimeSlot,
} from './consultation-data';
import { formatIndiaDate, normalizeIndianPhoneNumber } from './consultation-utils';

export type ConsultationBookingRecord = {
  id: number;
  name: string;
  organization: string;
  designation: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  service: ConsultationService['title'];
  serviceId: ConsultationService['id'];
  meetingMode: ConsultationMeetingMode;
  date: string;
  time: ConsultationTimeSlot;
  message: string;
  status: ConsultationStatus;
  createdAt: string;
  updatedAt: string;
};

export type ConsultationBookingInput = {
  name: string;
  organization: string;
  designation: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  serviceId: ConsultationService['id'];
  meetingMode: ConsultationMeetingMode;
  date: string;
  time: ConsultationTimeSlot;
  message: string;
};

export type ConsultationBookingFilters = {
  search?: string;
  status?: ConsultationStatus | 'all';
  serviceId?: ConsultationService['id'] | 'all';
  sort?: 'date_asc' | 'date_desc';
};

const dbPath =
  process.env.CONSULTATION_DB_PATH || join(process.cwd(), '.data', 'consultation-bookings.sqlite');
let database: DatabaseSync | null = null;

function getDatabase() {
  if (!database) {
    mkdirSync(dirname(dbPath), { recursive: true });
    database = new DatabaseSync(dbPath);
    database.exec(`
      CREATE TABLE IF NOT EXISTS consultation_bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        organization TEXT NOT NULL,
        designation TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        city TEXT NOT NULL,
        state TEXT NOT NULL,
        serviceId TEXT NOT NULL,
        service TEXT NOT NULL,
        meetingMode TEXT NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        message TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'Pending',
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_consultation_bookings_date ON consultation_bookings(date);
      CREATE INDEX IF NOT EXISTS idx_consultation_bookings_status ON consultation_bookings(status);
      CREATE INDEX IF NOT EXISTS idx_consultation_bookings_service ON consultation_bookings(serviceId);
    `);
  }

  return database;
}

function rowToBooking(row: Record<string, unknown>): ConsultationBookingRecord {
  return {
    id: Number(row.id),
    name: String(row.name),
    organization: String(row.organization),
    designation: String(row.designation),
    email: String(row.email),
    phone: String(row.phone),
    city: String(row.city),
    state: String(row.state),
    serviceId: String(row.serviceId) as ConsultationBookingRecord['serviceId'],
    service: String(row.service) as ConsultationBookingRecord['service'],
    meetingMode: String(row.meetingMode) as ConsultationBookingRecord['meetingMode'],
    date: String(row.date),
    time: String(row.time) as ConsultationBookingRecord['time'],
    message: String(row.message),
    status: String(row.status) as ConsultationBookingRecord['status'],
    createdAt: String(row.createdAt),
    updatedAt: String(row.updatedAt),
  };
}

export function createConsultationBooking(input: ConsultationBookingInput) {
  const now = new Date().toISOString();
  const service = consultationServices.find((item) => item.id === input.serviceId);
  if (!service) {
    throw new Error('Selected service is not available.');
  }

  const normalizedPhone = normalizeIndianPhoneNumber(input.phone);
  const db = getDatabase();
  const existing = db
    .prepare(
      `
      SELECT id
      FROM consultation_bookings
      WHERE date = ? AND time = ? AND status != 'Cancelled'
      LIMIT 1
    `,
    )
    .get(input.date, input.time) as { id?: number } | undefined;

  if (existing) {
    throw new Error('The selected time is no longer available. Please choose another slot.');
  }

  const result = db
    .prepare(
      `
      INSERT INTO consultation_bookings (
        name,
        organization,
        designation,
        email,
        phone,
        city,
        state,
        serviceId,
        service,
        meetingMode,
        date,
        time,
        message,
        status,
        createdAt,
        updatedAt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Pending', ?, ?)
    `,
    )
    .run(
      input.name,
      input.organization,
      input.designation,
      input.email,
      normalizedPhone,
      input.city,
      input.state,
      input.serviceId,
      service.title,
      input.meetingMode,
      input.date,
      input.time,
      input.message,
      now,
      now,
    );

  const booking = db
    .prepare('SELECT * FROM consultation_bookings WHERE id = ?')
    .get(result.lastInsertRowid) as Record<string, unknown> | undefined;

  if (!booking) {
    throw new Error('Unable to create the consultation booking.');
  }

  return rowToBooking(booking);
}

export function listConsultationBookings(filters: ConsultationBookingFilters = {}) {
  const db = getDatabase();
  const clauses: string[] = [];
  const params: Array<string> = [];

  if (filters.search?.trim()) {
    clauses.push(
      `(name LIKE ? OR organization LIKE ? OR designation LIKE ? OR email LIKE ? OR phone LIKE ? OR city LIKE ? OR state LIKE ? OR service LIKE ? OR message LIKE ?)`,
    );
    const term = `%${filters.search.trim()}%`;
    params.push(term, term, term, term, term, term, term, term, term);
  }

  if (filters.status && filters.status !== 'all') {
    clauses.push('status = ?');
    params.push(filters.status);
  }

  if (filters.serviceId && filters.serviceId !== 'all') {
    clauses.push('serviceId = ?');
    params.push(filters.serviceId);
  }

  const where = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
  const orderBy =
    filters.sort === 'date_desc' ? 'date DESC, time DESC, id DESC' : 'date ASC, time ASC, id ASC';

  const rows = db
    .prepare(
      `
      SELECT *
      FROM consultation_bookings
      ${where}
      ORDER BY ${orderBy}
    `,
    )
    .all(...params) as Record<string, unknown>[];

  return rows.map(rowToBooking);
}

export function getConsultationBookingById(id: number) {
  const db = getDatabase();
  const row = db
    .prepare('SELECT * FROM consultation_bookings WHERE id = ?')
    .get(id) as Record<string, unknown> | undefined;

  return row ? rowToBooking(row) : null;
}

export function updateConsultationBookingStatus(id: number, status: ConsultationStatus) {
  if (!consultationStatuses.includes(status)) {
    throw new Error('Invalid status.');
  }

  const db = getDatabase();
  const now = new Date().toISOString();
  const result = db
    .prepare(
      `
      UPDATE consultation_bookings
      SET status = ?, updatedAt = ?
      WHERE id = ?
    `,
    )
    .run(status, now, id);

  return result.changes > 0;
}

export function deleteConsultationBooking(id: number) {
  const db = getDatabase();
  const result = db.prepare('DELETE FROM consultation_bookings WHERE id = ?').run(id);
  return result.changes > 0;
}

export function getBookedTimesForDate(date: string) {
  const db = getDatabase();
  const rows = db
    .prepare(
      `
      SELECT time
      FROM consultation_bookings
      WHERE date = ? AND status != 'Cancelled'
      ORDER BY time ASC
    `,
    )
    .all(date) as Array<{ time: string }>;

  return rows.map((row) => row.time as ConsultationTimeSlot);
}

export function getConsultationServiceById(serviceId: ConsultationService['id']) {
  return consultationServices.find((service) => service.id === serviceId) || null;
}

export function formatConsultationBookingDate(date: string) {
  return formatIndiaDate(date);
}

export function consultationBookingToDisplay(booking: ConsultationBookingRecord) {
  return {
    ...booking,
    formattedDate: formatConsultationBookingDate(booking.date),
  };
}

export function isConsultationSlotAvailable(date: string, time: ConsultationTimeSlot) {
  const db = getDatabase();
  const row = db
    .prepare(
      `
      SELECT id
      FROM consultation_bookings
      WHERE date = ? AND time = ? AND status != 'Cancelled'
      LIMIT 1
    `,
    )
    .get(date, time);

  return !row;
}

