import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Contact.css";

function ContactUs() {
  return (
    <div className="containergl" id="contact">
      <div className="containercontact">
        <h2 className="h23">
          Contact <span>Us</span>
        </h2>

        <div className="contactform">
          <motion.div
            className="rside"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }} 
          >
            <p>
              WE'D LOVE TO HEAR <br /> <span> FROM YOU!</span>
            </p>
          </motion.div>

          <motion.div
            className="lside"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }} 
          >
            <form>
              <motion.div
                className="mb-3"
                whileFocus={{
                  scale: 1.02,
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Votre nom"
                />
              </motion.div>
              <motion.div
                className="mb-3"
                whileFocus={{
                  scale: 1.02,
                }}
              >
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Votre email"
                />
              </motion.div>
              <motion.div
                className="mb-3"
                whileFocus={{
                  scale: 1.02,
                }}
              >
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Votre message"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Envoyer
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;