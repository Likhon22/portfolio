import { FiGithub, FiLinkedin } from "react-icons/fi";

const EMAIL = "likhonsarker793@gmail.com";

const Contact = () => {
  return (
    <section id="contact" className="section theme-dark" data-nav-theme="dark">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">contact</span>
          <h2 className="section-title">Let's talk</h2>
          <p className="section-lede">
            I'm based in Dhaka and open to full-stack and backend-focused
            roles, freelance builds, or just a good technical conversation.
          </p>
        </div>

        <div className="contact-inner">
          <a href={`mailto:${EMAIL}`} className="contact-email">
            {EMAIL}
          </a>

          <div className="contact-social">
            <a href="https://github.com/Likhon22" target="_blank" rel="noreferrer">
              <FiGithub size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/likhon-sarker-78395a336"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
