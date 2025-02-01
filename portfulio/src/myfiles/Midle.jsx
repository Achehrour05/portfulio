import React from 'react';
import { FaSchool, FaGraduationCap, FaUniversity } from "react-icons/fa";
import { motion } from 'framer-motion';
import './Midle.css';

function Midle() {
    // Variants pour l'animation
    const cubeVariants = {
        hidden: { opacity: 0 }, // État initial : caché
        visible: { opacity: 1 }, // État final : visible
    };

    return (
        <div className='containertotal' id="about">
            <h2 className='h21'>About</h2>
            <div className='containerside'>
                <motion.div
                    className="left"
                    initial="hidden"
                    whileInView="visible"
                    variants={cubeVariants}
                    viewport={{ once: false, amount: 0.5 }} // Déclenche l'animation quand 50% de l'élément est visible
                    transition={{ duration: 0.8 }}
                >
                    <div className="cont">
                        <div className="iconcont">
                            <FaSchool className="school-icon" />
                        </div>
                        <p className="maintitle">Baccalaureat</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis deserunt unde cupiditate temporibus veniam distinctio dignissimos aliquid tempora repellendus assumenda iure asperiores adipisci reprehenderit, omnis eius numquam aperiam, sequi magni.</p>
                    </div>
                </motion.div>

                <motion.div
                    className="middle"
                    initial="hidden"
                    whileInView="visible"
                    variants={cubeVariants}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="cont">
                        <div className="iconcont">
                            <FaGraduationCap className="school-icon" />
                        </div>
                        <p className="maintitle">Deust</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis deserunt unde cupiditate temporibus veniam distinctio dignissimos aliquid tempora repellendus assumenda iure asperiores adipisci reprehenderit, omnis eius numquam aperiam, sequi magni.</p>
                    </div>
                </motion.div>

                <motion.div
                    className="right"
                    initial="hidden"
                    whileInView="visible"
                    variants={cubeVariants}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="cont">
                        <div className="iconcont">
                            <FaUniversity className="school-icon" />
                        </div>
                        <p className="maintitle">Ingenierie</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis deserunt unde cupiditate temporibus veniam distinctio dignissimos aliquid tempora repellendus assumenda iure asperiores adipisci reprehenderit, omnis eius numquam aperiam, sequi magni.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Midle;
