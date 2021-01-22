import React, { useState } from "react";
import "./../index.css";
import AM from "../images/AM.jpg";
import DEEP from "../images/DEEP.png";
import QF from "../images/QF.png";
import ML from "../images/ML.png";
import NN from "../images/NN.png";
import NLP from "../images/NLP.png";
import synthesis from "../images/synthesis.jpg";
import SEQ from "../images/SEQ.png";

const Services = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      data-aos="zoom-in"
      className="services-container"
      name="services"
      id="services"
    >
      <h1 className="heading">Services I Provide</h1>
      <div className="services-wrapper">
        <div className="services">
          <li>
            <img src={AM} alt="" />
            <p>Applied Mathematics</p>
          </li>
        </div>
        <div className="services">
          <li>
            <img src={ML} alt="" />
            <p>Machine Learning</p>
          </li>
        </div>

        <div className="services">
          <li>
            <img src={SEQ} alt="" />
            <p>Sequenced and Time Series Prediction</p>
          </li>
        </div>


      </div>
      {showMore === false ? (
        <div className="button-wrapper" style={{ width: '14%' }}>
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

      {showMore === true ? (

        <div className="services-wrapper-two" data-aos="zoom-in"
        >
          <div className="services">
            <li>
              <img src={NN} alt="" />
              <p>Neural Networks and Deep Learning</p>
            </li>
          </div>

          <div className="services">
            <li>
              <img src={DEEP} alt="" />
              <p>Deep Reinforcement Learning</p>
            </li>
          </div>

          <div className="services">
            <li>
              <img src={NLP} alt="" />
              <p>Natural Language Processing</p>
            </li>
          </div>
          <div className="services">
            <li>
              <img src={synthesis} alt="" />
              <p>Image, Video, and Audio Synthesis</p>
            </li>
          </div>
          <div className="services">
            <li>
              <img src={QF} alt="" />
              <p>Quantitative Finance</p>
            </li>
          </div>
        </div>
      ) : (
          ""
        )}
    </section>
  );
};

export default Services;
