import React, { useState } from "react";
import "./../index.css";
import { motion } from "framer-motion";
import complete_reinforcement_LS from "./../images/certificates/complete_reinforcement_LS.png";
import fundamentals_ML_finance from "./../images/certificates/fundamentals_ML_finance.png";
import improving_deaplearning from "./../images/certificates/improving_deaplearning.png";
import intro_trading_ML_gcp from "./../images/certificates/intro_trading_ML_gcp.png";
import ML_intradingfinance from "./../images/certificates/ML_intradingfinance.png";
import neural_network_deeplearning from "./../images/certificates/neural_network_deeplearning.png";
import neural_network from "./../images/certificates/neural_network.png";
import trading_strategies from "./../images/certificates/trading_strategies.png";
import neurallanguage_tensorflow from "./../images/certificates/neurallanguage_tensorflow.png";
import prediction_control_func from "./../images/certificates/prediction_control_func.png";
import sample_based_learningmethods from "./../images/certificates/sample_based_learningmethods.png";
import seq_time_prediction from "./../images/certificates/seq_time_prediction.png";
import sequence_models from "./../images/certificates/sequence_models.png";
import structure_ML_projects from "./../images/certificates/structure_ML_projects.png";
import tour_ML_finance from "./../images/certificates/tour_ML_finance.png";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Achievements = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section
      data-aos="fade-up"
      className="achievements-container"
      name="achievements"
      id="achievements"
    >
      <h1 className="heading">Achievements</h1>
      <div className="projects-container">
        {/* Certification 1 - fundamentals_ML_finance */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={fundamentals_ML_finance}
          >
            <div className="project-images" id="fundamentals_ML_finance"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Fundamentals of Machine Learning in Finance</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.coursera.org/account/accomplishments/certificate/4AKYDLTRFB7D"
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

        {/* Certification 2 - complete_reinforcement_LS */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={complete_reinforcement_LS}
          >
            <div
              className="project-images"
              id="complete_reinforcement_LS"
            ></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>A Complete Reinforcement Learning System (Capstone)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.coursera.org/account/accomplishments/certificate/Z3L23PCRJJG3"
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

        {/* Certification 3 - sequence_models */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={sequence_models}>
            <div className="project-images" id="sequence_models"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Sequence Models</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href={
                  "https://www.coursera.org/account/accomplishments/certificate/YTW64RA9JPEV"
                }
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

        {/* Certification 4 - neural_network */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={neural_network}>
            <div className="project-images" id="neural_network"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Convolutional Neural Networks</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.coursera.org/account/accomplishments/certificate/KLDHR6ARQNGU"
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

        {/* Certification 5 - prediction_control_func */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={prediction_control_func}
          >
            <div className="project-images" id="prediction_control_func"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Prediction and Control with Function Approximation</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.coursera.org/account/accomplishments/certificate/B4Z9HG8KYB78"
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
        {/* Certification 6 - intro_trading_ML_gcp */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={intro_trading_ML_gcp}
          >
            <div className="project-images" id="intro_trading_ML_gcp"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Introduction to Trading, Machine Learning & GCP</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href={
                  "https://www.coursera.org/account/accomplishments/certificate/NRGVQQHL9STJ"
                }
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
        {showMore === false ? (
          <div className="button-wrapper">
            <button
              className="button contact-btn"
              onClick={() => setShowMore(true)}
            >
              Show more{" "}
            </button>
          </div>
        ) : (
          ""
        )}
        </div>
        {showMore ? (
          <>
            {/* Certification 7 - trading_strategies*/}
            <div className="projects-container" data-aos="fade-up">

            <motion.div
              variants={boxVariants}
              whileHover="hover"
              className="projects"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={trading_strategies}
              >
                <div className="project-images" id="trading_strategies"></div>
              </a>

              <div className="project-links">
                <div className="text">
                  <h3>Reinforcement Learning for Trading Strategies</h3>
                </div>
                <div className="icons">
                  <a
                    rel="noopener noreferrer"
                    href={
                      "https://www.coursera.org/account/accomplishments/certificate/NRGVQQHL9STJ"
                    }
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

            {/* Certification 8 - ML_intradingfinance */}
            <motion.div
              variants={boxVariants}
              whileHover="hover"
              className="projects"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={ML_intradingfinance}
              >
                <div className="project-images" id="ML_intradingfinance"></div>
              </a>

              <div className="project-links">
                <div className="text">
                  <h3>Using Machine Learning in Trading and Finance</h3>
                </div>
                <div className="icons">
                  <a
                    rel="noopener noreferrer"
                    href={
                      "https://www.coursera.org/account/accomplishments/certificate/JYLYCDE3B8UD"
                    }
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

            {/* Certification 9 - tour_ML_finance */}
            <motion.div
              variants={boxVariants}
              whileHover="hover"
              className="projects"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={tour_ML_finance}
              >
                <div className="project-images" id="tour_ML_finance"></div>
              </a>

              <div className="project-links">
                <div className="text">
                  <h3>Guided Tour of Machine Learning in Finance</h3>
                </div>
                <div className="icons">
                  <a
                    rel="noopener noreferrer"
                    href={
                      "https://www.coursera.org/account/accomplishments/certificate/GJQBNERTZFYJ"
                    }
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

            {/* Certification 10 - structure_ML_projects */}
            <motion.div
              variants={boxVariants}
              whileHover="hover"
              className="projects"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={structure_ML_projects}
              >
                <div
                  className="project-images"
                  id="structure_ML_projects"
                ></div>
              </a>

              <div className="project-links">
                <div className="text">
                  <h3>Structuring Machine Learning Projects</h3>
                </div>
                <div className="icons">
                  <a
                    rel="noopener noreferrer"
                    href={
                      "https://www.coursera.org/account/accomplishments/certificate/FCTCW56YGD88"
                    }
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

            {/* Certification 11 - seq_time_prediction */}
            <motion.div
              variants={boxVariants}
              whileHover="hover"
              className="projects"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={seq_time_prediction}
              >
                <div className="project-images" id="seq_time_prediction"></div>
              </a>

              <div className="project-links">
                <div className="text">
                  <h3>Sequences, Time Series and Prediction</h3>
                </div>
                <div className="icons">
                  <a
                    rel="noopener noreferrer"
                    href={
                      "https://www.coursera.org/account/accomplishments/certificate/BHSX4NCB28WW"
                    }
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

            {/* Certification 12 - improving_deaplearning */}
            <motion.div
              variants={boxVariants}
              whileHover="hover"
              className="projects"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={improving_deaplearning}
              >
                <div
                  className="project-images"
                  id="improving_deaplearning"
                ></div>
              </a>

              <div className="project-links">
                <div className="text">
                  <h3>
                    Improving Deep Neural Networks: Hyperparameter Tuning,
                    Regularization and Optimization
                  </h3>
                </div>
                <div className="icons">
                  <a
                    rel="noopener noreferrer"
                    href={
                      "https://www.coursera.org/account/accomplishments/certificate/F8JUBU2APHJ7"
                    }
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

            {/* Certification 13 - sample_based_learningmethods */}
            <motion.div
              variants={boxVariants}
              whileHover="hover"
              className="projects"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={sample_based_learningmethods}
              >
                <div
                  className="project-images"
                  id="sample_based_learningmethods"
                ></div>
              </a>

              <div className="project-links">
                <div className="text">
                  <h3>Sample-based Learning Methods</h3>
                </div>
                <div className="icons">
                  <a
                    rel="noopener noreferrer"
                    href={
                      "https://www.coursera.org/account/accomplishments/certificate/8H9TK6Z4RKH9"
                    }
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

            {/* Certification 14 - neurallanguage_tensorflow */}
            <motion.div
              variants={boxVariants}
              whileHover="hover"
              className="projects"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={neurallanguage_tensorflow}
              >
                <div
                  className="project-images"
                  id="neurallanguage_tensorflow"
                ></div>
              </a>

              <div className="project-links">
                <div className="text">
                  <h3>Natural Language Processing in TensorFlow</h3>
                </div>
                <div className="icons">
                  <a
                    rel="noopener noreferrer"
                    href={
                      "https://www.coursera.org/account/accomplishments/certificate/BRCUSZRPS342"
                    }
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

            {/* Certification 15 -neural_network_deeplearning  */}
            <motion.div
              variants={boxVariants}
              whileHover="hover"
              className="projects"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={neural_network_deeplearning}
              >
                <div
                  className="project-images"
                  id="neural_network_deeplearning"
                ></div>
              </a>

              <div className="project-links">
                <div className="text">
                  <h3>Neural Networks and Deep Learning</h3>
                </div>
                <div className="icons">
                  <a
                    rel="noopener noreferrer"
                    href={
                      "https://www.coursera.org/account/accomplishments/certificate/VXLNCDMDEUB2"
                    }
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
      </div>    </>
        ) : (
          ""
        )}
    </section>
  );
};

export default Achievements;
