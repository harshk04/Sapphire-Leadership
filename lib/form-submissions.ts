import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import type { SubmissionFieldValue, FormSubmission } from './email';

export type FormSubmissionRecord = {
  id: number;
  formName: string;
  sourcePage: string;
  subject: string;
  fields: Record<string, SubmissionFieldValue>;
  createdAt: string;
  updatedAt: string;
};

export type FormSubmissionFilters = {
  search?: string;
  sort?: 'newest' | 'oldest';
};

const dbPath =
  process.env.FORM_SUBMISSIONS_DB_PATH || join(process.cwd(), '.data', 'form-submissions.sqlite');
let database: DatabaseSync | null = null;

function getDatabase() {
  if (!database) {
    mkdirSync(dirname(dbPath), { recursive: true });
    database = new DatabaseSync(dbPath);
    database.exec(`
      CREATE TABLE IF NOT EXISTS form_submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        formName TEXT NOT NULL,
        sourcePage TEXT NOT NULL,
        subject TEXT NOT NULL,
        fields TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_form_submissions_createdAt ON form_submissions(createdAt);
      CREATE INDEX IF NOT EXISTS idx_form_submissions_formName ON form_submissions(formName);
    `);
  }

  return database;
}

function rowToSubmission(row: Record<string, unknown>): FormSubmissionRecord {
  return {
    id: Number(row.id),
    formName: String(row.formName),
    sourcePage: String(row.sourcePage),
    subject: String(row.subject),
    fields: JSON.parse(String(row.fields)) as Record<string, SubmissionFieldValue>,
    createdAt: String(row.createdAt),
    updatedAt: String(row.updatedAt),
  };
}

export function createFormSubmissionRecord(input: FormSubmission) {
  const now = new Date().toISOString();
  const db = getDatabase();

  const result = db
    .prepare(
      `
      INSERT INTO form_submissions (
        formName,
        sourcePage,
        subject,
        fields,
        createdAt,
        updatedAt
      ) VALUES (?, ?, ?, ?, ?, ?)
    `,
    )
    .run(
      input.formName,
      input.sourcePage,
      input.subject,
      JSON.stringify(input.fields),
      now,
      now,
    );

  const row = db
    .prepare('SELECT * FROM form_submissions WHERE id = ?')
    .get(result.lastInsertRowid) as Record<string, unknown> | undefined;

  if (!row) {
    throw new Error('Unable to save the form submission.');
  }

  return rowToSubmission(row);
}

export function listFormSubmissions(filters: FormSubmissionFilters = {}) {
  const db = getDatabase();
  const clauses: string[] = [];
  const params: string[] = [];

  if (filters.search?.trim()) {
    const term = `%${filters.search.trim()}%`;
    clauses.push(`(formName LIKE ? OR sourcePage LIKE ? OR subject LIKE ? OR fields LIKE ?)`);
    params.push(term, term, term, term);
  }

  const where = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
  const orderBy = filters.sort === 'oldest' ? 'createdAt ASC, id ASC' : 'createdAt DESC, id DESC';

  const rows = db
    .prepare(
      `
      SELECT *
      FROM form_submissions
      ${where}
      ORDER BY ${orderBy}
    `,
    )
    .all(...params) as Record<string, unknown>[];

  return rows.map(rowToSubmission);
}

