import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Contact.css";

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Veuillez saisir une adresse email valide.");
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="containergl" id="contact">
      <div className="containercontact">
        <h2 className="h23">
          Contact <span>Me</span>
        </h2>

        <div className="contactform">
          <motion.div
            className="rside"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }} 
          >
            <p>
              DISCUTONS DE <br /> <span> VOS PROJETS !</span>
            </p>
            <p className="fs-6 text-light-50 mt-3">
              Disponible pour opportunités de stage, collaborations techniques en Full-Stack et Intelligence Artificielle.
            </p>
          </motion.div>

          <motion.div
            className="lside"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }} 
          >
            <form onSubmit={handleSubmit}>
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    className="alert alert-success py-2 px-3 mb-3 rounded-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Merci ! Votre message a été envoyé avec succès.
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    className="alert alert-danger py-2 px-3 mb-3 rounded-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div className="mb-3" whileFocus={{ scale: 1.01 }}>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Votre nom complet"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div className="mb-3" whileFocus={{ scale: 1.01 }}>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Votre adresse email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div className="mb-3" whileFocus={{ scale: 1.01 }}>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Votre message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="btn btn-primary px-4 py-2 rounded-pill fw-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
