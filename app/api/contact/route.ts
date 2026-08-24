import { NextResponse } from "next/server";
import { contactInfo } from "../../lib/content";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  message?: string;
  website?: string; // honeypot
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot — bots fill hidden fields; silently succeed.
    if (body.website?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const firstName = body.firstName?.trim() ?? "";
    const lastName = body.lastName?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill in your name, email, and message." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { ok: false, error: "Message is too long." },
        { status: 400 },
      );
    }

    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    const subject = `New website enquiry from ${fullName}`;
    const text = [
      "New enquiry from the Dyota ES website contact form.",
      "",
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const delivered = await deliverEnquiry({
      to: contactInfo.email,
      replyTo: email,
      subject,
      text,
      fullName,
      email,
      company,
      message,
    });

    if (!delivered.ok) {
      return NextResponse.json(
        {
          ok: false,
          error:
            delivered.error ||
            "Unable to send your enquiry right now. Please email info@dyotaes.com directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Unable to send your enquiry right now. Please email info@dyotaes.com directly.",
      },
      { status: 500 },
    );
  }
}

async function deliverEnquiry(input: {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  fullName: string;
  email: string;
  company: string;
  message: string;
}): Promise<{ ok: boolean; error?: string }> {
  // No Resend / SMTP key required.
  // FormSubmit delivers enquiries to info@dyotaes.com.
  // First submission may send an activation email that must be confirmed once.
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(input.to)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: input.fullName,
        email: input.email,
        _replyto: input.replyTo,
        company: input.company || "—",
        message: input.message,
        _subject: input.subject,
        _template: "table",
        _captcha: "false",
      }),
    },
  );

  const raw = await response.text();
  let parsed: { success?: string | boolean; message?: string } = {};
  try {
    parsed = JSON.parse(raw) as typeof parsed;
  } catch {
    // non-JSON responses are treated as failures below
  }

  if (!response.ok) {
    console.error("FormSubmit error:", raw);
    return { ok: false, error: "Email delivery failed." };
  }

  // FormSubmit returns success even while awaiting activation confirmation.
  if (parsed.success === false) {
    console.error("FormSubmit rejected:", raw);
    return {
      ok: false,
      error:
        parsed.message ||
        "Email delivery failed. Please try again or email info@dyotaes.com.",
    };
  }

  return { ok: true };
}
