import "./Skillscss.css";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiC, SiCplusplus, SiSpringboot, SiPostgresql, SiFastapi } from "react-icons/si";

function Skills() {
  const techStack = [
    { name: "HTML5", icon: <FaHtml5 size="70px" color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size="70px" color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size="70px" color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size="70px" color="#61DAFB" /> },
    { name: "Python", icon: <FaPython size="70px" color="#3776AB" /> },
    { name: "Java", icon: <FaJava size="70px" color="#007396" /> },
    { name: "C", icon: <SiC size="70px" color="#00599C" /> },
    { name: "C++", icon: <SiCplusplus size="70px" color="#00599C" /> },
    { name: "Spring Boot", icon: <SiSpringboot size="70px" color="#6DB33F" /> },
    { name: "FastAPI", icon: <SiFastapi size="70px" color="#009688" /> },
    { name: "Docker", icon: <FaDocker size="70px" color="#2496ED" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size="70px" color="#4169E1" /> },
    { name: "Git", icon: <FaGitAlt size="70px" color="#F05032" /> },
    { name: "Bootstrap", icon: <FaBootstrap size="70px" color="#7952B3" /> },
  ];

  return (
    <div className="container" id="skills">
      <h2 className="h23">
        My <span>Skills</span>
      </h2>
      <div className="Skillscontainer" role="list" aria-label="Technical skills list">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="icon"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              animate={{
                y: [0, -6, 0],
                transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {tech.icon}
            </motion.div>
            <p>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
