import "./CheckoutLeftForm.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
const CheckoutLeftForm = () => {
  return (
    <div className="checkout__left__wrapper">
      <h3 className="checkout__form__header">Shipping & Billing</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="email__address__title">Email address</Form.Label>
        <Form.Control
          type="email"
          className="form__input__filed"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <h4 className="checkout__form__header">New address</h4>
      <div className="address__information">
        <Form.Label className="email__address__title">TITLE</Form.Label>
        <Form.Select className="form__input__filed">
          <option>Title</option>
          <option value="1">Mrs./ Ms</option>
          <option value="2">Mr.</option>
        </Form.Select>
        <Row className="my-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="email__address__title">Email</Form.Label>
            <Form.Control
              type="email"
              className="form__input__filed"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="email__address__title">Password</Form.Label>
            <Form.Control
              type="password"
              className="form__input__filed"
              placeholder="Password"
            />
          </Form.Group>
        </Row>
        <Row className="my-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="email__address__title">CITY</Form.Label>
            <Form.Select className="form__input__filed">
              <option>CITY</option>
              <option value="1">Mrs./ Ms</option>
              <option value="2">Mr.</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="email__address__title">
              AREA/ NEIGHBOURHOOD
            </Form.Label>
            <Form.Select className="form__input__filed">
              <option>Umm Garn</option>
              <option value="1">Mrs./ Ms</option>
              <option value="2">Mr.</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="my-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="email__address__title">
              ZONE NUMBER
            </Form.Label>
            <Form.Control
              type="email"
              className="form__input__filed"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="email__address__title">
              STREET NUMBER
            </Form.Label>
            <Form.Control
              type="password"
              className="form__input__filed"
              placeholder="Password"
            />
          </Form.Group>
        </Row>
        <Row className="my-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="email__address__title">
              BUILDING NUMBER
            </Form.Label>
            <Form.Control
              type="email"
              className="form__input__filed"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="email__address__title">
              APARTMENT / VILLA / FLOOR NUMBER
            </Form.Label>
            <Form.Control
              type="password"
              className="form__input__filed"
              placeholder="Password"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="email__address__title">
            PHONE NUMBER
          </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">+977</InputGroup.Text>
            <Form.Control
              placeholder="Enter your phone number"
              className="form__input__number__field"
              aria-label="Phone number"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form.Group>
      </div>
      <button className="proceed__button">PROCEED</button>
    </div>
  );
};

export default CheckoutLeftForm;
