const SKILL_GROUPS = [
  {
    title: "languages & core",
    core: ["Go (Golang)", "TypeScript"],
    items: ["Go (Golang)", "TypeScript", "JavaScript", "Python", "SQL", "AI / LLM Tooling"],
    note: "The backbone of Prism, Sentinel, the news platform, and most of the AI tooling.",
  },
  {
    title: "frontend",
    core: ["Next.js", "React"],
    items: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "TanStack Query", "Framer Motion"],
    note: "Powers every storefront, admin panel, and dashboard I've shipped.",
  },
  {
    title: "backend & data",
    core: ["PostgreSQL", "gRPC"],
    items: ["Node.js", "Express.js", "NestJS", "Chi", "Gin", "gRPC", "PostgreSQL", "MongoDB", "Redis"],
    note: "The data layer behind every production system above.",
  },
  {
    title: "infra & tooling",
    core: ["Docker", "Caddy"],
    items: ["Docker", "Docker Compose", "Caddy", "GitHub Actions", "Linux VPS", "Vercel"],
    note: "Keeps services running after launch day, not just during the demo.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section theme-dark" data-nav-theme="dark">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">skills</span>
          <h2 className="section-title">Tools I reach for</h2>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span
                    className={`skill-chip ${group.core.includes(item) ? "is-core" : ""}`}
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="skill-group-note">{group.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
