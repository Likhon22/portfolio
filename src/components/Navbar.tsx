import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const darkSections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav-theme="dark"]')
    );

    const update = () => {
      setScrolled(window.scrollY > 10);

      const navHeight = navRef.current?.offsetHeight ?? 72;
      const probeY = navHeight / 2;
      const over = darkSections.some((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= probeY && rect.bottom >= probeY;
      });
      setOverDark(over);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? "scrolled" : ""} ${overDark ? "theme-dark" : ""}`}
    >
      <div className="navbar-inner">
        <a href="#home" onClick={(e) => scrollToSection("home", e)} className="logo">
          Likhon<span className="logo-mark">.</span>
        </a>
        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(item.id, e)}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" onClick={(e) => scrollToSection("contact", e)} className="nav-cta">
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default Navbar;
