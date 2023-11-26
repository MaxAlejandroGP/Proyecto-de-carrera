import React from "react";
import bannerImage from "../Assets/SW_Home1.gif"
//import HomeBackground from "../Assets/home_background.png";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-background-image-container">
                {/*<img src={HomeBackground} alt="" />*/}
            </div>
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                    ¿Problemas de sueño en tú etapa universitaria?
                    </h1>
                    <p className="primary-text">
                    Un estudio realizado en 2015 por la facultad de medicina de la universidad de Granada
                    reveló que uno de cada cinco universitarios padece de insomnio, siendo fuertemente relacionado
                    con la dificultad de iniciar el sueño y la somnolencia diurna (el excesivo cansancio durante el día)
                    </p>
                </div>
                <div>
                    <img src={bannerImage} alt="" className="home-image-container"/>
                </div>
            </div>
        </div>
    );
};

export default Home;