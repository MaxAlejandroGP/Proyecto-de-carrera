import React from "react";
import '../App.css';
import Cause1 from "../Assets/SW_Cause1.png";
import Cause2 from "../Assets/SW_Cause2.png";
import Cause3 from "../Assets/SW_Cause3.png";
import Cause4 from "../Assets/SW_Cause4.png";
import {MultiCard,MultiCardNoButton} from "./MultiCard";

const Causes = () => {
  return (
    <div className="multi-services-section-container">
      <div className="multi-services-container-tittle">
        <h1 className="multi-services-primary-heading">
          ¿Cuales son las causas de la falta de sueño en Jóvenes Universitarios?
          
        </h1>
        <p className="multi-services-text">
        Acorde al artículo "The Global Problem of Insufficient Sleep and Its Serious Public Health", las principales causas de la falta de sueño en jóvenes universitarios son:
        </p>
      </div>
      <MultiCardNoButton
      title="Estrés"
      image={Cause1}
      body="Los desafíos emocionales y psicológicos asociados con la vida universitaria pueden contribuir al estrés y afectar negativamente el sueño."
      />
      <MultiCardNoButton
      title="Horarios irregulares"
      image={Cause2}
      body="Horarios de sueño inconsistentes, como acostarse y despertarse a diferentes horas todos los días, pueden afectar negativamente la calidad y cantidad del sueño."
      />
      <MultiCardNoButton
      title="Cafeína y alcohol"
      image={Cause3}
      body="Consumir cafeína antes de acostarse puede interferir con el sueño, mientras que el alcohol puede afectar la calidad del sueño."
      />
      <MultiCardNoButton
      title="Mala administración"
      image={Cause4}
      body="La carga de trabajo y las demandas académicas pueden llevar a los estudiantes a sacrificar horas de sueño para cumplir con plazos y responsabilidades académicas."
      />
    </div>
  );
};

export default Causes;