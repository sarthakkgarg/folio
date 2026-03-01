// lib/projects.ts
// ── Single source of truth for all projects ──
// Both works.tsx and RestrictedAccess.tsx import from here.
// Just set restricted: true/false per project — everything else is automatic.

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  type: string;
  client?: string;
  description: string[];
  tags: string[];
  accent: string;
  webImages: string[];
  mobileImages: string[];
  video?: string;
  github?: string;
  live?: string;
  appStore?: string;
  playStore?: string;
  ndaDetails?: string;
  restricted?: boolean;   // ← only field you need to toggle
};

export const PROJECTS: Project[] = [
  {
    id: "sarashree",
    title: "Sarashree",
    subtitle: "Brand Identity & E-Commerce",
    year: "2026",
    type: "Web · Branding",
    client: "Confidential",
    restricted: true,   // ← set to false to make public
    ndaDetails:
      "This project is covered under a signed Non-Disclosure Agreement. Case study materials, screenshots, source code, and client details cannot be shared publicly. Access is granted on a case-by-case basis at Sarthak's discretion.",
    description: [
      "Full-featured e-commerce website with complete brand identity — from logo system to production deployment.",
      "Engineered dynamic product catalogs, cart workflows, secure checkout, order management, and authentication.",
      "Integrated Razorpay on AWS infrastructure with a Figma-designed UI in Tailwind CSS.",
    ],
    tags: ["React", "Node.js", "MongoDB", "AWS", "Figma", "Razorpay"],
    accent: "#ff6b6b",
    webImages: ["/images/sarashree-1.png", "/images/sarashree-2.png", "/images/sarashree-3.png"],
    mobileImages: [],
    github: "https://github.com/sarthakgarg/sarashree",
    live: "https://sarashree.in",
  },
//   {
//     id: "aipsychi",
//     title: "AiPsychi",
//     subtitle: "Mental Health Assessment Platform",
//     year: "2024–2025",
//     type: "Web · Mobile",
//     client: "Confidential",
//     restricted: true,   // ← set to false to make public
//     ndaDetails:
//       "This project is covered under a signed Non-Disclosure Agreement. Case study materials, screenshots, source code, and client details cannot be shared publicly. Access is granted on a case-by-case basis at Sarthak's discretion.",
//     description: [
//       "Conceptualized, designed, and engineered a complete digital assessment infrastructure for mental health professionals.",
//       "Handled every layer — business logic, UX/UI design, API development, database modeling, and cloud deployment.",
//       "The platform supports structured assessments, dynamic session workflows, subscription logic, and secure clinical data handling.",
//     ],
//     tags: ["React", "React Native", "Node.js", "MongoDB", "AWS", "OpenAI API"],
//     accent: "#00d632",
//     webImages: ["/images/aipsychi-1.png", "/images/aipsychi-2.png"],
//     mobileImages: ["/images/aipsychi-m1.png", "/images/aipsychi-m2.png"],
//     github: "https://github.com/sarthakgarg/aipsychi",
//     live: "https://aipsychi.com",
//   },
  // ── Add more projects below ──
  // {
  //   id: "myproject",
  //   title: "My Project",
  //   restricted: false,   ← public, github button shows normally
  //   ...
  // },
];

// Helper to get a single project by id (used in RestrictedAccess)
export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find(p => p.id.toLowerCase() === id.toLowerCase());
}