import { NextResponse } from "next/server";
import { contactInfo } from "../../lib/content";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  message?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Kept as a fallback endpoint. The contact UI posts directly to FormSubmit
 * from the browser (more reliable Origin/activation). This route still works
 * for tooling and can later switch to Resend if needed.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

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
    const origin =
      request.headers.get("origin") ||
      request.headers.get("referer") ||
      "https://www.dyotaes.com";

    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(contactInfo.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin.startsWith("http")
            ? new URL(origin).origin
            : "https://www.dyotaes.com",
          Referer: "https://www.dyotaes.com/contact",
        },
        body: JSON.stringify({
          name: fullName,
          email,
          _replyto: email,
          company: company || "—",
          message,
          _subject: `New website enquiry from ${fullName}`,
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
      console.error("FormSubmit non-JSON:", raw);
      return NextResponse.json(
        {
          ok: false,
          error: `Unable to send your enquiry. Please email ${contactInfo.email} directly.`,
        },
        { status: 502 },
      );
    }

    const success = parsed.success;
    if (success === false || success === "false") {
      const msg = parsed.message || "";
      if (/activat/i.test(msg)) {
        return NextResponse.json(
          {
            ok: false,
            needsActivation: true,
            error: `Please check ${contactInfo.email} for a FormSubmit activation email and click “Activate Form”.`,
          },
          { status: 409 },
        );
      }
      return NextResponse.json(
        {
          ok: false,
          error:
            msg ||
            `Unable to send your enquiry. Please email ${contactInfo.email} directly.`,
        },
        { status: 502 },
      );
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: `Unable to send your enquiry. Please email ${contactInfo.email} directly.`,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: `Unable to send your enquiry. Please email ${contactInfo.email} directly.`,
      },
      { status: 500 },
    );
  }
}
