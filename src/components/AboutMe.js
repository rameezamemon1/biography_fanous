import React from "react";
import "./../index.css";

const AboutMe = () => {
  return (
    <section
      data-aos="fade-right"
      className="aboutme-container"
      name="aboutme"
      id="aboutme"
    >
      <h1 className="heading">A bit about me.. &nbsp;&nbsp;</h1>

      <div className="about-me-container">
      {/* <div className="techs"> */}

        As someone who loves mathematics, science, and computers, I consider
        myself a futurist renaissance man.
        <br />
        Math was my favorite subject because I could finish exams knowing I
        scored 100%. <br />
        I have built businesses in my past and am an excellent creator. <br />
        I was taught to learn all parts of a business, and I quickly learn what
        I don't know. <br />
        Since 2011 my passion has been with AI, data science, with a focus on
        financial applications.
      </div>
      {/* </div> */}
    </section>
  );
};

export default AboutMe;
