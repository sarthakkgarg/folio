"use client";
import { useEffect, useState } from "react";
import {
  FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaGithub,
} from "react-icons/fa";
import {
  SiMongodb, SiTypescript, SiJavascript, SiRedis, SiGooglecloud,
  SiJenkins, SiNextdotjs, SiExpress, SiSass, SiNpm, SiAntdesign,
  SiBitbucket, SiJira, SiConfluence, SiNotion, SiGooglegemini,
  SiOpenai, SiAnthropic, SiPostgresql, SiMysql, SiRetool, SiElectron,
  SiAdobeillustrator, SiAdobephotoshop, SiDavinciresolve, SiFigma,
  SiCanva, SiAdobecreativecloud, SiAdobelightroom,
} from "react-icons/si";
import Footer from "./contact";
import Image from "next/image";

/* ─── Tech Stack Data ────────────────────────────────── */
const techStack = [
  {
    category: "Frontend",
    items: [
      { icon: FaReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiSass, name: "SASS" },
      { icon: SiAntdesign, name: "Ant Design" },
      { icon: SiElectron, name: "Electron" },
    ],
  },
  {
    category: "Backend",
    items: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: FaPython, name: "Python" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiRedis, name: "Redis" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { icon: FaAws, name: "AWS" },
      { icon: SiGooglecloud, name: "Google Cloud" },
      { icon: FaDocker, name: "Docker" },
      { icon: SiJenkins, name: "Jenkins" },
      { icon: FaGithub, name: "GitHub" },
      { icon: SiBitbucket, name: "Bitbucket" },
      { icon: SiNpm, name: "NPM" },
    ],
  },
  {
    category: "Tools",
    items: [
      { icon: SiJira, name: "Jira" },
      { icon: SiConfluence, name: "Confluence" },
      { icon: SiNotion, name: "Notion" },
      { icon: SiRetool, name: "Retool" },
    ],
  },
  {
    category: "AI",
    items: [
      { icon: SiOpenai, name: "ChatGPT" },
      { icon: SiAnthropic, name: "Claude" },
      { icon: SiGooglegemini, name: "Gemini" },
    ],
  },
  {
    category: "Creative",
    items: [
      { icon: SiFigma, name: "Figma" },
      { icon: SiAdobeillustrator, name: "Illustrator" },
      { icon: SiAdobephotoshop, name: "Photoshop" },
      { icon: SiAdobelightroom, name: "Lightroom" },
      { icon: SiDavinciresolve, name: "DaVinci Resolve" },
      { icon: SiCanva, name: "Canva" },
      { icon: SiAdobecreativecloud, name: "Adobe Express" },
    ],
  },
];

/* ─── Experience Data ────────────────────────────────── */
const experience = [
  {
    company: "Acme Corp",
    logo: "", // e.g. "/images/logos/acme.png"
    role: "Senior Full Stack Engineer",
    period: "Jan 2023 — Present",
    location: "Remote",
    description:
      "Led architecture of a real-time SaaS platform serving 50k+ users. Built micro-services on AWS, React dashboard, and CI/CD pipelines.",
  },
  {
    company: "Startup XYZ",
    logo: "", // e.g. "/images/logos/xyz.png"
    role: "Frontend Developer",
    period: "Jun 2021 — Dec 2022",
    location: "Bengaluru",
    description:
      "Owned the design system and component library used across 4 products. Reduced bundle size by 40% via code-splitting and lazy loading.",
  },
];

const freelance = [
  {
    client: "Nova Health",
    logo: "", // e.g. "/images/logos/novahealth.png"
    work: "Patient dashboard & design system",
    period: "2024",
    tags: ["React", "Figma", "Node.js"],
  },
  {
    client: "Orbit Finance",
    logo: "", // e.g. "/images/logos/orbit.png"
    work: "Trading analytics web app",
    period: "2023",
    tags: ["Next.js", "PostgreSQL", "AWS"],
  },
  {
    client: "Bloom Studio",
    logo: "", // e.g. "/images/logos/bloom.png"
    work: "Brand identity & website",
    period: "2023",
    tags: ["Figma", "Illustrator", "Webflow"],
  },
];

