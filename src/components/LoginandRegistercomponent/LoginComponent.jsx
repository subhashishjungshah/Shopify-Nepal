import React from "react";
import Inputfield from "./extraloginandregistercompo/Inputfield";
import "./LoginComponent.css";
const LoginComponent = () => {
  return (
    <div className="logincomponent__container container">
      <p className="login__title text-muted">
        Sign in to enjoy easier and faster checkout
      </p>
      <div className="login__container">
        <Inputfield title={"EMAIL ADDRESS / MOBILE (E.G. 974XXXXXXX)*"} />
        <Inputfield title={"PASSWORD*"} />
        <p className="text-muted">Forgot Password?</p>
        <div className="login__btn__container">
          <button className="button__login">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
