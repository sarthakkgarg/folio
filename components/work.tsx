"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { FaGithub, FaApple, FaAndroid, FaArrowUpRightFromSquare, FaPlay, FaLock } from "react-icons/fa6";
import { PROJECTS } from "@/lib/projects";

type MediaTab = "web" | "mobile" | "video";

function VideoPreview({ src, accent }: { src: string; accent: string }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const toggle = () => {
    setPlaying(p => !p);
    playing ? ref.current?.pause() : ref.current?.play();
  };
  return (
    <div onClick={toggle} style={{ position: "relative", overflow: "hidden", background: "#111", aspectRatio: "16/9", cursor: "pointer", border: "2px solid #222" }}>
      <video ref={ref} src={src} style={{ width: "100%", height: "100%", objectFit: "cover" }} loop />
      {!playing && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.5)" }}>
          <div style={{ width: 52, height: 52, border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", color: accent }}>
            <FaPlay size={16} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function WorksAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [mediaTabs, setMediaTabs] = useState<Record<string, MediaTab>>({});
  const getTab = (id: string): MediaTab => mediaTabs[id] || "web";
  const setTab = (id: string, v: MediaTab) => setMediaTabs(prev => ({ ...prev, [id]: v }));
  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <div style={{ background: "#fff", minHeight: "100vh", color: "#111", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Space+Mono:wght@400;700&display=swap');

        * { box-sizing: border-box; }

        .acc-row { border-bottom: 2px solid #111; transition: background 0.15s; }
        .acc-row:hover { background: #f8f8f8; }
        .acc-row.open { background: #f8f8f8; }

        .acc-header {
          padding: 20px 40px; display: flex; align-items: center;
          justify-content: space-between; gap: 16px; user-select: none; cursor: pointer;
        }
        .acc-body { overflow: hidden; transition: max-height 0.5s cubic-bezier(0.22,1,0.36,1); }
        .acc-inner { padding: 0 40px 40px; }

        .acc-content-grid {
          display: grid; grid-template-columns: 1fr 320px;
          gap: 40px; align-items: start;
        }

        .br-link {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 8px 14px; font-size: 12px; font-weight: 700;
          text-decoration: none; cursor: pointer; border: 2px solid;
          transition: all 0.15s; letter-spacing: 0.04em;
          text-transform: uppercase; white-space: nowrap;
          font-family: 'Space Mono', monospace;
        }
        .br-link:hover { transform: translate(-2px,-2px); box-shadow: 2px 2px 0 #111; }

        .br-tag {
          display: inline-block; padding: 3px 8px; font-size: 10px;
          border: 2px solid #111; font-family: 'Space Mono', monospace;
          letter-spacing: 0.04em; text-transform: uppercase;
        }

        .br-tab {
          padding: 5px 13px; font-size: 10px; font-weight: 700;
          cursor: pointer; background: transparent; transition: all 0.15s;
          letter-spacing: 0.06em; text-transform: uppercase;
          font-family: 'Space Mono', monospace; border: 2px solid;
        }
        .br-tab:hover { transform: translate(-1px,-1px); box-shadow: 1px 1px 0 #111; }

        .plus-icon {
          width: 28px; height: 28px; border: 2px solid #111;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; font-weight: 700; flex-shrink: 0; line-height: 1;
          transition: transform 0.3s ease, background 0.2s ease;
        }
        .acc-row.open .plus-icon { background: #111; color: #fff; transform: rotate(45deg); }

        .img-web-wrap {
          width: 100%; aspect-ratio: 16/9; position: relative;
          border: 2px solid #ddd; overflow: hidden; background: #f5f5f5;
        }
        .img-mob-wrap {
          position: relative; aspect-ratio: 9/19; flex: 1; max-width: 140px;
          border: 2px solid #ddd; overflow: hidden; background: #f5f5f5;
        }

        .desc-line {
          margin: 0; font-size: 13px; color: #444; line-height: 1.78; padding-left: 14px;
        }

        .restricted-badge {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 3px 9px; border: 2px solid #111;
          font-family: 'Space Mono', monospace; font-size: 9px;
          letter-spacing: 0.08em; text-transform: uppercase;
          background: #111; color: #fff;
        }
        .restricted-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #ff2d2d; animation: blink 1.4s step-start infinite;
        }

        /* GitHub locked state */
        .github-locked {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 8px 14px; font-size: 12px; font-weight: 700;
          border: 2px solid #ddd; color: #bbb; background: #fafafa;
          font-family: 'Space Mono', monospace; letter-spacing: 0.04em;
          text-transform: uppercase; white-space: nowrap;
          cursor: not-allowed; position: relative;
        }
        .github-locked-tooltip {
          display: none; position: absolute;
          bottom: calc(100% + 6px); left: 50%; transform: translateX(-50%);
          background: #111; color: #fff; font-size: 9px;
          padding: 5px 10px; white-space: nowrap;
          font-family: 'Space Mono', monospace; letter-spacing: 0.04em;
          pointer-events: none; z-index: 10;
        }
        .github-locked:hover .github-locked-tooltip { display: block; }

        @media (max-width: 768px) {
          .acc-header { padding: 18px 20px; gap: 12px; }
          .acc-inner  { padding: 0 20px 32px; }
          .acc-content-grid { grid-template-columns: 1fr; gap: 28px; }
          .acc-title { font-size: 20px !important; }
          .links-row { gap: 6px !important; }
          .br-link { padding: 7px 11px; font-size: 11px; }
          .acc-meta { display: none; }
        }
        @media (max-width: 480px) {
          .acc-header { padding: 16px; }
          .acc-inner  { padding: 0 16px 28px; }
          .br-tag { font-size: 9px; padding: 2px 6px; }
          .br-tab { font-size: 9px; padding: 4px 10px; }
        }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      {/* Nav */}
      <nav style={{
        padding: "16px 40px", borderBottom: "2px solid #111",
        display: "grid", gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center", position: "sticky", top: 0, background: "#fff", zIndex: 20,
      }}>
        <a href="/" style={{ textDecoration: "none", color: "#111", fontSize: 12, fontFamily: "'Space Mono', monospace", letterSpacing: "0.04em", justifySelf: "start" }}>
          ← BACK
        </a>
        <div style={{ justifySelf: "center", display: "flex", alignItems: "center", height: 28 }}>
          <Image src="/images/footer1.png" alt="Sarthak Garg" width={120} height={30} priority style={{ objectFit: "contain" }} />
        </div>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#999", justifySelf: "end" }}>
          {PROJECTS.length} PROJECTS
        </span>
      </nav>

      {/* Hero */}
      <div style={{ padding: "52px 40px 44px", borderBottom: "2px solid #111" }}>
        <p style={{ margin: "0 0 10px", fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.12em", color: "#999" }}>
          SELECTED WORK
        </p>
        <h1 style={{
          margin: 0,
          fontFamily: "'Space Grotesk', 'Noto Sans Devanagari', sans-serif",
          fontSize: "clamp(44px, 9vw, 96px)",
          fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.95, color: "#111",
        }}>
          Projects / प्रोजेक्ट्स
        </h1>
        <p style={{ margin: "18px 0 0", fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: "#888", fontWeight: 300, maxWidth: 380 }}>
          Click any row to expand and explore the full case.
        </p>
      </div>

      {/* Accordion */}
      <main>
        {PROJECTS.map((p, i) => {
          const isOpen = openId === p.id;
          const tab = getTab(p.id);

          return (
            <div key={p.id} className={`acc-row${isOpen ? " open" : ""}`}>

              {/* Header */}
              <div className="acc-header" onClick={() => toggle(p.id)}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 20, flex: 1, minWidth: 0 }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#bbb", flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                      <h2 className="acc-title" style={{
                        margin: 0, fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "clamp(20px, 3vw, 34px)", fontWeight: 700,
                        letterSpacing: "-0.02em", lineHeight: 1, color: "#111",
                      }}>
                        {p.title}
                      </h2>
                      {p.restricted && (
                        <span className="restricted-badge">
                          <span className="restricted-dot" />
                          NDA
                        </span>
                      )}
                    </div>
                    <p style={{ margin: "3px 0 0", fontSize: 12, color: "#888", fontFamily: "'Space Grotesk', sans-serif" }}>
                      {p.subtitle}
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
                  <div className="acc-meta" style={{ textAlign: "right" }}>
                    <p style={{ margin: 0, fontSize: 10, fontFamily: "'Space Mono', monospace", color: "#bbb", letterSpacing: "0.06em" }}>{p.type}</p>
                    <p style={{ margin: "2px 0 0", fontSize: 10, fontFamily: "'Space Mono', monospace", color: p.accent }}>{p.year}</p>
                  </div>
                  <div className="plus-icon">+</div>
                </div>
              </div>

              {/* Body */}
              <div className="acc-body" style={{ maxHeight: isOpen ? "3000px" : "0px" }}>
                <div className="acc-inner">

                  {/* Links */}
                  <div className="links-row" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28, paddingTop: 4 }}>

                    {/* GitHub: clickable if public, greyed + locked icon if restricted */}
                    {p.github && !p.restricted && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="br-link"
                        style={{ borderColor: "#111", color: "#111", background: "transparent" }}>
                        <FaGithub size={14} /> GitHub
                      </a>
                    )}
                    {p.github && p.restricted && (
                      <span className="github-locked">
                        <FaGithub size={14} />
                        GitHub
                        <FaLock size={9} />
                        <span className="github-locked-tooltip">Request access to view repo</span>
                      </span>
                    )}

                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="br-link"
                        style={{ borderColor: "#111", color: "#fff", background: "#111" }}>
                        Live Site <FaArrowUpRightFromSquare size={11} />
                      </a>
                    )}
                    {p.appStore && (
                      <a href={p.appStore} target="_blank" rel="noopener noreferrer" className="br-link"
                        style={{ borderColor: "#111", color: "#111", background: "transparent" }}>
                        <FaApple size={13} /> App Store
                      </a>
                    )}
                    {p.playStore && (
                      <a href={p.playStore} target="_blank" rel="noopener noreferrer" className="br-link"
                        style={{ borderColor: "#111", color: "#111", background: "transparent" }}>
                        <FaAndroid size={13} /> Play Store
                      </a>
                    )}
                    {p.restricted && (
                      <a href={`/works/${p.id}`} className="br-link"
                        style={{ borderColor: "#111", color: "#111", background: "transparent" }}>
                        Request Access <FaArrowUpRightFromSquare size={11} />
                      </a>
                    )}
                  </div>

                  {/* Content grid */}
                  <div className="acc-content-grid">
                    <div>
                      <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
                        {p.webImages.length > 0 && (
                          <button className="br-tab" onClick={e => { e.stopPropagation(); setTab(p.id, "web"); }}
                            style={{ borderColor: tab === "web" ? "#111" : "#ddd", color: tab === "web" ? "#fff" : "#999", background: tab === "web" ? "#111" : "transparent" }}>
                            Web
                          </button>
                        )}
                        {p.mobileImages.length > 0 && (
                          <button className="br-tab" onClick={e => { e.stopPropagation(); setTab(p.id, "mobile"); }}
                            style={{ borderColor: tab === "mobile" ? "#111" : "#ddd", color: tab === "mobile" ? "#fff" : "#999", background: tab === "mobile" ? "#111" : "transparent" }}>
                            Mobile
                          </button>
                        )}
                        {p.video && (
                          <button className="br-tab" onClick={e => { e.stopPropagation(); setTab(p.id, "video"); }}
                            style={{ borderColor: tab === "video" ? "#111" : "#ddd", color: tab === "video" ? "#fff" : "#999", background: tab === "video" ? "#111" : "transparent" }}>
                            Video
                          </button>
                        )}
                      </div>

                      {tab === "video" && p.video ? (
                        <VideoPreview src={p.video} accent={p.accent} />
                      ) : tab === "mobile" && p.mobileImages.length > 0 ? (
                        <div style={{ display: "flex", gap: 14, alignItems: "flex-end", flexWrap: "wrap" }}>
                          {p.mobileImages.map((src, mi) => (
                            <div key={mi} className="img-mob-wrap">
                              <Image src={src} alt={`${p.title} mobile screen ${mi + 1}`} fill sizes="140px" style={{ objectFit: "cover" }} />
                            </div>
                          ))}
                        </div>
                      ) : p.webImages.length > 0 ? (
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                          {p.webImages.map((src, wi) => (
                            <div key={wi} className="img-web-wrap">
                              <Image src={src} alt={`${p.title} screenshot ${wi + 1}`} fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover" }} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div style={{ width: "100%", aspectRatio: "16/9", background: "#f5f5f5", border: "2px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#ccc", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                            No preview available
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                        {p.description.map((line, di) => (
                          <p key={di} className="desc-line" style={{ borderLeft: `3px solid ${p.accent}` }}>
                            {line}
                          </p>
                        ))}
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {p.tags.map(t => <span key={t} className="br-tag">{t}</span>)}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* Footer */}
      <div style={{ padding: "36px 40px", borderTop: "2px solid #111", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="/" style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#999", letterSpacing: "0.06em", textDecoration: "none" }}>← HOME</a>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#ddd", letterSpacing: "0.06em" }}>SARTHAK GARG</span>
      </div>
    </div>
  );
}