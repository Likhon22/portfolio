import { useEffect, useRef, useState } from "react";

const CountUp = ({
  to,
  suffix = "",
  duration = 1500,
  delay = 0,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    let timeoutId = 0;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) * (1 - progress);
        setValue(Math.round(eased * to));
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        // start right as the .reveal fade-in begins (0.65s delay)
        // so it's already counting, not stuck at 0, once it appears
        timeoutId = window.setTimeout(run, 650 + delay);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [to, duration, delay]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero theme-dark" id="home" data-nav-theme="dark">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-inner">
          <p className="hero-eyebrow reveal" style={{ animationDelay: "0.05s" }}>
            Dhaka, Bangladesh <span>·</span> Open to new opportunities
          </p>

          <h1 className="hero-title reveal" style={{ animationDelay: "0.17s" }}>
            Software engineer, <em>end to end.</em>
          </h1>

          <p className="hero-subtitle reveal" style={{ animationDelay: "0.29s" }}>
            I design and ship backend systems and the products that sit on top
            of them — Go and Node.js services running in production, Next.js
            and React interfaces people actually use, deployed on real
            infrastructure I keep running myself.
          </p>

          <div className="hero-stack reveal" style={{ animationDelay: "0.41s" }}>
            {["Go", "TypeScript", "Next.js", "PostgreSQL", "Docker"].map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="hero-actions reveal" style={{ animationDelay: "0.53s" }}>
            <a
              href="#contact"
              onClick={(e) => scrollToSection("contact", e)}
              className="btn btn-primary"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection("projects", e)}
              className="btn btn-outline"
            >
              See my work
            </a>
          </div>

          <div className="hero-stats reveal" style={{ animationDelay: "0.65s" }}>
            <div className="hero-stat">
              <span className="hero-stat-num">
                <CountUp to={3} suffix="+" delay={0} />
              </span>
              <span className="hero-stat-label">years shipping production code</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">
                <CountUp to={10} suffix="+" delay={150} duration={1700} />
              </span>
              <span className="hero-stat-label">systems built end to end</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">
                <CountUp to={3} delay={300} />
              </span>
              <span className="hero-stat-label">teams I've shipped with</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal" style={{ animationDelay: "0.4s" }}>
          <div className="terminal-card">
            <div className="terminal-bar">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-title">likhon — zsh</span>
            </div>
            <div className="terminal-body">
              <p>
                <span className="terminal-prompt">$</span> whoami
              </p>
              <p className="terminal-out">likhon · full-stack engineer</p>
              <p>
                <span className="terminal-prompt">$</span> cat stack.txt
              </p>
              <p className="terminal-out">go · typescript · next.js · postgres</p>
              <p>
                <span className="terminal-prompt">$</span> systemctl status likhon
              </p>
              <p className="terminal-out">
                <span className="terminal-status" /> active — still running, right now
                <span className="terminal-cursor" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => scrollToSection("about", e)}
        className="hero-scroll-cue reveal"
        style={{ animationDelay: "0.8s" }}
        aria-label="Scroll to about section"
      >
        <span className="hero-scroll-line" />
        <span>Scroll</span>
      </a>
    </section>
  );
};

export default Hero;
