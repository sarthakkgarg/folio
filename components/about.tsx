"use client";
import { useEffect, useState, useRef } from "react";
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

const techStack = [
  { category: "Frontend", items: [{ icon: FaReact, name: "React" },{ icon: SiNextdotjs, name: "Next.js" },{ icon: SiJavascript, name: "JS" },{ icon: SiTypescript, name: "TS" },{ icon: SiSass, name: "SASS" },{ icon: SiAntdesign, name: "Ant Design" },{ icon: SiElectron, name: "Electron" }] },
  { category: "Backend", items: [{ icon: FaNodeJs, name: "Node.js" },{ icon: SiExpress, name: "Express" },{ icon: FaPython, name: "Python" },{ icon: SiMongodb, name: "MongoDB" },{ icon: SiPostgresql, name: "PostgreSQL" },{ icon: SiMysql, name: "MySQL" },{ icon: SiRedis, name: "Redis" }] },
  { category: "DevOps & Cloud", items: [{ icon: FaAws, name: "AWS" },{ icon: SiGooglecloud, name: "GCP" },{ icon: FaDocker, name: "Docker" },{ icon: SiJenkins, name: "Jenkins" },{ icon: FaGithub, name: "GitHub" },{ icon: SiBitbucket, name: "Bitbucket" },{ icon: SiNpm, name: "NPM" }] },
  { category: "Tools", items: [{ icon: SiJira, name: "Jira" },{ icon: SiConfluence, name: "Confluence" },{ icon: SiNotion, name: "Notion" },{ icon: SiRetool, name: "Retool" }] },
  { category: "AI", items: [{ icon: SiOpenai, name: "ChatGPT" },{ icon: SiAnthropic, name: "Claude" },{ icon: SiGooglegemini, name: "Gemini" }] },
  { category: "Creative", items: [{ icon: SiFigma, name: "Figma" },{ icon: SiAdobeillustrator, name: "Illustrator" },{ icon: SiAdobephotoshop, name: "Photoshop" },{ icon: SiAdobelightroom, name: "Lightroom" },{ icon: SiDavinciresolve, name: "DaVinci" },{ icon: SiCanva, name: "Canva" },{ icon: SiAdobecreativecloud, name: "Adobe CC" }] },
];

const capabilities = [
  { title: "Full Stack Development", year: "2020—" },
  { title: "Mobile Development", year: "2021—" },
  { title: "Cloud Architecture", year: "2022—" },
  { title: "Brand & UI Design", year: "2020—" },
  { title: "Cinematography", year: "2019—" },
];

