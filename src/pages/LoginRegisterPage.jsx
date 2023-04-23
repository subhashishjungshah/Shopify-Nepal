import React from "react";
import LoginComponent from "../components/LoginandRegistercomponent/LoginComponent";
import RegisterComponent from "../components/LoginandRegistercomponent/RegisterComponent";
import "./pagescss/LoginRegisterPage.css";
const LoginRegisterPage = () => {
  return (
    <div className="container loginregister__container">
      <LoginComponent />
      {/* <RegisterComponent /> */}
    </div>
  );
};

export default LoginRegisterPage;
