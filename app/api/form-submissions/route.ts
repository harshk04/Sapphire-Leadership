import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendSubmissionEmail } from '@/lib/email';

export const runtime = 'nodejs';

const payloadSchema = z.object({
  formName: z.string().min(2),
  sourcePage: z.string().min(1),
  subject: z.string().min(2),
  fields: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])).default({}),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = payloadSchema.parse(json);

    await sendSubmissionEmail(payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unable to process submission.';
    const status = error instanceof z.ZodError ? 400 : 500;
    return NextResponse.json(
      { ok: false, error: message },
      { status },
    );
  }
}
