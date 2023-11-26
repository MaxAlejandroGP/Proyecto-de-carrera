import React from "react";
import '../App.css';
import Strategy1 from "../Assets/SW_Strategy1.png";
import Strategy2 from "../Assets/SW_Strategy2.png";
import Strategy3 from "../Assets/SW_Strategy3.png";
import Card from "./Card"

const Strategys = () => {
  return (
    <div className="services-section-container">
      <div className="services-container-tittle">
        <h1 className="services-primary-heading">
          Estrategias y consejos
        </h1>
      </div>
      <Card
      title="Establece rutina de sueño"
      image={Strategy1}
      body="La estabilidad en los horarios de sueño contribuye a mejorar la calidad del sueño y el rendimiento académico."
      linkTo={"https://medlineplus.gov/spanish/ency/patientinstructions/000757.htm"}
      />
      <Card
      title="Práctica relajación"
      image={Strategy2}
      body="Incorpora prácticas de manejo del estrés, como la meditación o el ejercicio, para mejorar la calidad del sueño."
      linkTo={"https://www.unc.edu.ar/vida-estudiantil/estr%C3%A9s-acad%C3%A9mico#:~:text=%C2%BFQu%C3%A9%20es%20el%20estr%C3%A9s%20acad%C3%A9mico,trabajos%20pr%C3%A1cticos%2C%20presentaciones%2C%20etc."}
      />
      <Card
      title="Evita la exposición a luz de pantallas"
      image={Strategy3}
      body="La exposición a pantallas puede provocar dificultad para conciliar el sueño, ya que el destello de la iluminación del teléfono móvil altera la melatonina, que es la hormona que induce la fase REM del sueño."
      linkTo={"https://www.eleconomista.es/status/noticias/10592112/06/20/Por-que-el-uso-excesivo-de-pantallas-afectan-en-nuestro-descanso-y-que-efectos-negativos-tiene.html#:~:text=%22La%20exposici%C3%B3n%20a%20pantallas%20puede,cerebro%20se%20reorganiza%20y%20descansa%22."}
      />
    </div>
  );
};

export default Strategys;