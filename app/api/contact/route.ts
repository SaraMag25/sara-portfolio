import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
  Name?: string;
  Email?: string;
  Message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: ContactRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const name = (body.name ?? body.Name ?? "").trim();
  const email = (body.email ?? body.Email ?? "").trim();
  const message = (body.message ?? body.Message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        success: false,
        error: "All fields (Name, Email, Message) are required.",
      },
      { status: 400 }
    );
  }

  if (
    !EMAIL_REGEX.test(email) ||
    name.length > MAX_NAME ||
    email.length > MAX_EMAIL ||
    message.length > MAX_MESSAGE
  ) {
    return NextResponse.json(
      { success: false, error: "Invalid field values." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error(
      "[POST /api/contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars."
    );
    return NextResponse.json(
      { success: false, error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const { data, error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `[Portfolio] Nova mensagem de ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.5;">
        <h2>Nova mensagem pelo portfólio</h2>
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <hr />
        <p>${safeMessage}</p>
      </div>
    `,
  });

  if (error) {
    console.error("[POST /api/contact] Resend error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message." },
      { status: 502 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      status: 200,
      message: "Message delivered successfully.",
      id: data?.id,
    },
    { status: 200 }
  );
}
