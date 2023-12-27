import React from "react";
import '../App.css';
import './Table.css';
import Navbar from "./Navbar.jsx";
import Table from "./Table.jsx";
import Footer from "./Footer.jsx";

const Links = () => {
  return (
    <div>
      <Navbar />
        <h1 className="links-primary-heading">
        Documentación disponible en PDF
        </h1>
      <Table />
      <Footer />
    </div>
  );
};

export default Links;