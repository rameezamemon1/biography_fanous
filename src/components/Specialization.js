import React from "react";
import "./../index.css";
import { motion } from "framer-motion";
import specialization_deeplearning from "./../images/certificates/specialization_deeplearning.png";
import specialization_reinforcemnetlearning from "./../images/certificates/specialization_reinforcemnetlearning.png";
import tensorflow_services from "./../images/certificates/tensorflow_services.png";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};


const Specialization = () => {
  return (
    <section
      data-aos="fade-up"
      className="achievements-container"
      name="specialization"
      id="specialization"
    >
      <h1 className="heading">Specialization</h1>
      <div className="projects-container">
        {/* Certification 1 - specialization_deeplearning */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={specialization_deeplearning}>
            <div className="project-images" id="specialization_deeplearning"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Deep Learning</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/X7W5B2BADYY3"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Certification 2 - specialization_reinforcemnetlearning */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={specialization_reinforcemnetlearning}>
            <div className="project-images" id="specialization_reinforcemnetlearning"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Reinforcement Learning</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/GVVZJ3RET8L2"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}    
        
            {/* Certification 3 - tensorflow_dev*/}
            <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={tensorflow_services}>
            <div className="project-images" id="tensorflow_services"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>TensorFlow Developer Certificate</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.credential.net/99e6ff65-b114-4fd5-ade9-a21cffc40f7b#gs.qv3qbw"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
              
            </div>
          </div>
        </motion.div>
        {/* // */}    
          </div>
    </section>
  );
};

export default Specialization;
