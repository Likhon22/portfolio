const Footer = () => {
  return (
    <footer className="footer theme-dark" data-nav-theme="dark">
      <div className="container footer-inner">
        <p>Main Uddin Sarker — Dhaka, Bangladesh</p>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
