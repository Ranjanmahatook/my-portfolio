const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="global-footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Ranjan Mahato. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="#" onClick={(e) => e.preventDefault()}>
            Privacy Policy
          </a>
          <span> • </span>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Terms of Use
          </a>
        </div>

        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
