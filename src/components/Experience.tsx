type Role = {
  dates: string;
  role: string;
  company: string;
  points: string[];
};

const ROLES: Role[] = [
  {
    dates: "Sep 2025 — Present",
    role: "Software Engineer",
    company: "Metamorphosis Ltd.",
    points: [
      "Build full-stack features end to end: responsive Next.js interfaces and backend services across Node.js, Go, and Python, including FastAPI and Gemini-powered AI tooling for speech evaluation and document extraction.",
      "Engineer secure REST APIs with JWT auth and goroutine-based background tasks, caching hot paths with Redis and shipping through Docker and GitHub Actions to a Linux VPS.",
    ],
  },
  {
    dates: "May 2024 — Aug 2025",
    role: "Software Developer",
    company: "Presync",
    points: [
      "Built responsive web applications with React (Vite), Go, and Node.js, keeping the stack type-safe end to end with TypeScript and Zod.",
      "Managed data in PostgreSQL and MongoDB, integrated Firebase authentication and Cloudinary, and worked closely with designers to ship pixel-perfect Tailwind CSS interfaces.",
    ],
  },
  {
    dates: "May 2023 — Jul 2024",
    role: "Full-Stack Developer",
    company: "Freelance",
    points: [
      "Delivered client applications in Go, Node.js, and React from MVP to production, applying clean architecture and dependency injection for maintainable codebases.",
      "Optimized PostgreSQL and MongoDB queries and deployed finished products on Vercel and DigitalOcean.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div className="timeline">
          {ROLES.map((r) => (
            <div className="timeline-item" key={r.company}>
              <span className="timeline-date">{r.dates}</span>
              <div>
                <h3 className="timeline-role">
                  {r.role} <span>@ {r.company}</span>
                </h3>
                <ul className="timeline-points">
                  {r.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
