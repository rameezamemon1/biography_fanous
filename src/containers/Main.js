import React, { useEffect } from "react";
import "./../index.css";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Specialization from "../components/Specialization";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    <div className="main-container">
      <Nav />
      <Home />
      <AboutMe />
      <Services />
      <Specialization />
      <Achievements />
      <Contact />
    </div>
  );
}

export default Main;