export default function InfoPage() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);
  const [hoveredCap, setHoveredCap] = useState<number | null>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const pos = useRef({ x: -999, y: -999 });

  useEffect(() => {
    setMounted(true);
    const tick = () =>
      setTime(new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }).format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    const mm = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", mm);
    let raf: number;
    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.06;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.06;
      if (blobRef.current)
        blobRef.current.style.transform = `translate(${pos.current.x - 350}px,${pos.current.y - 350}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { clearInterval(id); window.removeEventListener("mousemove", mm); cancelAnimationFrame(raf); };
  }, []);

  const bioWords = "a full-stack developer working at the intersection of design and engineering. Since 2020, I've partnered with founders and teams to build refined digital experiences — scalable, intuitive, and performance-driven.".split(" ");

  return (
    <div className="pg">
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

        .pg{
          background:#fafaf8;
          color:#0f0f0f;
          min-height:100vh;
          display:flex;
          flex-direction:column;
          font-size:14px;
          line-height:1.5;
          overflow-x:hidden;
          position:relative;
        }

        /* ── Ambient glow ── */
        .glow{
          position:fixed;
          width:700px;height:700px;
          border-radius:50%;
          background:radial-gradient(circle,rgba(0,214,50,0.06) 0%,transparent 65%);
          pointer-events:none;z-index:0;
          top:0;left:0;
          filter:blur(60px);
          will-change:transform;
        }

        /* ── Nav ── */
        .nav{
          display:flex;justify-content:space-between;align-items:center;
          padding:20px 48px;
          border-bottom:1px solid rgba(0,0,0,0.07);
          position:sticky;top:0;
          background:rgba(250,250,248,0.9);
          backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
          z-index:100;
          animation:sd .9s cubic-bezier(.16,1,.3,1) both;
        }
        .pill{
          display:inline-flex;align-items:center;gap:8px;
          background:#0f0f0f;color:#fff;
          padding:6px 14px;border-radius:999px;
          font-size:11px;letter-spacing:.03em;user-select:none;
        }
        .pdot{width:6px;height:6px;border-radius:50%;background:#00d632;flex-shrink:0;animation:pulse 2s ease-in-out infinite;}
        .pdiv{width:1px;height:10px;background:rgba(255,255,255,.18);}
        .ptime{font-variant-numeric:tabular-nums;letter-spacing:.08em;opacity:.5;font-size:10px;}

        /* ── Hero band ── */
        .hero{
          display:grid;
          grid-template-columns:1fr auto;
          align-items:end;
          padding:64px 48px 40px;
          border-bottom:1px solid rgba(0,0,0,0.07);
          position:relative;
          overflow:hidden;
          animation:fu .9s cubic-bezier(.16,1,.3,1) .08s both;
        }
        .hero-eyebrow{
          font-size:10px;letter-spacing:.22em;text-transform:uppercase;
          color:#aaa;margin-bottom:20px;
          display:flex;align-items:center;gap:10px;
        }
        .hero-eyebrow::before{content:'';width:24px;height:1px;background:#ccc;}
        .hero-name{
          font-size:clamp(48px,7vw,96px);
          font-weight:400;
          letter-spacing:-.03em;
          line-height:.95;
          color:#0f0f0f;
        }
        .hero-name .thin{
          color:transparent;
          -webkit-text-stroke:1px rgba(15,15,15,.25);
          display:block;
        }
        .hero-right{padding-bottom:4px;text-align:right;}
        .hero-since{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#ccc;display:block;margin-bottom:6px;}
        .hero-year{
          font-size:clamp(64px,9vw,120px);
          font-weight:400;letter-spacing:-.04em;line-height:1;
          color:transparent;
          -webkit-text-stroke:1px rgba(0,0,0,.07);
          user-select:none;
        }

        /* ── Two-col body ── */
        .body{
          flex:1;
          display:grid;
          grid-template-columns:56px 1fr;
          position:relative;z-index:1;
        }
        .strip{
          border-right:1px solid rgba(0,0,0,.07);
          display:flex;align-items:center;justify-content:center;
          position:sticky;top:69px;
          align-self:start;
          height:calc(100vh - 69px);
        }
        .strip-txt{
          writing-mode:vertical-rl;transform:rotate(180deg);
          font-size:9px;letter-spacing:.22em;
          text-transform:uppercase;color:#ccc;
          user-select:none;white-space:nowrap;
        }
        .rows{display:flex;flex-direction:column;}

        /* ── Row ── */
        .row{
          display:grid;
          grid-template-columns:160px 1fr;
          border-bottom:1px solid rgba(0,0,0,.07);
          position:relative;
        }
        .row:last-child{border-bottom:none;}
        .r1{animation:fu .75s cubic-bezier(.16,1,.3,1) .12s both;}
        .r2{animation:fu .75s cubic-bezier(.16,1,.3,1) .22s both;}
        .r3{animation:fu .75s cubic-bezier(.16,1,.3,1) .32s both;}
        .r4{animation:fu .75s cubic-bezier(.16,1,.3,1) .42s both;}

        .lbl{
          padding:32px 24px 32px 28px;
          border-right:1px solid rgba(0,0,0,.07);
          display:flex;flex-direction:column;gap:5px;
          flex-shrink:0;
        }
        .lbl-n{font-size:9px;color:#ccc;letter-spacing:.1em;}
        .lbl-t{font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:#aaa;}
        .bdy{padding:32px 40px;position:relative;}

        /* ── Bio ── */
        .bio{font-size:14px;line-height:1.85;color:#555;max-width:440px;}
        .bw{display:inline-block;overflow:hidden;vertical-align:bottom;line-height:1.85;}
        .bw span{display:inline-block;transform:translateY(110%);animation:wu .5s cubic-bezier(.16,1,.3,1) both;}

        /* ── ARTISTIC TEXT ELEMENTS ── */
        /* These float in the right portion of bio + capabilities rows */
        .art-canvas{
          position:absolute;
          top:0;right:0;bottom:0;
          /* starts after the bio text max-width ~440px + padding */
          left:480px;
          pointer-events:none;
          overflow:hidden;
        }

        /* Each art piece is absolutely positioned within .art-canvas */
        .art{
          position:absolute;
          white-space:nowrap;
          user-select:none;
          /* font-family: swap in your artistic font here */
          font-family: inherit;
          line-height:1;
          opacity:0;
          animation:artIn .9s cubic-bezier(.16,1,.3,1) both;
        }

        /* Variant: large outline ghost */
        .art-ghost{
          color:transparent;
          -webkit-text-stroke:1px rgba(15,15,15,.13);
        }
        /* Variant: solid but faint */
        .art-faint{
          color:rgba(15,15,15,.12);
        }
        /* Variant: outlined with green */
        .art-green{
          color:transparent;
          -webkit-text-stroke:1px rgba(0,214,50,.35);
        }
        /* Variant: small solid label */
        .art-label{
          color:rgba(15,15,15,.18);
          font-size:11px;
          letter-spacing:.12em;
          text-transform:uppercase;
        }
        /* Variant: solid readable but light */
        .art-mid{
          color:rgba(15,15,15,.09);
        }

        @keyframes artIn{
          from{opacity:0;transform:var(--rot) translateY(12px);}
          to{opacity:1;transform:var(--rot);}
        }

        /* ── Capabilities ── */
        .caps-row-inner{max-width:440px;}
        .cap{
          display:flex;align-items:center;justify-content:space-between;
          padding:13px 0;
          border-bottom:1px solid rgba(0,0,0,.04);
          cursor:default;position:relative;overflow:hidden;
        }
        .cap:last-child{border-bottom:none;}
        .cap-fill{
          position:absolute;left:0;top:0;bottom:0;width:0;
          background:rgba(0,214,50,.045);
          transition:width .55s cubic-bezier(.16,1,.3,1);
          pointer-events:none;
        }
        .cap:hover .cap-fill{width:100%;}
        .cap:hover .cap-title{color:#0f0f0f;letter-spacing:.01em;}
        .cap:hover .cap-year{color:#00d632;}
        .cap-title{font-size:15px;color:#666;transition:all .35s ease;position:relative;z-index:1;letter-spacing:0;}
        .cap-right{display:flex;align-items:center;gap:12px;position:relative;z-index:1;}
        .cap-year{font-size:10px;letter-spacing:.1em;color:#ccc;transition:color .35s ease;font-variant-numeric:tabular-nums;}
        .cap-arr{font-size:14px;color:#ccc;opacity:0;transform:translate(-6px,6px);transition:all .4s cubic-bezier(.16,1,.3,1);}
        .cap:hover .cap-arr{opacity:1;transform:translate(0,0);color:#00d632;}

        /* ── Projects ── */
        .proj-a{display:inline-flex;align-items:center;gap:14px;text-decoration:none;color:#0f0f0f;width:fit-content;}
        .proj-circ{
          width:36px;height:36px;
          border:1px solid rgba(0,0,0,.12);border-radius:50%;
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;
          transition:all .45s cubic-bezier(.16,1,.3,1);
          background:#fff;
        }
        .proj-a:hover .proj-circ{background:#00d632;border-color:#00d632;transform:rotate(45deg);}
        .proj-circ svg{transition:transform .45s cubic-bezier(.16,1,.3,1);}
        .proj-a:hover .proj-circ svg{transform:rotate(-45deg);}
        .proj-circ svg path{transition:stroke .3s;}
        .proj-a:hover .proj-circ svg path{stroke:#fff;}
        .proj-main{display:block;font-size:14px;position:relative;width:fit-content;}
        .proj-main::after{content:'';position:absolute;bottom:-1px;left:0;width:0;height:1px;background:#00d632;transition:width .45s cubic-bezier(.16,1,.3,1);}
        .proj-a:hover .proj-main::after{width:100%;}
        .proj-sub{font-size:11px;color:#bbb;letter-spacing:.04em;margin-top:2px;display:block;}

        /* ── Skills ── */
        .skills-wrap{
          display:grid;grid-template-columns:repeat(3,1fr);
          gap:0;
          border-top:1px solid rgba(0,0,0,.07);
        }
        .sk-cell{
          padding:22px 20px;
          border-right:1px solid rgba(0,0,0,.07);
          border-bottom:1px solid rgba(0,0,0,.07);
          transition:background .35s ease;
          cursor:default;position:relative;overflow:hidden;
        }
        .sk-cell:nth-child(3n){border-right:none;}
        .sk-cell:nth-last-child(-n+3){border-bottom:none;}
        .sk-cell:hover{background:rgba(0,214,50,.025);}
        .sk-cell:hover .sk-cat{color:#0f0f0f;}
        .sk-cat-row{display:flex;align-items:center;gap:8px;margin-bottom:13px;}
        .sk-cat{font-size:9px;text-transform:uppercase;letter-spacing:.2em;color:#bbb;transition:color .3s ease;flex-shrink:0;}
        .sk-bar{flex:1;height:1px;background:rgba(0,0,0,.06);position:relative;overflow:hidden;}
        .sk-bar::after{
          content:'';position:absolute;left:-100%;top:0;
          width:100%;height:100%;background:#00d632;
          transition:left .55s cubic-bezier(.16,1,.3,1);
        }
        .sk-cell:hover .sk-bar::after{left:0;}
        .chips{display:flex;flex-wrap:wrap;gap:5px;}
        .chip{
          display:inline-flex;align-items:center;gap:5px;
          padding:5px 10px;border-radius:999px;
          font-size:11px;color:#666;
          background:rgba(0,0,0,.04);
          white-space:nowrap;cursor:default;
          transition:all .3s cubic-bezier(.16,1,.3,1);
          letter-spacing:.01em;border:1px solid transparent;
        }
        .chip:hover{background:#fff;color:#0f0f0f;border-color:rgba(0,214,50,.25);box-shadow:0 2px 12px rgba(0,214,50,.1);transform:translateY(-2px);}
        .chip svg{opacity:.6;transition:opacity .3s;}
        .chip:hover svg{opacity:1;}

        /* ── Keyframes ── */
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.75)}}
        @keyframes fu{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes sd{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes wu{from{transform:translateY(110%)}to{transform:translateY(0)}}

        /* ── Responsive ── */
        @media(max-width:1024px){
          .art-canvas{left:420px;}
        }
        @media(max-width:900px){
          .art-canvas{display:none;}
          .bio{max-width:100%;}
          .caps-row-inner{max-width:100%;}
          .skills-wrap{grid-template-columns:repeat(2,1fr);}
          .sk-cell:nth-child(3n){border-right:1px solid rgba(0,0,0,.07);}
          .sk-cell:nth-child(2n){border-right:none;}
          .sk-cell:nth-last-child(-n+3){border-bottom:1px solid rgba(0,0,0,.07);}
          .sk-cell:nth-last-child(-n+2){border-bottom:none;}
        }
        @media(max-width:700px){
          .body{grid-template-columns:1fr;}
          .strip{display:none;}
          .row{grid-template-columns:1fr;}
          .lbl{padding:16px 20px 8px;border-right:none;border-bottom:1px solid rgba(0,0,0,.05);flex-direction:row;align-items:center;gap:8px;}
          .bdy{padding:16px 20px 24px;}
          .nav{padding:14px 20px;}
          .hero{padding:40px 20px 28px;grid-template-columns:1fr;}
          .hero-right{display:none;}
          .skills-wrap{grid-template-columns:1fr 1fr;}
        }
        @media(max-width:480px){
          .skills-wrap{grid-template-columns:1fr;}
          .sk-cell{border-right:none !important;border-bottom:1px solid rgba(0,0,0,.07) !important;}
          .sk-cell:last-child{border-bottom:none !important;}
        }
        @media(min-width:641px){.tag-s{display:none;}}
        @media(max-width:640px){.tag-f{display:none;}}
      `}</style>

      <div ref={blobRef} className="glow" />

      {/* NAV */}
      <nav className="nav">
        <div style={{display:"flex",alignItems:"center",height:"20px"}}>
          <Image src="/images/footer1.png" alt="Sarthak Garg" width={160} height={40} draggable={false} priority style={{objectFit:"contain"}} />
        </div>
        <div className="pill">
          <span className="pdot" />
          <span className="tag-f">Available for hire</span>
          <span className="tag-s">Available</span>
          <span className="pdiv" />
          <span className="ptime">{time} IST</span>
        </div>
      </nav>

    

      {/* BODY */}
      <div className="body">
        <div className="strip">
          <span className="strip-txt">Sarthak Garg — Portfolio</span>
        </div>

        <div className="rows">

          {/* ── 01 Bio ── */}
          <div className="row r1">
            <div className="lbl">
              <span className="lbl-n">01</span>
              <span className="lbl-t">Bio</span>
            </div>
            <div className="bdy">
              <p className="bio">
                {mounted
                  ? bioWords.map((w, i) => (
                      <span key={i} className="bw">
                        <span style={{animationDelay:`${.32+i*.021}s`}}>{w}&nbsp;</span>
                      </span>
                    ))
                  : null}
              </p>

              {/* ── Artistic scattered text — Bio zone ── */}
              {mounted && (
                <div className="art-canvas">

                  {/* Big ghost — top right, tilted slightly left */}
                  <span
                    className="art art-ghost"
                    style={{
                      fontSize:"clamp(52px,5.5vw,82px)",
                      top:"8%",
                      right:"4%",
                      "--rot":"rotate(-8deg)",
                      fontFamily:"var(--font-estrella)",
                      color:"#55ff00fb",
                      animationDelay:".6s",
                      fontWeight:400,
                      letterSpacing:"-.03em",
                    } as React.CSSProperties}
                  >
                    design × code
                  </span>

                  {/* Medium — center-right, tilted right */}
                  <span
                    className="art art-faint"
                    style={{
                      fontSize:"clamp(108px,3vw,46px)",
                      top:"44%",
                      left:"12%",
                      "--rot":"rotate(6deg)",
                      fontFamily:"var(--font-estrella)",
                      animationDelay:".75s",
                      fontWeight:400,
                      letterSpacing:"-.02em",
                       color: "rgb(238, 7, 7)",

                    } as React.CSSProperties}
                  >
                    creative direction
                  </span>

                  {/* Small label — bottom left of canvas, steep tilt */}
                  {/* <span
                    className="art art-label"
                    style={{
                      fontSize:"10px",
                      bottom:"22%",
                      left:"5%",
                      "--rot":"rotate(-14deg)",
                      animationDelay:".9s",
                      letterSpacing:".18em",
                    } as React.CSSProperties}
                  >
                    web & mobile
                  </span> */}

                  {/* Green outlined — bottom right, slight tilt */}
                  <span
                    className="art art-green"
                    style={{
                      fontSize:"clamp(22px,2.4vw,36px)",
                      bottom:"8%",
                      right:"6%",
                      "--rot":"rotate(4deg)",
                      animationDelay:"1.05s",
                      fontWeight:400,
                      letterSpacing:"-.01em",
                    } as React.CSSProperties}
                  >
                    end-to-end
                  </span>

                </div>
              )}
            </div>
          </div>

          {/* ── 02 Capabilities ── */}
          <div className="row r2">
            <div className="lbl">
              <span className="lbl-n">02</span>
              <span className="lbl-t">Capabilities</span>
            </div>
            <div className="bdy">
              <div className="caps-row-inner">
                {capabilities.map((c, i) => (
                  <div
                    className="cap"
                    key={c.title}
                    onMouseEnter={() => setHoveredCap(i)}
                    onMouseLeave={() => setHoveredCap(null)}
                  >
                    <div className="cap-fill" />
                    <span className="cap-title">{c.title}</span>
                    <div className="cap-right">
                      <span className="cap-year">{c.year}</span>
                      <span className="cap-arr">↗</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Artistic scattered text — Capabilities zone ── */}
              {mounted && (
                <div className="art-canvas">

                  {/* Huge ghost number — top anchor */}
                  <span
                    className="art art-mid"
                    style={{
                      fontSize:"clamp(80px,10vw,148px)",
                      top:"-10%",
                      right:"2%",
                      "--rot":"rotate(-5deg)",
                      animationDelay:".5s",
                      fontWeight:400,
                      letterSpacing:"-.05em",
                      lineHeight:1,
                    } as React.CSSProperties}
                  >
                    05
                  </span>

                  {/* Medium phrase — mid left of canvas */}
                  <span
                    className="art art-faint"
                    style={{
                      fontSize:"clamp(20px,2.2vw,32px)",
                      top:"42%",
                      left:"8%",
                      "--rot":"rotate(9deg)",
                      animationDelay:".65s",
                      fontWeight:400,
                      letterSpacing:"-.015em",
                    } as React.CSSProperties}
                  >
                    build & ship
                  </span>

                  {/* Small tilted label bottom */}
                  <span
                    className="art art-label"
                    style={{
                      fontSize:"10px",
                      bottom:"18%",
                      left:"18%",
                      "--rot":"rotate(-11deg)",
                      animationDelay:".8s",
                      letterSpacing:".16em",
                    } as React.CSSProperties}
                  >
                    since 2020
                  </span>

                  {/* Ghost outline bottom right */}
                  <span
                    className="art art-ghost"
                    style={{
                      fontSize:"clamp(18px,2vw,28px)",
                      bottom:"10%",
                      right:"5%",
                      "--rot":"rotate(5deg)",
                      animationDelay:".95s",
                      fontWeight:400,
                      letterSpacing:"-.01em",
                    } as React.CSSProperties}
                  >
                    full spectrum
                  </span>

                  {/* Tiny floater — far top right */}
                  <span
                    className="art art-green"
                    style={{
                      fontSize:"clamp(14px,1.4vw,20px)",
                      top:"14%",
                      right:"8%",
                      "--rot":"rotate(-18deg)",
                      animationDelay:"1.1s",
                      fontWeight:400,
                      letterSpacing:".04em",
                    } as React.CSSProperties}
                  >
                    ✦
                  </span>

                </div>
              )}
            </div>
          </div>

          {/* ── 03 Projects ── */}
          <div className="row r3">
            <div className="lbl">
              <span className="lbl-n">03</span>
              <span className="lbl-t">Projects</span>
            </div>
            <div className="bdy">
              <a href="/works" className="proj-a">
                <div className="proj-circ">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#0f0f0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="proj-txt">
                  <span className="proj-main">View selected work</span>
                  <span className="proj-sub">Case studies & live projects</span>
                </div>
              </a>
            </div>
          </div>

          {/* ── 04 Skills ── */}
          <div className="row r4">
            <div className="lbl">
              <span className="lbl-n">04</span>
              <span className="lbl-t">Skills</span>
            </div>
            <div className="bdy" style={{paddingLeft:0,paddingRight:0,paddingBottom:0}}>
              <div className="skills-wrap">
                {techStack.map(({ category, items }) => (
                  <div className="sk-cell" key={category}>
                    <div className="sk-cat-row">
                      <span className="sk-cat">{category}</span>
                      <div className="sk-bar" />
                    </div>
                    <div className="chips">
                      {items.map(({ icon: Icon, name }) => (
                        <span className="chip" key={name}>
                          <Icon size={11} />
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}