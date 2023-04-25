import React from "react";
import "./Inputfield.css";
const Inputfield = ({ title }) => {
  return (
    <div className="input__container">
      <p className="input__title">{title}</p>
      <input type="text" className="input__field" />
    </div>
  );
};

export default Inputfield;
