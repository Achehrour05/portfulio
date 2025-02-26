import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container py-4 text-center text-light">
      <div className="container d-flex flex-column align-items-center">
        <div className="footer-socials mb-3 d-flex gap-3">
          <a
            href="https://github.com/Achehrour05"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdessamad-achehrour-800138346"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:abdessamadachehrour@gmail.com"
            className="footer-icon"
            aria-label="Email"
          >
            <FiMail size={22} />
          </a>
        </div>
        <p className="mb-2 text-secondary small">
          Conçu & Développé avec passion par <b className="text-light">Abdessamad Achehrour</b> · 2025
        </p>
        <button
          onClick={scrollToTop}
          className="btn btn-outline-secondary btn-sm rounded-circle p-2 mt-2"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
