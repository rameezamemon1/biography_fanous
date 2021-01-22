import React from "react";
import "./../index.css";

const Contact = () => {
  return (
    <section
      data-aos="zoom-in"
      className="contact-container"
      name="contact"
      id="contact"
    >
      <div className="profile-image">

      </div>
      <h1 className="heading">Contact</h1>

      <div className="cards-container">
        {/* Card 1 - Email */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span>Reach me here</span>
          </div>
          <div className="contact-links">
            <span>Gregory@Fanous.com</span>
          </div>
        </div>

        {/* Card 2 - Social Media */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span>Social Media</span>
          </div>
          <div className="contact-links">
            {/* github */}
            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/"
            >
              <i className="fab fa-github" title="github" id="github"></i>
            </a> */}

            {/* facebook */}
            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/"
            >
              <i className="fab fa-facebook" title="facebook" id="facebook"></i>
            </a> */}

            {/* linkedIn */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/digitizeme/"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
            </a>

            {/* Twitter */}
            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com//"
            >
              <i className="fab fa-twitter" title="twitter" id="twitter"></i>
            </a> */}

            {/* Instagram */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/gregoryfanous/"
            >
              <i
                className="fab fa-instagram"
                title="instagram"
                id="instagram"
              ></i>
            </a>
          </div>
        </div>

        {/* Card 3 - Phone */}
        {/* <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-phone"></i>
          </div>
          <div className="contact-text">
            <span>Phone</span>
          </div>
          <div className="contact-links">
            <span> </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
