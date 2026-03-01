"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getProjectById } from "@/lib/projects";

export default function RestrictedAccess() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id.toLowerCase() : "";
  const PROJECT = getProjectById(id);

  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [reason, setReason]   = useState("");
  const [status, setStatus]   = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !PROJECT) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/request-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, reason, project: PROJECT.title }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  /* 404 fallback */
  if (mounted && (!PROJECT || !PROJECT.restricted)) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono', monospace", background: "#fff", color: "#111" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.12em", color: "#aaa", marginBottom: 12, textTransform: "uppercase" }}>404</p>
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 16px" }}>Project not found.</h1>
        <a href="/works" style={{ fontSize: 11, color: "#111", letterSpacing: "0.06em", textDecoration: "none", borderBottom: "1px solid #ccc" }}>
          ← Back to Works
        </a>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", minHeight: "100vh", color: "#111", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Space+Mono:wght@400;700&display=swap');

        * { box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .fade-1 { animation: fadeUp 0.6s ease both; animation-delay: 0.05s; }
        .fade-2 { animation: fadeUp 0.6s ease both; animation-delay: 0.15s; }
        .fade-3 { animation: fadeUp 0.6s ease both; animation-delay: 0.25s; }
        .fade-4 { animation: fadeUp 0.6s ease both; animation-delay: 0.38s; }
        .fade-5 { animation: fadeUp 0.6s ease both; animation-delay: 0.50s; }

        .mpaa-badge {
          display: inline-flex; align-items: stretch;
          border: 3px solid #111; background: #fff; user-select: none;
        }
        .mpaa-r {
          width: 64px; display: flex; align-items: center; justify-content: center;
          border-right: 3px solid #111; background: #111;
        }
        .mpaa-r span {
          font-family: 'Space Grotesk', sans-serif; font-size: 44px;
          font-weight: 700; color: #fff; line-height: 1; letter-spacing: -0.04em;
        }
        .mpaa-text-col {
          padding: 8px 14px; display: flex; flex-direction: column;
          justify-content: center; gap: 3px;
        }
        .mpaa-title-row {
          display: flex; align-items: center; gap: 8px;
          border-bottom: 1.5px solid #111; padding-bottom: 5px; margin-bottom: 4px;
        }
        .mpaa-title-row span {
          font-family: 'Space Mono', monospace; font-size: 13px; font-weight: 700;
          letter-spacing: 0.12em; color: #111; text-transform: uppercase;
        }
        .mpaa-sub {
          font-family: 'Space Mono', monospace; font-size: 8px;
          letter-spacing: 0.1em; color: #111; text-transform: uppercase; line-height: 1.4;
        }
        .mpaa-globe {
          width: 20px; height: 20px; border: 1.5px solid #111; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .mpaa-globe::before {
          content: ''; width: 10px; height: 10px;
          border: 1.5px solid #111; border-radius: 50%;
        }

        .info-row {
          display: flex; justify-content: space-between; align-items: baseline;
          padding: 11px 0; border-bottom: 1px solid #e8e8e8; font-size: 12px;
        }
        .info-row:last-child { border-bottom: none; }
        .info-key {
          font-family: 'Space Mono', monospace; font-size: 9px;
          letter-spacing: 0.08em; text-transform: uppercase; color: #aaa;
        }
        .info-val {
          font-family: 'Space Grotesk', sans-serif; font-size: 12px;
          font-weight: 500; color: #111; text-align: right;
        }

        .br-tag {
          display: inline-block; padding: 3px 8px; font-size: 10px;
          border: 2px solid #111; font-family: 'Space Mono', monospace;
          letter-spacing: 0.04em; text-transform: uppercase;
        }

        .ra-input {
          width: 100%; border: 2px solid #111; background: #fff; color: #111;
          padding: 11px 14px; font-size: 13px; font-family: 'Space Grotesk', sans-serif;
          outline: none; resize: none; transition: border-color 0.15s;
        }
        .ra-input::placeholder { color: #bbb; }
        .ra-input:focus { border-color: #555; }

        .ra-label {
          display: block; font-family: 'Space Mono', monospace; font-size: 9px;
          letter-spacing: 0.1em; text-transform: uppercase; color: #888; margin-bottom: 6px;
        }

        .ra-btn {
          width: 100%; padding: 13px; background: #111; color: #fff;
          border: 2px solid #111; font-family: 'Space Mono', monospace;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.15s;
        }
        .ra-btn:hover:not(:disabled) {
          background: #fff; color: #111;
          transform: translate(-2px, -2px); box-shadow: 2px 2px 0 #111;
        }
        .ra-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        .nda-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #111;
          display: inline-block; animation: blink 1.4s step-start infinite;
        }

        .back-link {
          font-family: 'Space Mono', monospace; font-size: 11px;
          letter-spacing: 0.04em; color: #111; text-decoration: none;
        }
        .back-link:hover { text-decoration: underline; }

        @media (max-width: 720px) {
          .page-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .page-pad  { padding: 32px 20px !important; }
          .nav-pad   { padding: 14px 20px !important; }
        }
      `}</style>

      {/* Nav */}
      <nav className="nav-pad" style={{
        padding: "16px 40px", borderBottom: "2px solid #111",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, background: "#fff", zIndex: 20,
      }}>
        <a href="/works" className="back-link">← BACK</a>
        <div style={{ display: "flex", alignItems: "center", height: 28 }}>
          <Image src="/images/footer1.png" alt="Sarthak Garg" width={120} height={30} priority style={{ objectFit: "contain" }} />
        </div>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#bbb", letterSpacing: "0.04em" }}>
          RESTRICTED
        </span>
      </nav>

      {/* Page body */}
      <div className="page-pad" style={{ padding: "52px 40px 72px", maxWidth: 1100, margin: "0 auto" }}>

        {/* Title row */}
        {mounted && PROJECT && (
          <div className="fade-1" style={{ marginBottom: 36, paddingBottom: 28, borderBottom: "2px solid #111" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <div>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: "0.12em", color: "#aaa", marginBottom: 8, textTransform: "uppercase" }}>
                  Case Study
                </p>
                <h1 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(36px, 6vw, 64px)",
                  fontWeight: 700, letterSpacing: "-0.03em",
                  lineHeight: 0.95, color: "#111", margin: 0,
                }}>
                  {PROJECT.title}
                </h1>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: "#888", marginTop: 8, fontWeight: 300 }}>
                  {PROJECT.subtitle}
                </p>
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center", paddingTop: 4 }}>
                <span className="nda-dot" />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#aaa", letterSpacing: "0.08em" }}>NDA</span>
              </div>
            </div>
          </div>
        )}

        {/* Main grid */}
        {mounted && PROJECT && (
          <div className="page-grid" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 56, alignItems: "start" }}>

            {/* LEFT */}
            <div>
              <div className="fade-2" style={{ marginBottom: 36 }}>
                <div className="mpaa-badge">
                  <div className="mpaa-r"><span>R</span></div>
                  <div className="mpaa-text-col">
                    <div className="mpaa-title-row">
                      <span>RESTRICTED</span>
                      <div className="mpaa-globe" />
                    </div>
                    <p className="mpaa-sub">
                      NDA PROTECTED · CONTACT SARTHAK GARG<br />
                      FOR AUTHORISED ACCESS
                    </p>
                  </div>
                </div>
              </div>

              <div className="fade-3" style={{ marginBottom: 32 }}>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 14,
                  lineHeight: 1.8, color: "#555", maxWidth: 480,
                  borderLeft: `3px solid ${PROJECT.accent}`, paddingLeft: 16,
                }}>
                  {PROJECT.ndaDetails}
                </p>
              </div>

              <div className="fade-3" style={{ marginBottom: 32, border: "2px solid #111" }}>
                <div style={{ padding: "10px 16px", background: "#111" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.12em", color: "#fff", textTransform: "uppercase" }}>
                    Project Details
                  </span>
                </div>
                <div style={{ padding: "0 16px" }}>
                  {[
                    { k: "Project",       v: PROJECT.title },
                    { k: "Category",      v: PROJECT.type },
                    { k: "Year",          v: PROJECT.year },
                    { k: "Client",        v: PROJECT.client ?? "Confidential" },
                    { k: "NDA Status",    v: "Active · Confidential" },
                    { k: "Response Time", v: "Within 48 hours" },
                  ].map(row => (
                    <div key={row.k} className="info-row">
                      <span className="info-key">{row.k}</span>
                      <span className="info-val" style={row.k === "NDA Status" ? { color: "#111", fontWeight: 700 } : {}}>
                        {row.v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fade-4">
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.1em", color: "#aaa", textTransform: "uppercase", marginBottom: 10 }}>
                  Stack
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {PROJECT.tags.map(t => <span key={t} className="br-tag">{t}</span>)}
                </div>
              </div>
            </div>

            {/* RIGHT: form */}
            <div className="fade-5">
              <div style={{ border: "2px solid #111" }}>
                <div style={{ padding: "12px 20px", borderBottom: "2px solid #111", background: "#f8f8f8" }}>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#111", margin: 0 }}>
                    Request Access
                  </p>
                </div>

                <div style={{ padding: "24px 20px" }}>
                  {status === "sent" ? (
                    <div style={{ textAlign: "center", padding: "20px 0" }}>
                      <div style={{ width: 48, height: 48, border: "2px solid #111", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Request sent.</p>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: "#888", lineHeight: 1.6 }}>
                        Sarthak will review and get back to you within 48 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                      <div>
                        <label className="ra-label">Full Name *</label>
                        <input className="ra-input" type="text" placeholder="Jane Smith"
                          value={name} onChange={e => setName(e.target.value)} required />
                      </div>
                      <div>
                        <label className="ra-label">Email Address *</label>
                        <input className="ra-input" type="email" placeholder="jane@company.com"
                          value={email} onChange={e => setEmail(e.target.value)} required />
                      </div>
                      <div>
                        <label className="ra-label">Reason <span style={{ opacity: 0.5 }}>(optional)</span></label>
                        <textarea className="ra-input" rows={3}
                          placeholder="Recruiter, collaborator, client..."
                          value={reason} onChange={e => setReason(e.target.value)} />
                      </div>

                      {status === "error" && (
                        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#cc0000", letterSpacing: "0.04em" }}>
                          Failed to send. Email directly.
                        </p>
                      )}

                      <button className="ra-btn" type="submit" disabled={status === "sending" || !name || !email}>
                        {status === "sending" ? "Sending..." : "Send Request →"}
                      </button>

                      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#ccc", letterSpacing: "0.05em", textAlign: "center", lineHeight: 1.6 }}>
                        Used only to verify access. No spam.
                      </p>
                    </form>
                  )}
                </div>

                <div style={{ borderTop: "2px solid #111", padding: "14px 20px", background: "#f8f8f8", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#aaa", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Or directly
                  </span>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sarthak@example.com"}`}
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#111", letterSpacing: "0.04em", textDecoration: "none", borderBottom: "1px solid #ccc" }}
                  >
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sarthak@example.com"}
                  </a>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ padding: "24px 40px", borderTop: "2px solid #111", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="/" style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#999", letterSpacing: "0.06em", textDecoration: "none" }}>← HOME</a>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#ddd", letterSpacing: "0.06em" }}>SARTHAK GARG</span>
      </div>
    </div>
  );
}