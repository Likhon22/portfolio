import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa"; // Import icon for enhanced navbar

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Enhanced logo with icon */}
      <h1 className="logo">
        <FaCode className="logo-icon" /> Likhon Sarker
      </h1>
      <div className="nav-links">
        <a
          href="#home"
          onClick={(e) => scrollToSection("home", e)}
          className="nav-link"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => scrollToSection("about", e)}
          className="nav-link"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={(e) => scrollToSection("skills", e)}
          className="nav-link"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={(e) => scrollToSection("projects", e)}
          className="nav-link"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => scrollToSection("contact", e)}
          className="nav-link"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
