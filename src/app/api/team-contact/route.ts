import { NextResponse } from "next/server";
import { Resend } from "resend";

import { teamDirectory } from "@/lib/teamDirectory";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Omninet Pro <hello@omninetpro.com>";

const formatHtml = (content: string) => `
  <div style="font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #0f172a;">
    ${content}
    <p style="margin-top: 24px; font-size: 13px; color: #475569;">
      — Omninet Pro Team
    </p>
  </div>
`;

export async function POST(request: Request) {
  try {
    const { teamId, visitorEmail, visitorMessage } = await request.json();

    if (!teamId || !visitorEmail) {
      return NextResponse.json(
        { message: "Team and email are required." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(visitorEmail)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const teamMember = teamDirectory[teamId];

    if (!teamMember) {
      return NextResponse.json(
        { message: "We could not find that team member." },
        { status: 404 },
      );
    }
    console.log("ENV present?", Boolean(process.env.RESEND_API_KEY));

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "Email service is not configured yet." },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const sanitizedMessage = (
      visitorMessage?.toString().trim() || "No additional message provided."
    )
      .slice(0, 1500)
      .replace(/\n/g, "<br />");

    const timestamp = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "UTC",
    }).format(new Date());

    const visitorHtml = formatHtml(`
      <p>Hi there,</p>
      <p>
        You requested to collaborate with <strong>${teamMember.name}</strong>.
        Your code (<strong>${teamMember.code}</strong>) was confirmed and your details
        have been shared with them.
      </p>
      <p>
        <strong>Your message:</strong><br />
        <span style="display: inline-block; margin-top: 4px; padding: 8px 12px; background: #f8fafc; border-radius: 8px;">
          ${sanitizedMessage}
        </span>
      </p>
      <p style="font-size: 13px; color: #475569;">
        You can expect a response from ${teamMember.name} at
        <a href="mailto:${teamMember.email}" style="color: #0ea5e9;">
          ${teamMember.email}
        </a>
        soon.
      </p>
    `);

    const teamHtml = formatHtml(`
      <p>Hello ${teamMember.name},</p>
      <p>
        You have a new collaboration request from
        <strong>${visitorEmail}</strong>.
      </p>
      <p>
        <strong>Message:</strong><br />
        <span style="display: inline-block; margin-top: 4px; padding: 8px 12px; background: #f8fafc; border-radius: 8px;">
          ${sanitizedMessage}
        </span>
      </p>
      <p style="font-size: 13px; color: #475569;">
        Request received on ${timestamp} (UTC).
      </p>
    `);

    await resend.batch.send([
      {
        from: FROM_EMAIL,
        to: visitorEmail,
        subject: `You contacted ${teamMember.name} at Omninet Pro`,
        html: visitorHtml,
      },
      {
        from: FROM_EMAIL,
        to: teamMember.email,
        subject: `New Omninet Pro request from ${visitorEmail}`,
        html: teamHtml,
      },
    ]);

    return NextResponse.json({ message: "Request sent successfully." });
  } catch (error) {
    console.error("[team-contact]", error);
    return NextResponse.json(
      { message: "Unable to send your request right now." },
      { status: 500 },
    );
  }
}
