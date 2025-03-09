import { useEffect, useState } from "react";
import { FaArrowRight, FaCode } from "react-icons/fa";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add fade-in animation when component mounts
    setIsLoaded(true);
  }, []);

  // Add stopPropagation to prevent clicks from reaching particles background
  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event bubbling to particles layer

    const section = document.getElementById(sectionId);
    if (section) {
      // Ensure proper scrolling with offset for navbar
      const navbarHeight = 80; // Approximate navbar height
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className={`hero-content ${isLoaded ? "loaded" : ""}`}>
        {/* Decorative background elements */}
        <div className="hero-bg-elements">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>

        {/* Tag line */}
        <div className="hero-tag">
          <span className="hero-icon">
            <FaCode />
          </span>
          <span>Full Stack Developer</span>
        </div>

        {/* Main title */}
        <h1 className="hero-title">
          Hi, I'm{" "}
          <span className="highlight gradient-animated">Likhon Sarker</span>
        </h1>

        {/* Subtitle with typing effect */}
        <p className="hero-subtitle">
          I build{" "}
          <span className="hero-emphasis">exceptional digital experiences</span>{" "}
          with modern web technologies
        </p>

        {/* Centered typing animation container without static text */}
        <div className="typing-wrapper">
          <div className="typing-container">
            <div className="typing-slider centered-slider">
              <div className="typing-slide">Javascript & TypeScript Expert</div>
              <div className="typing-slide">React & Next.js Developer</div>
              <div className="typing-slide">MongoDB & PostgreSQL</div>
              <div className="typing-slide">Node.js & Express.js</div>
            </div>
          </div>
        </div>

        {/* Call to action buttons with improved click handling */}
        <div
          className="hero-buttons"
          style={{ position: "relative", zIndex: 20 }}
        >
          <a
            href="#contact"
            onClick={(e) => scrollToSection("contact", e)}
            className="primary-button"
            style={{ position: "relative", zIndex: 20 }}
          >
            Contact Me <FaArrowRight className="button-icon" />
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection("projects", e)}
            className="outline-button"
            style={{ position: "relative", zIndex: 20 }}
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
