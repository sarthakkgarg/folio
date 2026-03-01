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

/* ─── Tech Stack ─────────────────────────────────────── */
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

/* ─── Experience ─────────────────────────────────────── */
const experience = [
  {
    company: "VedIndia Pvt. Ltd",
    logo: "/images/vedfin.png",
    role: "Full Stack Developer",
    period: "May 2023 — Apr 2024",
    location: "Delhi, India",
    description: [
      "Developed and optimized React Native applications for both iOS and Android platforms.",
      "Integrated Node.js/Express REST APIs and implemented AI-driven workflows using LLMs and LangChain.",
      "Improved modular UI architecture, managed deployments, QA cycles, and third-party integrations.",
    ],
  },
  {
    company: "LeewayHertz Technologies",
    logo: "/images/lht.png",
    role: "Full Stack Developer",
    period: "Jul 2021 — Apr 2023",
    location: "Gurugram, India",
    description: [
      "Built and maintained a production NFT marketplace using ReactJS.",
      "Developed a Dart SDK for ERC20 and ERC721 tokens and engineered blockchain-based review platforms.",
      "Enhanced documentation and cross-team collaboration to improve overall development workflows.",
    ],
  },
];

const freelance = [
  {
    client: "AiPsychi",
    logo: "/images/aipsychi.webp",
    role: "Full Stack Engineer & Product Designer",
    period: "2024–2025",
    link: "https://aipsychi.com",
    description: [
      "Conceptualized, designed, and engineered a complete digital assessment infrastructure for mental health professionals.",
      "Handled every layer — business logic, UX/UI design, API development, database modeling, and cloud deployment.",
      "The platform supports structured assessments, dynamic session workflows, subscription logic, and secure clinical data handling.",
    ],
    tags: ["React", "React Native", "Node.js", "MongoDB", "AWS", "Material UI", "OpenAI API"],
  },
  {
    client: "Thriving Minds",
    logo: "/images/thrivingminds.webp",
    role: "Full Stack Developer & Product Architect",
    period: "2025",
    link: "https://thrivingminds.com",
    description: [
      "Built a scalable corporate well-being app with AI-driven mental health assessments, mood tracking, and appointment scheduling.",
      "Architected RESTful APIs and core business logic in Node.js with structured assessment scoring and role-based access control.",
      "Led complete product development — from system architecture and UX to cloud deployment and production release on AWS.",
    ],
    tags: ["React", "React Native", "Node.js", "MongoDB", "AWS", "Material UI", "OpenAI API"],
  },
  {
    client: "Sarashree",
    logo: "/images/sarashree.png",
    role: "Full Stack Developer & Brand Designer",
    period: "2026",
    link: "https://sarashree.com",
    description: [
      "Delivered a full-featured e-commerce website covering everything from UI design to backend logic and deployment.",
      "Engineered dynamic product catalogs, shopping cart, secure checkout, order management, and user authentication.",
      "Integrated Razorpay payment gateway and deployed scalable services on AWS for fast, reliable load times.",
    ],
    tags: ["React", "Node.js", "MongoDB", "AWS", "Figma", "Razorpay", "Tailwind CSS"],
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
        hour: "2-digit", minute: "2-digit", hour12: false,
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
        .anim-nav { animation: slideDown 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .anim-s1  { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
        .anim-s2  { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.28s both; }
        .anim-s3  { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.41s both; }
        .anim-s4  { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.54s both; }
        .anim-s5  { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.67s both; }

        /* ── Project link ── */
        .proj-link {
          display: inline-flex; align-items: center; gap: 6px;
          text-decoration: none; color: #111; font-size: 14px;
          line-height: 1.7; position: relative; transition: color 0.3s ease;
        }
        .proj-link::after {
          content: ''; position: absolute; bottom: -1px; left: 0;
          width: 0%; height: 1px; background-color: #00d632;
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .proj-link:hover { color: #00d632; }
        .proj-link:hover::after { width: 100%; }
        .proj-link .arrow-svg { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); }
        .proj-link:hover .arrow-svg { transform: translate(3px,-3px); }
        .proj-link .arrow-svg path { transition: stroke 0.3s ease; }
        .proj-link:hover .arrow-svg path { stroke: #00d632; }

        /* ── Skill chips ── */
        .skill-grid { display: flex; flex-wrap: wrap; gap: 6px; }
        .skill-chip {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border: 1px solid #e4e4e4; border-radius: 999px;
          font-size: 12px; color: #555; background: #fafafa;
          white-space: nowrap; cursor: default;
          transition: background 0.35s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.35s cubic-bezier(0.22,1,0.36,1),
                      color 0.35s cubic-bezier(0.22,1,0.36,1),
                      transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .skill-chip:hover {
          background: #00d632; border-color: #00d632;
          color: #111; transform: translateY(-1px);
        }
        .skill-block { margin-bottom: 14px; }
        .skill-cat-label {
          font-size: 11px; text-transform: uppercase;
          letter-spacing: 0.08em; color: #bbb; margin-bottom: 6px;
        }

        /* ════════════════════════════════════════════
           TIMELINE EXPERIENCE
        ════════════════════════════════════════════ */

        /* Group label */
        .exp-group-label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #c0c0c0;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          margin-top: 32px;
        }
        .exp-group-label:first-child { margin-top: 0; }
        .exp-group-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #f0f0f0;
        }

        /* Timeline container */
        .exp-timeline {
          position: relative;
          padding-left: 14px;
        }
        /* Vertical line */
        .exp-timeline::before {
          content: '';
          position: absolute;
          left: 3px;
          top: 8px;
          bottom: 10px;
          width: 1px;
          background: #ececec;
        }

        /* Individual card */
        .exp-card {
          position: relative;
          padding: 0 0 28px 22px;
        }
        .exp-card:last-child { padding-bottom: 0; }

        /* Dot on the line */
        .exp-card::before {
          content: '';
          position: absolute;
          left: -1.5px;
          top: 7px;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #e4e4e4;
          border: 2px solid #fff;
          box-shadow: 0 0 0 1px #e4e4e4;
          transition: background 0.3s ease, box-shadow 0.3s ease;
          z-index: 1;
        }
        .exp-card:hover::before {
          background: #00d632;
          box-shadow: 0 0 0 3px rgba(0, 214, 50, 0.14);
        }

        /* Card header: logo + meta */
        .exp-card-head {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 10px;
        }

        /* Logo */
        .exp-logo {
          width: 36px; height: 36px;
          border-radius: 8px;
          border: 1px solid #ebebeb;
          background: #f8f8f8;
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          font-size: 10px; font-weight: 600; color: #ccc;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          margin-top: 1px;
        }
        .exp-card:hover .exp-logo {
          border-color: #00d632;
          box-shadow: 0 0 0 3px rgba(0,214,50,0.1);
        }
        .exp-logo img {
          width: 100%; height: 100%;
          object-fit: contain; padding: 5px;
        }

        /* Meta block */
        .exp-meta-block { flex: 1; min-width: 0; }

        .exp-meta-row {
          display: flex; align-items: baseline;
          justify-content: space-between;
          gap: 8px; flex-wrap: wrap;
          margin-bottom: 1px;
        }
        .exp-name-role {
          display: flex; align-items: baseline;
          gap: 5px; flex-wrap: wrap;
        }
        .exp-company {
          font-size: 13px; font-weight: 600;
          color: #111; letter-spacing: -0.01em;
        }
        .exp-sep { font-size: 11px; color: #ddd; }
        .exp-role { font-size: 12px; color: #888; }
        .exp-period {
          font-size: 10.5px; color: #c0c0c0;
          white-space: nowrap; flex-shrink: 0;
          letter-spacing: 0.01em;
        }
        .exp-sub {
          font-size: 11px; color: #c8c8c8;
          letter-spacing: 0.01em;
        }

        /* Description lines — each thought on its own line */
        .exp-desc-block {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-left: 0;
        }
        .exp-desc-line {
          position: relative;
          font-size: 12.5px;
          color: #555;
          line-height: 1.72;
          margin: 0;
          padding: 5px 0 5px 12px;
          border-left: 1.5px solid #efefef;
          transition: border-color 0.3s ease, color 0.3s ease;
        }
        /* Subtle separator between lines */
        .exp-desc-line + .exp-desc-line {
          border-top: 1px solid #fafafa;
        }
        .exp-card:hover .exp-desc-line {
          border-left-color: rgba(0, 214, 50, 0.3);
        }

        /* Tags */
        .exp-tags {
          display: flex; flex-wrap: wrap;
          gap: 5px; margin-top: 10px;
        }
        .exp-tag {
          font-size: 10.5px; color: #888;
          border: 1px solid #ebebeb; border-radius: 4px;
          padding: 2px 8px; background: #fafafa;
          cursor: default;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
        }
        .exp-tag:hover { background: #00d632; border-color: #00d632; color: #111; }

        /* View project link */
        .exp-view-link {
          display: inline-flex; align-items: center; gap: 5px;
          margin-top: 10px;
          text-decoration: none;
          font-size: 11.5px; color: #bbb;
          transition: color 0.25s ease;
          letter-spacing: 0.01em;
        }
        .exp-view-link:hover { color: #00d632; }
        .exp-view-link svg { transition: transform 0.25s cubic-bezier(0.22,1,0.36,1); }
        .exp-view-link:hover svg { transform: translate(2px,-2px); }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .page-nav  { padding: 14px 20px !important; }
          .page-main { padding: 36px 20px 28px !important; gap: 36px !important; }
          .page-row  { grid-template-columns: 1fr !important; gap: 6px !important; }
          .tag-text-full  { display: none !important; }
          .tag-text-short { display: inline !important; }
          .exp-period { display: none; }
        }
        @media (min-width: 641px) { .tag-text-short { display: none; } }
        @media (max-width: 900px) {
          .page-main { padding: 48px 28px 36px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={s.nav} className={`page-nav${mounted ? " anim-nav" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", height: "20px" }}>
          <Image
            src="/images/footer1.png" alt="Sarthak Garg"
            width={160} height={40} draggable={false} priority
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
              a full-stack developer working at the intersection of design and engineering, I've partnered with founders and teams to build refined digital experiences across web and mobile, focusing on scalable architecture, intuitive interfaces, and performance-driven systems.
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section style={s.row} className={`page-row${mounted ? " anim-s2" : ""}`}>
          <div style={s.label}>Capabilities</div>
          <div style={s.content}>
            {["Full Stack Development", "Mobile Development", "Cloud Architecture", "Brand & UI Design", ].map((c) => (
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

        {/* ── Experience ── */}
        <section style={s.row} className={`page-row${mounted ? " anim-s4" : ""}`}>
          <div style={s.label}>Experience</div>
          <div style={s.content}>

            {/* Full-time */}
            <div className="exp-group-label">Full-time</div>
            <div className="exp-timeline">
              {experience.map((e) => (
                <div key={e.company} className="exp-card">
                  <div className="exp-card-head">
                    <div className="exp-logo">
                      {e.logo ? <img src={e.logo} alt={e.company} /> : e.company.slice(0,2).toUpperCase()}
                    </div>
                    <div className="exp-meta-block">
                      <div className="exp-meta-row">
                        <div className="exp-name-role">
                          <span className="exp-company">{e.company}</span>
                          <span className="exp-sep">·</span>
                          <span className="exp-role">{e.role}</span>
                        </div>
                        <span className="exp-period">{e.period}</span>
                      </div>
                      <div className="exp-sub">{e.location}</div>
                    </div>
                  </div>
                  <div className="exp-desc-block">
                    {e.description.map((line, i) => (
                      <p key={i} className="exp-desc-line">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Freelance */}
            <div className="exp-group-label">Freelance & Contract</div>
            <div className="exp-timeline">
              {freelance.map((f) => (
                <div key={f.client} className="exp-card">
                  <div className="exp-card-head">
                    <div className="exp-logo">
                      {f.logo ? <img src={f.logo} alt={f.client} /> : f.client.slice(0,2).toUpperCase()}
                    </div>
                    <div className="exp-meta-block">
                      <div className="exp-meta-row">
                        <div className="exp-name-role">
                          <span className="exp-company">{f.client}</span>
                          <span className="exp-sep">·</span>
                          <span className="exp-role">{f.role}</span>
                        </div>
                        <span className="exp-period">{f.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="exp-desc-block">
                    {f.description.map((line, i) => (
                      <p key={i} className="exp-desc-line">{line}</p>
                    ))}
                  </div>
                  <div className="exp-tags">
                    {f.tags.map((t) => (
                      <span key={t} className="exp-tag">{t}</span>
                    ))}
                  </div>
                  <a href={f.link} target="_blank" rel="noopener noreferrer" className="exp-view-link">
                    View project
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

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

      <Footer />
    </div>
  );
}

/* ─── Styles ─────────────────────────────────────────── */
const s: Record<string, React.CSSProperties> = {
  page: {
    fontSize: "14px", color: "#111", backgroundColor: "#fff",
    minHeight: "100vh", display: "flex", flexDirection: "column", lineHeight: "1.5",
  },
  nav: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "18px 32px", borderBottom: "1px solid #e8e8e8",
    position: "sticky", top: 0, backgroundColor: "#fff", zIndex: 10,
  },
  navName: { fontSize: "14px", fontWeight: "400" },
  navLinks: { display: "flex", gap: "16px", alignItems: "center" },
  tag: {
    display: "inline-flex", alignItems: "center", gap: "8px",
    backgroundColor: "#111", color: "#fff", padding: "5px 12px",
    borderRadius: "999px", fontSize: "12px", letterSpacing: "0.01em",
    userSelect: "none" as const,
  },
  tagDot: {
    display: "inline-block", width: "6px", height: "6px",
    borderRadius: "50%", backgroundColor: "#00d632",
    animation: "pulse-dot 2s ease-in-out infinite", flexShrink: 0,
  },
  tagText: { fontWeight: "400", whiteSpace: "nowrap" as const },
  tagDivider: {
    display: "inline-block", width: "1px", height: "10px",
    backgroundColor: "rgba(255,255,255,0.25)", flexShrink: 0,
  },
  tagTime: {
    fontVariantNumeric: "tabular-nums", letterSpacing: "0.05em",
    opacity: 0.6, whiteSpace: "nowrap" as const, fontSize: "11px",
  },
  main: {
    flex: 1, padding: "72px 32px 48px",
    display: "flex", flexDirection: "column", gap: "56px",
  },
  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" },
  label: { fontSize: "14px", color: "#111", paddingTop: "2px" },
  content: { fontSize: "14px", color: "#111" },
  bio: { margin: 0, lineHeight: "1.7", maxWidth: "600px" },
  listItem: { margin: "0 0 2px", lineHeight: "1.7" },
  footerLink: { color: "#111", textDecoration: "none" },
};