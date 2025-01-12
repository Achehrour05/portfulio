import React from 'react';
import { FaSchool, FaGraduationCap, FaUniversity } from "react-icons/fa";
import { motion } from 'framer-motion';
import './Midle.css';

function Midle() {
    const cubeVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className='containertotal' id="about">
            <h2 className='h21'>About & Formation</h2>
            <div className='containerside'>
                <motion.div
                    className="left"
                    initial="hidden"
                    whileInView="visible"
                    variants={cubeVariants}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="cont">
                        <div className="iconcont">
                            <FaSchool className="school-icon" />
                        </div>
                        <p className="maintitle">Baccalauréat</p>
                        <p>Baccalauréat Scientifique — Mention Très Bien. Solides bases académiques en mathématiques appliquées, physique et raisonnement logique.</p>
                    </div>
                </motion.div>

                <motion.div
                    className="middle"
                    initial="hidden"
                    whileInView="visible"
                    variants={cubeVariants}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    <div className="cont">
                        <div className="iconcont">
                            <FaGraduationCap className="school-icon" />
                        </div>
                        <p className="maintitle">DEUST MIPC (2022 - 2024)</p>
                        <p>Faculté des Sciences et Techniques de Marrakech (FSTG). Formation approfondie en algorithmique, structures de données, programmation C/C++ et modélisation.</p>
                    </div>
                </motion.div>

                <motion.div
                    className="right"
                    initial="hidden"
                    whileInView="visible"
                    variants={cubeVariants}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <div className="cont">
                        <div className="iconcont">
                            <FaUniversity className="school-icon" />
                        </div>
                        <p className="maintitle">Cycle Ingénieur (2024 - Présent)</p>
                        <p>Cycle d'Ingénieur d'État en Informatique & Réseaux à la FSTG Marrakech. Spécialisation en architectures logicielles, microservices conteneurisés et IA.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Midle;
