import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Morocco Memory",
      category: "Full-Stack & Cultural Heritage",
      description: "Plateforme immersive de valorisation du patrimoine marocain et de mise en relation directe avec les coopératives artisanales locales.",
      stack: ["Spring Boot 3", "React 19", "PostgreSQL", "Docker"],
      github: "https://github.com/Achehrour05/MoroccoMemory",
    },
    {
      title: "Vanguard Combat",
      category: "Combat Sports Intelligence",
      description: "Hub d'analyse tactique et profiling temps réel multi-disciplines (MMA, Boxe, BJJ) avec moteur de conseil stratégique.",
      stack: ["FastAPI", "React", "Python", "Tailwind CSS"],
      github: "https://github.com/Achehrour05/Vanguard-Combat",
    },
    {
      title: "CalorieBurn Predictor",
      category: "Deep Learning & Health",
      description: "Modélisation de prédiction de dépense calorique basée sur les paramètres biométriques et d'entraînement.",
      stack: ["Python", "PyTorch", "Scikit-Learn", "Data Viz"],
      github: "https://github.com/Achehrour05/CalorieBurn-Predictor-Deep-Learning-for-Fitness-Tracking",
    },
    {
      title: "FPL Squad Optimizer",
      category: "Optimization & Analytics",
      description: "Algorithme d'optimisation de composition d'équipe Fantasy Premier League sous contraintes budgétaires.",
      stack: ["Python", "LightGBM", "Linear Programming"],
      github: "https://github.com/Achehrour05/Fantasy_premier_league_team_of_the_week",
    },
  ];

  return (
    <div className="container py-5" id="projects">
      <h2 className="h23 text-center mb-5">
        Featured <span>Projects</span>
      </h2>
      <div className="row g-4">
        {projects.map((proj, idx) => (
          <div className="col-md-6" key={proj.title}>
            <motion.div
              className="project-card p-4 h-100 rounded-4 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge bg-secondary-subtle text-secondary px-3 py-2 rounded-pill">
                  {proj.category}
                </span>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                  aria-label={`GitHub repository for ${proj.title}`}
                >
                  <FaGithub size={24} />
                </a>
              </div>
              <h3 className="h4 text-light fw-bold mb-2">{proj.title}</h3>
              <p className="text-light-50 mb-3">{proj.description}</p>
              <div className="d-flex flex-wrap gap-2 pt-2 border-top border-secondary">
                {proj.stack.map((t) => (
                  <span key={t} className="badge bg-dark text-info border border-secondary">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
