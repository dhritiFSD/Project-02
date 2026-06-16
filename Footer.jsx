import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-brand">
        <h2>Dhriti Gajjar</h2>
        <p>Cybersecurity Student & React Developer</p>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-social">
        <h3>Connect</h3>

        <ul>
          <li>
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a href="mailto:your-email@gmail.com">
              Email
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-top-btn">
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back To Top
        </button>
      </div>

      <hr className="footer-divider" />

      <p className="copyright">
        © {currentYear} Dhriti Gajjar. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;