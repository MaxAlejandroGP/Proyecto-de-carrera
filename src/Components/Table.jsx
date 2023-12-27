import React from 'react';
import "./Table.css";

const data = [
  { id: "Nadia, T. & María, R. & Rocío, O. & Carmen, A.", año: "2015", nombre: 'Prevalencia de los Trastornos del Sueño en Universitarios', enlace: 'https://actualidadmedica.es/wp-content/uploads/795/pdf/or01.pdf' },
  { id: "Chattu, V. & Manzar, D. & Kumary, S.", año: "2018", nombre: 'The Global Problem of Insufficient Sleep and Its Serious Public Health Implications', enlace: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6473877/pdf/healthcare-07-00001.pdf' },
  { id: "Natalie, G. & Taylor L.", año: "2021", nombre: 'The Effects of Sleep Deprivation on College Students', enlace: 'https://scholar.dominican.edu/cgi/viewcontent.cgi?article=1029&context=nursing-senior-theses' },
  { id: "Isabella, E.", año: "2022", nombre: "Sleepless in College Town: Causes and Effects of Poor Sleep in College Students ", enlace: 'https://fisherpub.sjf.edu/cgi/viewcontent.cgi?article=1337&context=ur' },
  { id: "Kana, O. & Jakub, R. & Neha, D. & John, D.", año: "2019", nombre: 'Sleep quality, duration, and consistency are associated with better academic performance in college students', enlace: 'https://gablab.mit.edu/wp-content/uploads/sleep-quality-duration-and-consistency-are-associated-with-better-academic-performance-in-college-students.pdf' },
  { id: "Jane, O.", año: "2023", nombre: 'Sleeping Habits and Sleep Deprivation Among College Students', enlace: 'https://repository.arizona.edu/bitstream/handle/10150/579300/azu_etd_mr_2015_0214_si;jsessionid=52BEBFED8A865701FC7C953CF17C7082?sequence=1' },
  { id: "Hannah K.", año: "2019", nombre: "The Effects of Sleep Deprivation on the Academic Performance of College Students", enlace: 'https://www.ijser.org/researchpaper/The-Effects-of-Sleep-Deprivation-on-the-Academic-Performance-of-College-Students.pdf' },
];

const Table = () => {
  return (
    <div className="tabla-container">
      <table className="tabla">
        <thead>
          <tr>
            <th>AUTOR</th>
            <th>AÑO</th>
            <th>TÍTULO</th>
            <th>ENLACE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((fila) => (
            <tr key={fila.id}>
              <td>{fila.id}</td>
              <td>{fila.año}</td>
              <td>{fila.nombre}</td>
              <td>
                <a href={fila.enlace} target="_blank" rel="noopener noreferrer">
                  Ir al enlace
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
