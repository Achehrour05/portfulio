import "./Skillscss.css";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";

function Skills() {
  const techStack = [
    { name: "HTML", icon: <FaHtml5 size="80px" color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size="80px" color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size="80px" color="#F7DF1E" /> },
    { name: "C", icon: <SiC size="80px" color="#00599C" /> },
    { name: "C++", icon: <SiCplusplus size="80px" color="#00599C" /> },
    { name: "Java", icon: <FaJava size="80px" color="#007396" /> },
    { name: "React", icon: <FaReact size="80px" color="#61DAFB" /> },
    { name: "Bootstrap", icon: <FaBootstrap size="80px" color="#7952B3" /> },
  ];

  return (
    <div className="container" id="skills">
      <h2 className="h23">
        My <span>Skills</span>
      </h2>
      <div className="Skillscontainer">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="icon"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            viewport={{ once: false, amount: 0.5 }} 
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
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
