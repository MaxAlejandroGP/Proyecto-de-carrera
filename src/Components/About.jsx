import React from "react";
import '../App.css';
//import AboutBackground from "../Assets/about_background.png";
import AboutBackgroundImage from "../Assets/SW_About.png";

const About = () => {

  const scrollToDocuments = () => {

    const scrollY = window.scrollY + 9999;

    window.scrollTo({
      top: scrollY,
      behavior: 'smooth',
    });
  };

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/*<img src={AboutBackground} alt="" />*/}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" height="480px" className="about-image-container"/>
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        Tu salud y productividad es nuestro objetivo
        </h1>
        <p className="primary-text">
        SleepWell.org es un sitio web que ofrece información y documentación citada para entender los problemas de sueño causados en los jóvenes universitarios con el objetivo de implementar estrategias para combatir la falta y calidad del sueño.
        </p>
        <p className="primary-text">
        ¿Por qué tengo problemas de sueño?
        ¿Donde puedo encontrar documentación?
        ¿Qué puedo hacer para mitigarlo?
        </p>
        <div className="about-buttons-container">
          <a onClick={scrollToDocuments}><button className="learn-button">Acceder a documentación</button></a>
        </div>
      </div>
    </div>
  );
};

export default About;