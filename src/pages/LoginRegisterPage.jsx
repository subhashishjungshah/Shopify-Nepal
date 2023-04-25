import React, { useState } from "react";
import LoginComponent from "../components/LoginandRegistercomponent/LoginComponent";
import RegisterComponent from "../components/LoginandRegistercomponent/RegisterComponent";
import "./pagescss/LoginRegisterPage.css";

const LoginRegisterPage = () => {
  const [selected, setSelected] = useState(false);
  const btnClicked = () => {
    setSelected(!selected);
  };
  return (
    <div className="container loginregister__container">
      <div className="loginregister__box">
        <div className="btn__container">
          <button className="btn__one custom__btn" onClick={btnClicked}>
            <span className={selected ? "btn__text__unselected" : "btn__text"}>
              I'm new here
            </span>
            <div
              className={
                selected ? "triangle-down-unselected" : "triangle-down"
              }
            ></div>
          </button>
          <button className="btn__one custom__btn" onClick={btnClicked}>
            <span className={selected ? "btn__text" : "btn__text__unselected"}>
              Been here before
            </span>
            <div
              className={
                selected ? "triangle-down" : "triangle-down-unselected"
              }
            ></div>
          </button>
        </div>
        {selected ? <LoginComponent /> : <RegisterComponent />}
      </div>
    </div>
  );
};

export default LoginRegisterPage;
