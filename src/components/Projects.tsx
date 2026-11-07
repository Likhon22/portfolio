import { FiArrowUpRight, FiGithub } from "react-icons/fi";

type Project = {
  category: string;
  title: string;
  stack: string[];
  points: string[];
  liveUrl?: string;
  liveLabel?: string;
};

const PROJECTS: Project[] = [
  {
    category: "full-stack · e-commerce",
    title: "Prism — Online Bookstore Platform",
    stack: ["Go", "Next.js", "PostgreSQL", "Cloudflare R2", "Docker"],
    points: [
      "Go/chi backend on pgx and sqlc: cookie-based JWT auth with rotating refresh tokens, multi-role RBAC, and atomic stock-reservation checkout.",
      "SSLCommerz payments with server-to-server IPN validation, plus a Next.js storefront and admin panel with bilingual fuzzy search and full SEO.",
    ],
    liveUrl: "https://prismprokashoni.com/",
    liveLabel: "prismprokashoni.com",
  },
  {
    category: "full-stack · publishing",
    title: "Enterprise Multi-Service News Ecosystem",
    stack: ["Go", "Next.js", "PostgreSQL", "Caddy", "Docker"],
    points: [
      "High-concurrency Go/chi news engine with atomic database transactions, S3-compliant media handling, and HTML sanitization via Bluemonday.",
      "Next.js reader frontend with SSG/ISR and bilingual SEO slugs, an admin CMS with RBAC and a TipTap editor, deployed behind Caddy on a Linux VPS.",
    ],
    liveUrl: "https://www.dhakapapers.com/",
    liveLabel: "dhakapapers.com",
  },
  {
    category: "backend · security",
    title: "Sentinel — Evidence-Grade Endpoint Security Platform",
    stack: ["Go", "PostgreSQL", "Next.js", "Docker"],
    points: [
      "Go/chi backend and Windows agent for tamper-evident endpoint monitoring: SHA-256-hashed device enrollment and an append-only tamper-event audit trail.",
      "Agent self-update pipeline with automatic rollback on a broken release, running in production behind Cloudflare against a real monitored device fleet.",
    ],
  },
  {
    category: "frontend",
    title: "Nourish Corporate Ecosystem",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    points: [
      "High-performance corporate frontend built with Next.js and Framer Motion, using scroll-linked scaling and physics-based interactions for a premium, fluid feel.",
      "Engineered a mobile-first navigation system with independent event handling, keeping data-driven content separate from UI components for easy updates.",
    ],
    liveUrl: "https://www.nourish-poultry.com/",
    liveLabel: "nourish-poultry.com",
  },
  {
    category: "backend · microservices",
    title: "E-Commerce Microservices Platform",
    stack: ["Go", "Node.js", "gRPC", "Kong", "Redis", "MongoDB"],
    points: [
      "Go and Node.js services for Auth, Product, Cart, and Order, talking over gRPC for low-latency, high-concurrency transactions.",
      "Kong API Gateway for routing, JWT validation, and JSON-to-gRPC translation, with Redis caching and Prometheus/Grafana observability.",
    ],
  },
  {
    category: "ai tooling",
    title: "IELTS Speaking Grader",
    stack: ["Python", "FastAPI", "Whisper", "Gemini", "Docker"],
    points: [
      "Full speech pipeline: local Whisper transcription, Edge-TTS question narration, and Gemini-powered grading against a rubric-engineered prompt.",
      "Shipped as a Streamlit app and a documented FastAPI backend sharing the same services, containerized and verified end to end against real audio.",
    ],
  },
  {
    category: "ai tooling",
    title: "Business Card Data Extractor",
    stack: ["Python", "Gemini API", "Streamlit", "Google APIs"],
    points: [
      "Extracts structured contact data from business-card images using the Gemini vision API with a JSON schema, handling rate limits without losing progress.",
      "Two pipelines in one Streamlit UI: Google Drive images in and Google Sheets out via a service-account OAuth flow, or a local-folder mode exporting CSV.",
    ],
  },
  {
    category: "ai tooling",
    title: "Messenger Inbox Triage",
    stack: ["Python", "Meta Messenger API", "Gemini", "Telegram Bot API"],
    points: [
      "Webhook service that classifies incoming Messenger messages against a business owner's own priority rules using the Gemini API.",
      "Routes matches to a priority queue and pushes them to Telegram, with a reply-draft step so the owner approves before anything sends.",
    ],
  },
];

const MORE_BUILDS = [
  { name: "Blog Platform", stack: "React · Firebase · Cloudinary", url: "https://www.zenfla.com" },
  {
    name: "University Management System",
    stack: "Express · MongoDB · React · Redux",
    url: "https://github.com/Likhon22/university-management-system-client.git",
  },
  {
    name: "Car Washing System",
    stack: "React · Node.js · MongoDB · RTK Query",
    url: "https://github.com/Likhon22/car-washing-system-frontend.git",
  },
  { name: "High-Performance School Management API", stack: "Go · PostgreSQL · Zerolog" },
  { name: "EasyWear E-Commerce", stack: "React · Redux Toolkit · Node.js" },
  { name: "QuickAi", stack: "Node.js · PostgreSQL · TypeScript" },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-lede">
            A handful of systems I've built end to end — from the database up
            through the interface someone actually clicks on.
          </p>
        </div>

        <div>
          {PROJECTS.map((p) => (
            <article className="project-row" key={p.title}>
              <div className="project-meta">
                <span className="project-category">{p.category}</span>
                <div className="project-tags">
                  {p.stack.map((s) => (
                    <span className="project-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="project-title">{p.title}</h3>
                <ul className="project-points">
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {p.liveLabel} <FiArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="more-builds">
          <h3 className="more-builds-title">more builds</h3>
          {MORE_BUILDS.map((b) => (
            <div className="more-row" key={b.name}>
              {b.url ? (
                <a
                  href={b.url}
                  target="_blank"
                  rel="noreferrer"
                  className="more-name"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                >
                  {b.name}
                  {b.url.includes("github.com") ? <FiGithub size={13} /> : <FiArrowUpRight size={13} />}
                </a>
              ) : (
                <span className="more-name">{b.name}</span>
              )}
              <span className="more-stack">{b.stack}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
