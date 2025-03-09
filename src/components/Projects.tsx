import { useEffect, useState } from "react";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Project data
  const projects = [
    {
      title: "Blog Platform",
      description: "A full-featured blog platform with authentication",
      image: project1,
      technologies: ["React", "Express.js", "TypeScript", "Mongodb", "Mongoose", "Firebase"],
      demoLink: "https://www.zenfla.com",
      codeLink: "#",
    },
    {
      title: "University management robust project",
      description:
        "A full-featured university management system with authentication",
      image: project2,
      technologies: [
        "Express.js",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "JWT",
        "React",
        "Redux",
        "TailwindCSS",
      ],
      demoLink: "#",
      codeLink: "https://github.com/Likhon22/university-management-system.git",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      image: "https://via.placeholder.com/600x340?text=Task+Management+App",
      technologies: ["React", "Node.js", "Socket.io"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects" // Ensure this ID is correct for navigation
      className={`projects-section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="project-link"
                  >
                    View Demo
                  </a>
                  <a href={project.codeLink} className="project-link">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
