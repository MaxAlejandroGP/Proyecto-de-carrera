import React from "react";
import '../App.css';
import Documentacion1 from "../Assets/SW_Documentacion1.png";
import {MultiCard,MultiCardNoButton} from "./MultiCard";

const Documentacion = () => {
  return (
    <div className="multi-services-section-container">
      <div className="multi-services-container-tittle">
        <h1 className="multi-services-primary-heading">
          Consulta artículos de los problemas de sueño en jóvenes universitarios
        </h1>
        <p className="multi-services-text">
        A continuación se ofrecen los documentos más actualizados de artículos que discuten las causas y proponen soluciones a los problemas de sueño en jóvenes universitarios
        </p>
      </div>
      <MultiCard
      title="Prevalencia de los transtornos del sueño en jóvenes universitarios"
      image={Documentacion1}
      body=""
      linkTo={"https://actualidadmedica.es/articulo/795_or01/"}
      />
      <MultiCard
      title="The Global Problem of Insufficient Sleep and Its Serious Public Health: nhlbi institute"
      image={Documentacion1}
      body=""
      linkTo={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6473877/"}
      />
      <MultiCard
      title="¿Qué es la privación y la deficiencia de sueño?: nhlbi institute"
      image={Documentacion1}
      body=""
      linkTo={"https://www.nhlbi.nih.gov/es/health/sleep-deprivation"}
      />
      <MultiCard
      title="Stages of Sleep: What happens in a sleep cycle: Sleepfoundation"
      image={Documentacion1}
      body=""
      linkTo={"https://www.sleepfoundation.org/stages-of-sleep"}
      />
      <MultiCard
      title="Los problemas del sueño: MedlinePlus"
      image={Documentacion1}
      body=""
      linkTo={"https://medlineplus.gov/spanish/sleepdisorders.html#:~:text=Los%20problemas%20del%20sue%C3%B1o%20son,quedarse%20dormido%20y%20mantenerse%20despierto."}
      />
    </div>
  );
};

export default Documentacion;