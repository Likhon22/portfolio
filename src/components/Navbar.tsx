import { useEffect, useState } from "react";

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
      <h1 className="logo">Likhon Sarker</h1>
      <div className="nav-links">
        <a href="#home" onClick={(e) => scrollToSection("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => scrollToSection("about", e)}>
          About
        </a>
        <a href="#skills" onClick={(e) => scrollToSection("skills", e)}>
          Skills
        </a>
        <a href="#projects" onClick={(e) => scrollToSection("projects", e)}>
          Projects
        </a>
        <a href="#contact" onClick={(e) => scrollToSection("contact", e)}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
