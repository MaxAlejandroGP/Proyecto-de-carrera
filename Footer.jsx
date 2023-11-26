import React from "react";
import '../App.css';
import logo1 from "../Assets/follow1.png"
import logo2 from "../Assets/follow2.png"
import logo3 from "../Assets/follow3.png"
const Footer = () => {
  return (
    <footer>
      <div className="footer-section-container">
        <div className="footer-contact-container">
          CONSULTA INFO: +52 664 999 999
        </div>
        <div className="footer-tittle-container">
          "DUERME BIEN CON SLEEPWELL.ORG"
        </div>
        <div className="footer-follow-container">
          SIGUENOS:
          <div className="footer-follow-container-logos">
            <img src={logo1} alt="" className="footer-follow-container-logo1"/>
            <a href="https://www.facebook.com"><img src={logo2} alt="" className="footer-follow-container-logo1"/></a>
            <img src={logo3} alt="" className="footer-follow-container-logo1"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;