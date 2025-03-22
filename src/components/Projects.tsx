import { useEffect, useState } from "react";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  type TProject = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoLink: string;
    codeLink: {
      frontend: string;
      backend: string;
      full: string;
    };
  };
  // Project data
  const projects: TProject[] = [
    {
      title: "Blog Platform",
      description:
        "A full-featured blog platform with authentication and admin panel",
      image: project1,
      technologies: [
        "React",
        "TailwindCSS",
        "Daisy UI",
        "Express.js",
        "TypeScript",
        "Mongodb",
        "Mongoose",
        "Firebase",
      ],
      demoLink: "https://www.zenfla.com",
      codeLink: {
        frontend: "",
        backend: "",
        full: "",
      },
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
      demoLink: "",
      codeLink: {
        frontend:
          "https://github.com/Likhon22/university-management-system-client.git",
        backend: "https://github.com/Likhon22/university-management-system.git",
        full: "",
      },
    },
    {
      title: "Car Washing System",
      description:
        " A car washing system provides car washing services for customers",
      image: project3,
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Redux",
        "RTK Query",
        "TailwindCSS",
        "Shadcn",
      ],
      demoLink: "",
      codeLink: {
        frontend: "https://github.com/Likhon22/car-washing-system-frontend.git",
        backend: "https://github.com/Likhon22/car-washing-system-backend.git",
        full: "",
      },
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

  // Handle the source code dropdown selection
  const handleSourceCodeChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    project: TProject
  ) => {
    const selectedOption = e.target.value;
    let url = "";

    if (selectedOption === "frontend" && project.codeLink.frontend) {
      url = project.codeLink.frontend;
    } else if (selectedOption === "backend" && project.codeLink.backend) {
      url = project.codeLink.backend;
    } else if (selectedOption === "full" && project.codeLink.full) {
      url = project.codeLink.full;
    }

    if (url) {
      window.open(url, "_blank");
      // Reset the select to default option after opening link
      e.target.value = "default";
    }
  };

  // Check if a project has any code links
  const hasCodeLinks = (project: TProject) => {
    return (
      project.codeLink.frontend ||
      project.codeLink.backend ||
      project.codeLink.full
    );
  };

  return (
    <section
      id="projects"
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
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      className="project-link"
                    >
                      View Demo
                    </a>
                  )}

                  {hasCodeLinks(project) && (
                    <select
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "var(--primary-color)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        cursor: "pointer",
                      }}
                      defaultValue="default"
                      className="project-link"
                      onChange={(e) => handleSourceCodeChange(e, project)}
                    >
                      <option value="default" disabled>
                        Source Code
                      </option>
                      {project.codeLink.frontend && (
                        <option value="frontend">Frontend Code</option>
                      )}
                      {project.codeLink.backend && (
                        <option value="backend">Backend Code</option>
                      )}
                      {project.codeLink.full && (
                        <option value="full">Full Repository</option>
                      )}
                    </select>
                  )}
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
