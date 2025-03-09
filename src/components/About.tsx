import { useEffect, useState } from "react";
import { FaCode, FaLaptopCode, FaBookOpen } from "react-icons/fa";

import me from "../assets/me.jpeg";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`about-section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          {/* Left side - Simple image without animations */}
          <div className="about-image-wrapper">
            <img src={me} alt="Likhon Sarker" className="about-image" />

            {/* Professional highlights - No animations */}
            <div className="highlights-box">
              <h3>Professional Focus</h3>

              <div className="highlight-items">
                <div className="highlight-item">
                  <div className="highlight-icon code-icon">
                    <FaCode />
                  </div>
                  <div>
                    <h4>Web Development</h4>
                    <p>Building modern web applications</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon laptop-icon">
                    <FaLaptopCode />
                  </div>
                  <div>
                    <h4>Full Stack Solutions</h4>
                    <p>End-to-end application development</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon book-icon">
                    <FaBookOpen />
                  </div>
                  <div>
                    <h4>Continuous Learning</h4>
                    <p>Staying current with industry trends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - About content */}
          <div className="about-content">
            <h3 className="about-subtitle">
              Full Stack Developer & Problem Solver
            </h3>

            <p className="about-text">
              I'm a Full Stack Developer with expertise in modern web
              technologies including TypeScript, React, and Next.js. I focus on
              creating robust, scalable, and user-friendly applications that
              address real-world business needs.
            </p>

            <p className="about-text">
              With a solid foundation in both frontend and backend development,
              I bring ideas to life with clean, maintainable code and intuitive
              user interfaces. My approach combines technical excellence with a
              keen eye for user experience.
            </p>

            {/* Skills overview - No animations */}
            <div className="skills-overview">
              <h3>Core Competencies</h3>

              <div className="competency-bars">
                <div className="competency-item">
                  <div className="competency-header">
                    <span>Frontend Development</span>
                    <span className="competency-level">Advanced</span>
                  </div>
                  <div className="competency-bar">
                    <div
                      className="competency-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div className="competency-item">
                  <div className="competency-header">
                    <span>Backend Development</span>
                    <span className="competency-level">Proficient</span>
                  </div>
                  <div className="competency-bar">
                    <div
                      className="competency-fill"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="competency-item">
                  <div className="competency-header">
                    <span>Database Management</span>
                    <span className="competency-level">Skilled</span>
                  </div>
                  <div className="competency-bar">
                    <div
                      className="competency-fill"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div className="competency-item">
                  <div className="competency-header">
                    <span>UI/UX Implementation</span>
                    <span className="competency-level">Advanced</span>
                  </div>
                  <div className="competency-bar">
                    <div
                      className="competency-fill"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Technologies - Simple non-animated badges */}
            <div className="key-technologies">
              <h3>Key Technologies</h3>
              <div className="tech-badges">
                <span className="tech-badge js-badge">JavaScript</span>
                <span className="tech-badge ts-badge">TypeScript</span>
                <span className="tech-badge react-badge">React.js</span>
                <span className="tech-badge next-badge">Next.js</span>
                <span className="tech-badge node-badge">Node.js</span>
                <span className="tech-badge mongo-badge">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
