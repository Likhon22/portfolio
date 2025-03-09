import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
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

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact" // Ensure this ID is correct for navigation
      className={`contact-section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-text">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <MdEmail className="contact-icon" />
                <span>likhonsarker793@gmail.com</span>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/Likhon22"
                  target="_blank"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/likhon-sarker-78395a336"
                  target="_blank"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.facebook.com/likhana.sarakara.169778"
                  target="_blank"
                  className="social-link"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/likhon_sarker6404"
                  target="_blank"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} required></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
