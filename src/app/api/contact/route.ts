import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ ok: false, errors: result.error.flatten().fieldErrors }, { status: 400 });
  }

  // TODO: send via Resend / Nodemailer / CRM webhook
  console.log("New enquiry:", result.data);
  return NextResponse.json({ ok: true });
}
