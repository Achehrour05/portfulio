import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import './Header.css';
import avatar from './Avatar.png';
import { motion } from "framer-motion";

function Headerport() {
  // Animation variants for left and right sides
  const leftVariant = {
    hidden: { x: -50 },
    visible: { x: 20 },
  };

  const rightVariant = {
    hidden: { x: 70 },
    visible: { x: -70 },
  };

  return (
    <div className="globalcontainer" id='home'>
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top ">
        <div className="container">
          <a className="navbar-brand text-light nav-link" href="#">
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
            <ul className="navbar-nav ms-auto">
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
          transition={{ duration: 0.5 }} 
        >
          <h2>Abdessamad ACHEHROUR</h2>
          <p className='job'>I'm a <span>Student</span></p>
          <p className='lorem'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ea omnis iusto est voluptatem ullam! Deleniti tempora perferendis nihil ex, ipsum rem. Possimus, itaque doloremque aliquam repudiandae id iure quaerat.
          </p>
          <div className="social-icons d-flex mt-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-container text-light mx-2">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-container text-light mx-2">
              <FaLinkedin size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-container text-light mx-2">
              <FaInstagram size={30} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-container text-light mx-2">
              <FaFacebook size={30} />
            </a>
          </div>
        </motion.div>

        {/* Right side with animation */}
        <motion.div
          className="rightside"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} // Trigger when 30% is visible
          transition={{ duration: 0.5 }} // Same duration for both sides
        >
          <img src={avatar} alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default Headerport;
