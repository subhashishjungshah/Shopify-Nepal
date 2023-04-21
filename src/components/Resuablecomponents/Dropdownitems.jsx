import React from "react";
import "./css/Dropdownitems.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
const Dropdownitems = () => {
  return (
    <div className="items__dropdowns">
      <Dropdown as={ButtonGroup}>
        <Button
          variant="success"
          style={{
            backgroundColor: "#7DB1E4",
            border: "none",
          }}
        >
          Split Button
        </Button>
        <Dropdown.Toggle
          split
          variant="success"
          id="dropdown-split-basic"
          style={{
            backgroundColor: "#7DB1E4",
            border: "none",
          }}
        />
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Dropdownitems;