/* ─── Page ──────────────────────────────────────────── */
export default function InfoPage() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const ist = new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      }).format(new Date());
      setTime(ist);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={s.page}>
      <style>{`
        /* ── Keyframes ── */
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.85); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* staggered section animations */
        .anim-nav  { animation: slideDown 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .anim-s1   { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
        .anim-s2   { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.28s both; }
        .anim-s3   { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.41s both; }
        .anim-s4   { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.54s both; }
        .anim-s5   { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.67s both; }

        /* ── Project link ── */
        .proj-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          color: #111;
          font-size: 14px;
          line-height: 1.7;
          position: relative;
          transition: color 0.3s ease;
        }
        .proj-link::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 0%; height: 1px;
          background-color: #00d632;
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .proj-link:hover { color: #00d632; }
        .proj-link:hover::after { width: 100%; }
        .proj-link .arrow-svg path { transition: stroke 0.3s ease; }
        .proj-link:hover .arrow-svg path { stroke: #00d632; }
        .proj-link .arrow-svg {
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .proj-link:hover .arrow-svg { transform: translate(3px, -3px); }

        /* ── Skill chips ── */
        .skill-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .skill-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border: 1px solid #e4e4e4;
          border-radius: 999px;
          font-size: 12px;
          color: #555;
          background: #fafafa;
          white-space: nowrap;
          cursor: default;
          transition:
            background  0.35s cubic-bezier(0.22,1,0.36,1),
            border-color 0.35s cubic-bezier(0.22,1,0.36,1),
            color        0.35s cubic-bezier(0.22,1,0.36,1),
            transform    0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .skill-chip:hover {
          background: #00d632;
          border-color: #00d632;
          color: #111;
          transform: translateY(-1px);
        }
        .skill-chip svg { transition: opacity 0.35s ease; }
        .skill-chip:hover svg { opacity: 1; }

        .skill-block { margin-bottom: 14px; }
        .skill-cat-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #bbb;
          margin-bottom: 6px;
        }

        /* ── Experience ── */
        .exp-section-label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #ccc;
          margin-bottom: 2px;
          margin-top: 20px;
        }
        .exp-section-label:first-child { margin-top: 0; }

        .exp-item {
          display: flex;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          transition: background 0.2s;
        }
        .exp-item:last-child { border-bottom: none; }

        .exp-logo-wrap {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid #e8e8e8;
          background: #f7f7f7;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-size: 11px;
          font-weight: 600;
          color: #aaa;
          letter-spacing: 0.02em;
          transition: border-color 0.3s;
        }
        .exp-item:hover .exp-logo-wrap {
          border-color: #00d632;
        }
        .exp-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 5px;
        }

        .exp-body { flex: 1; min-width: 0; }

        .exp-top {
          display: flex;
          align-items: baseline;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 1px;
        }
        .exp-company {
          font-size: 13px;
          font-weight: 500;
          color: #111;
        }
        .exp-dot {
          font-size: 11px;
          color: #ddd;
        }
        .exp-role {
          font-size: 12px;
          color: #888;
        }
        .exp-meta {
          font-size: 11px;
          color: #bbb;
          margin-bottom: 5px;
          letter-spacing: 0.01em;
        }
        .exp-desc {
          font-size: 12.5px;
          color: #555;
          line-height: 1.65;
          margin: 0;
          max-width: 500px;
        }

        /* freelance tags */
        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 6px;
        }
        .exp-tag {
          font-size: 10.5px;
          color: #888;
          border: 1px solid #e8e8e8;
          border-radius: 999px;
          padding: 2px 8px;
          background: #fafafa;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
          cursor: default;
        }
        .exp-tag:hover {
          background: #00d632;
          border-color: #00d632;
          color: #111;
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .page-nav  { padding: 14px 20px !important; }
          .page-main { padding: 36px 20px 28px !important; gap: 36px !important; }
          .page-row  { grid-template-columns: 1fr !important; gap: 6px !important; }
          .tag-text-full  { display: none !important; }
          .tag-text-short { display: inline !important; }
        }
        @media (min-width: 641px) {
          .tag-text-short { display: none; }
        }
        @media (max-width: 900px) {
          .page-main { padding: 48px 28px 36px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={s.nav} className={`page-nav${mounted ? " anim-nav" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", height: "20px" }}>
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
        <div style={s.navLinks}>
          <div style={s.tag}>
            <span style={s.tagDot} />
            <span style={s.tagText} className="tag-text-full">Available for hire</span>
            <span style={s.tagText} className="tag-text-short">Available</span>
            <span style={s.tagDivider} />
            <span style={s.tagTime}>{time} IST</span>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main style={s.main} className="page-main">

        {/* Bio */}
        <section style={s.row} className={`page-row${mounted ? " anim-s1" : ""}`}>
          <div style={s.label}>Bio</div>
          <div style={s.content}>
            <p style={s.bio}>
              a full-stack developer working at the intersection of design and engineering. Since 2020, I've partnered with founders and teams to build refined digital experiences across web and mobile, focusing on scalable architecture, intuitive interfaces, and performance-driven systems.
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section style={s.row} className={`page-row${mounted ? " anim-s2" : ""}`}>
          <div style={s.label}>Capabilities</div>
          <div style={s.content}>
            {["Full Stack Development", "Mobile Development", "Cloud Architecture", "Brand & UI Design", "Cinematography"].map((c) => (
              <p key={c} style={s.listItem}>{c}</p>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section style={s.row} className={`page-row${mounted ? " anim-s3" : ""}`}>
          <div style={s.label}>Projects</div>
          <div style={s.content}>
            <a href="/works" className="proj-link">
              <span>Here you can see my projects</span>
              <svg className="arrow-svg" width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        {/* Experience */}
        <section style={s.row} className={`page-row${mounted ? " anim-s4" : ""}`}>
          <div style={s.label}>Experience</div>
          <div style={s.content}>

            {/* Full-time */}
            <div className="exp-section-label">Full-time</div>
            {experience.map((e) => (
              <div key={e.company} className="exp-item">
                <div className="exp-logo-wrap">
                  {e.logo
                    ? <img src={e.logo} alt={e.company} className="exp-logo-img" />
                    : e.company.slice(0, 2).toUpperCase()
                  }
                </div>
                <div className="exp-body">
                  <div className="exp-top">
                    <span className="exp-company">{e.company}</span>
                    <span className="exp-dot">·</span>
                    <span className="exp-role">{e.role}</span>
                  </div>
                  <div className="exp-meta">{e.period} · {e.location}</div>
                  <p className="exp-desc">{e.description}</p>
                </div>
              </div>
            ))}

            {/* Freelance */}
            <div className="exp-section-label">Freelance & Contract</div>
            {freelance.map((f) => (
              <div key={f.client} className="exp-item">
                <div className="exp-logo-wrap">
                  {f.logo
                    ? <img src={f.logo} alt={f.client} className="exp-logo-img" />
                    : f.client.slice(0, 2).toUpperCase()
                  }
                </div>
                <div className="exp-body">
                  <div className="exp-top">
                    <span className="exp-company">{f.client}</span>
                  </div>
                  <div className="exp-meta">{f.work} · {f.period}</div>
                  <div className="exp-tags">
                    {f.tags.map((t) => (
                      <span key={t} className="exp-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* Skills */}
        <section style={s.row} className={`page-row${mounted ? " anim-s5" : ""}`}>
          <div style={s.label}>Skills</div>
          <div style={s.content}>
            {techStack.map(({ category, items }) => (
              <div key={category} className="skill-block">
                <div className="skill-cat-label">{category}</div>
                <div className="skill-grid">
                  {items.map(({ icon: Icon, name }) => (
                    <span key={name} className="skill-chip">
                      <Icon size={12} />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* BIG GREEN FOOTER */}
      <Footer />
    </div>
  );
}

/* ─── Styles ─────────────────────────────────────────── */
const s: Record<string, React.CSSProperties> = {
  page: {
    fontSize: "14px",
    color: "#111",
    backgroundColor: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.5",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 32px",
    borderBottom: "1px solid #e8e8e8",
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 10,
  },
  navName: { fontSize: "14px", fontWeight: "400" },
  navLinks: { display: "flex", gap: "16px", alignItems: "center" },
  tag: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#111",
    color: "#fff",
    padding: "5px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    letterSpacing: "0.01em",
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
  tagText: {
    fontWeight: "400",
    whiteSpace: "nowrap" as const,
  },
  tagDivider: {
    display: "inline-block",
    width: "1px",
    height: "10px",
    backgroundColor: "rgba(255,255,255,0.25)",
    flexShrink: 0,
  },
  tagTime: {
    fontVariantNumeric: "tabular-nums",
    letterSpacing: "0.05em",
    opacity: 0.6,
    whiteSpace: "nowrap" as const,
    fontSize: "11px",
  },
  dot: {
    display: "inline-block",
    width: "11px",
    height: "11px",
    borderRadius: "50%",
    backgroundColor: "#111",
  },
  main: {
    flex: 1,
    padding: "72px 32px 48px",
    display: "flex",
    flexDirection: "column",
    gap: "56px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  },
  label: { fontSize: "14px", color: "#111", paddingTop: "2px" },
  content: { fontSize: "14px", color: "#111" },
  bio: { margin: 0, lineHeight: "1.7", maxWidth: "600px" },
  listItem: { margin: "0 0 2px", lineHeight: "1.7" },
  footerLink: { color: "#111", textDecoration: "none" },
};