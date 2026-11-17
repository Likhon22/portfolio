import me from "../assets/me.jpeg";

const FOCUS_AREAS = [
  "Backend services in Go and Node.js, built around clean architecture and real data constraints.",
  "Full-stack delivery — the same person shipping the API and the interface running on top of it.",
  "Production ownership: Docker, Caddy, CI/CD, and infrastructure that stays up after launch day.",
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">about</span>
          <h2 className="section-title">A bit about me</h2>
        </div>

        <div className="about-grid">
          <div className="about-portrait">
            <div className="about-image-frame">
              <img src={me} alt="Portrait of Main Uddin Sarker (Likhon), full-stack software engineer" />
            </div>
            <dl className="about-facts">
              <div className="about-fact">
                <dt>Based in</dt>
                <dd>Dhaka, Bangladesh</dd>
              </div>
              <div className="about-fact">
                <dt>Education</dt>
                <dd>B.Sc. CSE, United International University</dd>
              </div>
              <div className="about-fact">
                <dt>Languages</dt>
                <dd>Bangla (native), English</dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="about-text">
              <p>
                I'm <strong>Main Uddin Sarker</strong> — most people know me as
                Likhon, and online I go by iamlikhon. I'm a full-stack software
                engineer based in Dhaka, working across Go (Golang), Node.js,
                JavaScript, and TypeScript to build services that hold up once
                real users and real data show up.
              </p>
              <p>
                My day-to-day spans REST and gRPC APIs, PostgreSQL and MongoDB
                data layers, and the Next.js/React interfaces on top of them —
                plus the Docker, Caddy, and CI/CD work that gets all of it
                running on a VPS instead of just a laptop.
              </p>
            </div>

            <div className="focus-list">
              {FOCUS_AREAS.map((text, i) => (
                <div className="focus-item" key={i}>
                  <span className="focus-marker">{String(i + 1).padStart(2, "0")}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
