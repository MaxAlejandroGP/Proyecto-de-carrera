import React from 'react'
import '../App.css';
import navbar_logo from '../Assets/SW_Logo.png'

function Navbar(){

    const scrollToObjetive = () => {

        const scrollY = window.scrollY + 790;
    
        window.scrollTo({
          top: scrollY,
          behavior: 'smooth',
        });
      };

    const scrollToCauses = () => {

        const scrollY = window.scrollY + 1780;
    
        window.scrollTo({
          top: scrollY,
          behavior: 'smooth',
        });
      };

    const scrollToStrategys = () => {

        const scrollY = window.scrollY + 2690;
    
        window.scrollTo({
          top: scrollY,
          behavior: 'smooth',
        });
      };

    const scrollToDocuments = () => {

        const scrollY = window.scrollY + 3700;
    
        window.scrollTo({
          top: scrollY,
          behavior: 'smooth',
        });
      };

    return(
        <>
        <nav>

            <img src={navbar_logo} alt="Logo de mi página" className="navbar-logo" />

            <h1 id="navbar_tittle">Sleep</h1>
            <h1 id="navbar_tittle2">Well.org</h1>

            <div>
                <ul id="navbar">
                <li><a href="index.html">INICIO</a></li>
                <li><a onClick={scrollToObjetive}>OBJETIVO</a></li>
                <li><a onClick={scrollToCauses}>CAUSAS</a></li>
                <li><a onClick={scrollToStrategys}>ESTRATEGIAS</a></li>
                <li><a onClick={scrollToDocuments}>DOCUMENTACIÓN</a></li>
                {/*<li>
                    <b className="navbar-button-container">
                    <button className="navbar-button"> Button </button>
                    </b>
                </li>*/}
                </ul> 
                
            </div>
        </nav>
        </>
    );
}

export default Navbar;