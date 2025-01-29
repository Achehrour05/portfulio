import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import './Header.css';
import avatar from './Avatar.png';
import { motion } from "framer-motion";

function Headerport() {
  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="globalcontainer" id='home'>
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand text-light fw-bold" href="#home">
            ACHEHROUR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav0"
            aria-controls="navbarNav0"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
              }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav0">
            <ul className="navbar-nav ms-auto gap-2">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="sidescontainer">
        <motion.div
          className="leftside"
          initial="hidden"
          whileInView="visible"
          variants={leftVariant}
          viewport={{ once: false, amount: 0.5 }} 
          transition={{ duration: 0.6 }} 
        >
          <h2>Abdessamad ACHEHROUR</h2>
          <p className='job'>Software Engineering Student @ <span>FSTG Marrakech</span></p>
          <p className='lorem'>
            Étudiant ingénieur passionné par le développement Full-Stack (React, Spring Boot, FastAPI) et l'intelligence artificielle appliquée. Déterminé à concevoir des architectures logicielles fiables, scalables et centrées sur l'utilisateur.
          </p>
          <div className="social-icons d-flex mt-3 gap-3">
            <a href="https://github.com/Achehrour05" target="_blank" rel="noopener noreferrer" className="icon-container text-light" aria-label="GitHub">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/abdessamad-achehrour-800138346" target="_blank" rel="noopener noreferrer" className="icon-container text-light" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:abdessamadachehrour@gmail.com" className="icon-container text-light" aria-label="Email">
              <FiMail size={28} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="rightside"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <img src={avatar} alt="Abdessamad Achehrour Avatar" loading="eager" width="380" height="380" />
        </motion.div>
      </div>
    </div>
  );
}

export default Headerport;
