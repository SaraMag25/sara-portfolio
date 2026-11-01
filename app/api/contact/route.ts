import { NextResponse } from "next/server";

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
  Name?: string;
  Email?: string;
  Message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

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

    console.log("==========================================");
    console.log("[POST /api/contact] New contact request:");
    console.log({ name, email, message, receivedAt: new Date().toISOString() });
    console.log("==========================================");

    return NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Message delivered successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[POST /api/contact] Error parsing request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Invalid JSON payload.",
      },
      { status: 400 }
    );
  }
}
