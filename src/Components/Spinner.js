import React from "react";
import "../styles/spinner.css";

const Spinner = () => (
  <div className="spinnerWrapper">
    <h1 className="title_spinner">Cargando</h1>
    <div className="lds-heart">
      <div></div>
    </div>
  </div>
);

export default Spinner;
