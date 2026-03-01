// app/api/request-access/route.ts
// (or pages/api/request-access.ts for Pages Router — see bottom of file)

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ─── Configure your SMTP credentials via environment variables ────────────
   Add to .env.local:

   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password          ← Gmail App Password (not your real password)
   EMAIL_TO=sarthak@example.com          ← Where access requests land
   EMAIL_FROM="Sarthak Portfolio <your-gmail@gmail.com>"

   For Gmail: enable 2FA → create an App Password at
   https://myaccount.google.com/apppasswords
   ────────────────────────────────────────────────────────────────────────── */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, reason, project } = body as {
      name: string;
      email: string;
      reason?: string;
      project?: string;
    };

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    /* ── Email to YOU (Sarthak) ── */
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `[Portfolio] Access Request — ${project ?? "Project"}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
          <table cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;margin:40px auto;">
            <tr>
              <td style="padding:0 24px;">

                <!-- Header bar -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:20px 0;border-bottom:2px solid #222;">
                      <span style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.12em;color:#666;text-transform:uppercase;">
                        PORTFOLIO · ACCESS REQUEST
                      </span>
                    </td>
                  </tr>
                </table>

                <!-- Red accent line -->
                <div style="height:3px;background:linear-gradient(90deg,#ff2d2d,transparent);margin-bottom:32px;"></div>

                <!-- Project name -->
                <p style="margin:0 0 6px;font-family:'Courier New',monospace;font-size:9px;letter-spacing:0.1em;color:#555;text-transform:uppercase;">
                  REQUESTED PROJECT
                </p>
                <p style="margin:0 0 32px;font-size:26px;font-weight:700;color:#f0ede6;letter-spacing:-0.02em;">
                  ${project ?? "Unknown"}
                </p>

                <!-- Details grid -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #1a1a1a;">
                      <span style="font-family:'Courier New',monospace;font-size:9px;color:#555;text-transform:uppercase;letter-spacing:0.08em;">NAME</span><br/>
                      <span style="font-size:14px;color:#f0ede6;font-weight:500;margin-top:4px;display:block;">${name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #1a1a1a;">
                      <span style="font-family:'Courier New',monospace;font-size:9px;color:#555;text-transform:uppercase;letter-spacing:0.08em;">EMAIL</span><br/>
                      <a href="mailto:${email}" style="font-size:14px;color:#f0ede6;font-weight:500;margin-top:4px;display:block;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 0;">
                      <span style="font-family:'Courier New',monospace;font-size:9px;color:#555;text-transform:uppercase;letter-spacing:0.08em;">REASON</span><br/>
                      <span style="font-size:13px;color:#888;margin-top:6px;display:block;line-height:1.65;">
                        ${reason?.trim() || "<em style='color:#444'>No reason provided</em>"}
                      </span>
                    </td>
                  </tr>
                </table>

                <!-- Reply CTA -->
                <div style="margin-top:32px;">
                  <a href="mailto:${email}?subject=Re: Access to ${project ?? "Project"}"
                    style="display:inline-block;padding:13px 24px;background:#f0ede6;color:#0a0a0a;text-decoration:none;font-family:'Courier New',monospace;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
                    REPLY TO REQUESTER →
                  </a>
                </div>

                <!-- Footer -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:32px 0 0;border-top:1px solid #1a1a1a;margin-top:40px;">
                      <span style="font-family:'Courier New',monospace;font-size:9px;color:#333;letter-spacing:0.08em;text-transform:uppercase;">
                        SARTHAK GARG · PORTFOLIO · ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase()}
                      </span>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    /* ── Confirmation email TO the requester ── */
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: email,
      subject: `Your access request for ${project ?? "the project"} — received`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
          <table cellpadding="0" cellspacing="0" width="100%" style="max-width:500px;margin:40px auto;">
            <tr>
              <td style="padding:0 24px;">
                <div style="height:3px;background:linear-gradient(90deg,#ff2d2d,transparent);margin-bottom:32px;"></div>

                <p style="font-family:'Courier New',monospace;font-size:9px;letter-spacing:0.1em;color:#555;text-transform:uppercase;margin:0 0 16px;">
                  ACCESS REQUEST · RECEIVED
                </p>
                <p style="font-size:22px;font-weight:700;color:#f0ede6;margin:0 0 20px;letter-spacing:-0.02em;line-height:1.2;">
                  Hey ${name.split(" ")[0]},<br/>you're on the list.
                </p>
                <p style="font-size:13px;color:#888;line-height:1.7;margin:0 0 24px;">
                  I've received your request to view <strong style="color:#f0ede6;">${project ?? "the project"}</strong>.
                  I'll review it and get back to you within 48 hours.
                </p>
                <p style="font-size:13px;color:#888;line-height:1.7;margin:0 0 32px;">
                  If you need to reach me sooner, just reply to this email.
                </p>

                <div style="border-top:1px solid #1a1a1a;padding-top:24px;">
                  <span style="font-family:'Courier New',monospace;font-size:9px;color:#444;letter-spacing:0.06em;text-transform:uppercase;">
                    — Sarthak Garg
                  </span>
                </div>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[request-access] Email error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}


/* ══════════════════════════════════════════════════════════════════════════
   PAGES ROUTER VERSION (pages/api/request-access.ts)
   Use this if you're on Next.js Pages Router instead of App Router.
   Delete the POST export above and use this handler instead.
   ══════════════════════════════════════════════════════════════════════════

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, reason, project } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Name and email required." });

  try {
    await transporter.sendMail({ ... }); // same logic as above
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send." });
  }
}
*/