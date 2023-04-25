import React from "react";
import "./RegisterComponent.css";
import Form from "react-bootstrap/Form";
const RegisterComponent = () => {
  return (
    <div className="register__component__container">
      <p className="text-muted register__title">
        Join now and earn loyalty dots
      </p>
      <div className="register__container">
        <div>
          <p className="form__title">TITLE*</p>
          <Form.Select size="lg" className="form__select">
            <option value="Mrs./Ms.">Mrs./Ms.</option>
            <option value="Mr.">Mr.</option>
          </Form.Select>
        </div>
        <div>
          <p className="form__title">EMAIL ADDRESS*</p>
          <Form.Control
            size="lg"
            type="text"
            className="form__select "
            placeholder="Enter your Number"
          />
        </div>
        <div>
          <p className="form__title">FIRST NAME*</p>
          <Form.Control
            size="lg"
            type="text"
            className="form__select "
            placeholder="Enter your Number"
          />
        </div>
        <div>
          <p className="form__title">LAST NAME*</p>
          <Form.Control
            size="lg"
            type="text"
            className="form__select "
            placeholder="Enter your Number"
          />
        </div>
        {/* <p className="form__title">LAST NAME*</p> */}
        <div className="number__container">
          <Form.Select
            size="lg"
            className="form__select "
            style={{ width: "30%" }}
          >
            <option>+977</option>
          </Form.Select>
          <Form.Control
            size="lg"
            type="text"
            className="form__select "
            placeholder="Enter your Number"
          />
        </div>
        <div>
          <p className="form__title">PASSWORD*</p>
          <Form.Control
            size="lg"
            type="text"
            className="form__select "
            placeholder="Enter your Password"
          />
        </div>
        <p className="text-muted password__info">
          Your password must contain at least 8 characters including at least
          one uppercase, one lowercase, one number, and one character
        </p>
        <p className="agreement_desc">
          By creating your account, you agree to our{" "}
          <u className="text-primary">Terms & Conditions</u> &{" "}
          <u className="text-primary">Privacy & Policy</u>
        </p>
        <div className="login__btn__container">
          <button className="button__login">Login</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
