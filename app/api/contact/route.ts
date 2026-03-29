import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { firstName, lastName, email, company, service, message } = await req.json();

    await resend.emails.send({
      from: "QAGBS Contact Form <onboarding@resend.dev>",
      to: ["contact@qagbs.com"],
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName}${service ? ` — ${service}` : ""}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
