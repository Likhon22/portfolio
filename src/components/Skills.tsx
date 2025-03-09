import { useEffect, useState } from "react";
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiMongoose,
  SiFirebase,
  SiVercel,
  SiRender,
  SiRedux,
  SiJsonwebtokens,
} from "react-icons/si";

const Skills = () => {
  // Animation for sections
  const [isVisible, setIsVisible] = useState(false);

  // Skills data
  const frontendSkills = [
    {
      name: "TypeScript",
      icon: SiTypescript,
      description: "Strongly-typed JavaScript for reliable applications",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      description: "Core language for web development",
    },
    {
      name: "React",
      icon: FaReact,
      description: "Library for building user interfaces",
    },
    {
      name: "Redux",
      icon: SiRedux,
      description: "Predictable state management for JavaScript apps",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      description: "React framework for production",
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      description: "Utility-first CSS framework",
    },
    {
      name: "HTML5",
      icon: FaHtml5,
      description: "Markup language for web pages",
    },
    { name: "CSS3", icon: FaCss3Alt, description: "Styling web pages" },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: FaNodeJs,
      description: "JavaScript runtime for server-side applications",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      description: "Web application framework for Node.js",
    },
    {
      name: "JWT",
      icon: SiJsonwebtokens,
      description: "JSON Web Tokens for secure authentication",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      description: "NoSQL database for modern applications",
    },
    {
      name: "Mongoose",
      icon: SiMongoose,
      description: "MongoDB object modeling for Node.js",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      description: "Powerful, open source object-relational database",
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      description: "Next-generation ORM for Node.js and TypeScript",
    },
  ];

  const devOpsSkills = [
    { name: "Git", icon: FaGitAlt, description: "Version control system" },
    { name: "GitHub", icon: FaGithub, description: "Development platform" },
    {
      name: "Docker",
      icon: FaDocker,
      description:
        "Platform for developing, shipping, and running applications",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      description: "Google's app development platform",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      description: "Platform for frontend frameworks and static sites",
    },
    {
      name: "Render",
      icon: SiRender,
      description: "Unified cloud for web services and databases",
    },
    { name: "VS Code", icon: FaCode, description: "Source-code editor" },
    {
      name: "RESTful API",
      icon: FaServer,
      description: "Architecture for API design",
    },
    {
      name: "Database Design",
      icon: FaDatabase,
      description: "Creating efficient database structures",
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

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className={`skills-section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skill-category">
          <h3 className="category-title">Frontend Development</h3>
          <div className="skill-cards">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <skill.icon />
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="category-title">Backend Development</h3>
          <div className="skill-cards">
            {backendSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <skill.icon />
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="category-title">DevOps & Tools</h3>
          <div className="skill-cards">
            {devOpsSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <skill.icon />
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
