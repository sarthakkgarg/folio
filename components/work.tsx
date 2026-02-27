"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function UnderConstruction() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);
  const [dots, setDots] = useState(1);

  useEffect(() => {
    setMounted(true);

    // IST clock
    const clockId = setInterval(() => {
      const ist = new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      }).format(new Date());
      setTime(ist);
    }, 1000);

    // animated dots
    const dotsId = setInterval(() => {
      setDots((d) => (d === 3 ? 1 : d + 1));
    }, 500);

    return () => {
      clearInterval(clockId);
      clearInterval(dotsId);
    };
  }, []);

  return (
    <div style={s.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(0.8); }
        }
        @keyframes scan {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        * { box-sizing: border-box; }

        .anim-nav  { animation: slideDown 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .anim-hero { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
        .anim-sub  { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        .anim-bar  { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.55s both; }
        .anim-foot { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.7s both; }

        .scan-line {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00d632, transparent);
          animation: scan 4s linear infinite;
          pointer-events: none;
          opacity: 0.4;
          z-index: 999;
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: #00d632;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }

        .marquee-wrap {
          overflow: hidden;
          border-top: 1px solid #e8e8e8;
          border-bottom: 1px solid #e8e8e8;
          padding: 10px 0;
          white-space: nowrap;
        }
        .marquee-inner {
          display: inline-flex;
          animation: marquee 18s linear infinite;
        }
        .marquee-item {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #bbb;
          padding: 0 32px;
        }
        .marquee-item span {
          color: #00d632;
          margin-right: 8px;
        }

        .progress-bar {
          width: 100%;
          height: 2px;
          background: #f0f0f0;
          border-radius: 999px;
          overflow: hidden;
          margin-top: 6px;
        }
        .progress-fill {
          height: 100%;
          width: 68%;
          background: #00d632;
          border-radius: 999px;
          position: relative;
        }
        .progress-fill::after {
          content: '';
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 40px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6));
          animation: blink 1.5s ease-in-out infinite;
        }

        .notify-input {
          background: none;
          border: none;
          border-bottom: 1px solid #ddd;
          outline: none;
          font-size: 13px;
          color: #111;
          padding: 4px 0;
          width: 220px;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }
        .notify-input::placeholder { color: #bbb; }
        .notify-input:focus { border-color: #00d632; }

        .notify-btn {
          background: #111;
          color: #fff;
          border: none;
          padding: 6px 16px;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .notify-btn:hover {
          background: #00d632;
          color: #111;
        }

        @media (max-width: 640px) {
          .hero-text { font-size: clamp(48px, 14vw, 80px) !important; }
          .page-nav  { padding: 14px 20px !important; }
          .page-body { padding: 0 20px !important; }
          .notify-row { flex-direction: column !important; gap: 12px !important; }
          .notify-input { width: 100% !important; }
        }
      `}</style>

      {/* Scan line effect */}
      <div className="scan-line" />

      {/* NAV */}
      <nav style={s.nav} className={`page-nav${mounted ? " anim-nav" : ""}`}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/images/footer1.png"
            alt="Sarthak Garg"
            width={160}
            height={40}
            draggable={false}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <div style={s.tag}>
          <span style={s.tagDot} />
          <span style={{ whiteSpace: "nowrap" as const, fontSize: "12px" }}>
            {time} IST
          </span>
        </div>
      </nav>

      {/* MARQUEE */}
      <div className={`marquee-wrap${mounted ? " anim-bar" : ""}`}>
        <div className="marquee-inner">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="marquee-item">
              <span>◆</span> Under Construction
              <span style={{ marginLeft: "32px" }}>◆</span> Coming Soon
              <span style={{ marginLeft: "32px" }}>◆</span> Stay Tuned
              <span style={{ marginLeft: "32px" }}></span>
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <main style={s.main}>
        <div style={s.body} className="page-body">

          {/* Status line */}
          <div className={mounted ? "anim-hero" : ""} style={s.statusRow}>
            <span style={s.statusDot} />
            <span style={s.statusText}>Page is being built</span>
            <span style={{ color: "#bbb", fontSize: "12px" }}>
              {"·".repeat(dots)}
            </span>
          </div>

          {/* Big heading */}
          <h1
            className={`hero-text${mounted ? " anim-hero" : ""}`}
            style={s.heroText}
          >
            Something<br />
            <span style={{ color: "#00d632" }}>great</span> is<br />
            on its way
            <span className="cursor" />
          </h1>

          {/* Sub copy */}
          <p className={mounted ? "anim-sub" : ""} style={s.subText}>
            I'm crafting this page with care. Check back soon —<br />
            it'll be worth the wait.
          </p>

          {/* Progress */}
          <div className={mounted ? "anim-sub" : ""} style={s.progressWrap}>
            <div style={s.progressLabel}>
              <span>Build progress</span>
              <span style={{ color: "#00d632", fontWeight: 500 }}>68%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" />
            </div>
          </div>

          {/* Notify */}
          <div className={mounted ? "anim-foot" : ""} style={s.notifyWrap}>
            <p style={s.notifyLabel}>Get notified when it's live</p>
            <div className="notify-row" style={s.notifyRow}>
              <input
                className="notify-input"
                type="email"
                placeholder="your@email.com"
              />
              <button className="notify-btn">Notify me</button>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER BAR */}
      <footer style={s.footer} className={mounted ? "anim-foot" : ""}>
        <span style={{ color: "#bbb", fontSize: "12px" }}>
          © {new Date().getFullYear()} Sarthak Garg
        </span>
        <a href="/" style={s.backLink}>
          ← Back to home
        </a>
      </footer>
    </div>
  );
}

/* ─── Styles ─────────────────────────────────────────── */
const s = {
  page: {
    fontSize: "14px",
    color: "#111",
    backgroundColor: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.5",
    fontFamily: "'DM Mono', monospace",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 32px",
    borderBottom: "1px solid #e8e8e8",
    position: "sticky" as const,
    top: 0,
    backgroundColor: "#fff",
    zIndex: 10,
  },
  tag: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#111",
    color: "#fff",
    padding: "5px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    userSelect: "none" as const,
  },
  tagDot: {
    display: "inline-block",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#00d632",
    animation: "pulse-dot 2s ease-in-out infinite",
    flexShrink: 0,
  },
  main: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  body: {
    padding: "0 32px",
    maxWidth: "700px",
    width: "100%",
    margin: "0 auto",
    paddingTop: "64px",
    paddingBottom: "64px",
  },
  statusRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "28px",
  },
  statusDot: {
    display: "inline-block",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#00d632",
    animation: "pulse-dot 2s ease-in-out infinite",
  },
  statusText: {
    fontSize: "12px",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#999",
  },
  heroText: {
    fontSize: "clamp(56px, 10vw, 96px)",
    fontWeight: 500,
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
    margin: "0 0 32px",
    fontFamily: "'DM Mono', monospace",
  },
  subText: {
    fontSize: "14px",
    color: "#888",
    lineHeight: 1.8,
    margin: "0 0 40px",
  },
  progressWrap: {
    marginBottom: "48px",
    maxWidth: "320px",
  },
  progressLabel: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "#aaa",
    marginBottom: "4px",
    letterSpacing: "0.04em",
  },
  notifyWrap: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  notifyLabel: {
    fontSize: "12px",
    color: "#aaa",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    margin: 0,
  },
  notifyRow: {
    display: "flex",
    alignItems: "flex-end",
    gap: "16px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    borderTop: "1px solid #e8e8e8",
  },
  backLink: {
    fontSize: "12px",
    color: "#111",
    textDecoration: "none",
    letterSpacing: "0.04em",
    transition: "color 0.2s ease",
  },
};