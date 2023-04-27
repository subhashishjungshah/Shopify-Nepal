import React from "react";
import { companylogo } from "../../assets";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "./Navbar.css";
import Searchbar from "../Resuablecomponents/Searchbar";
import { Link } from "react-router-dom";
const Navbar = () => { 
  return ( 
    <div className="navbar__container">
      <Link to="/">
        <img src={companylogo} alt="image" className="image__logo" />
      </Link>
      <Searchbar />
      <div className="right__side__container">
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle
            style={{
              backgroundColor: "#407ED2",
              color: "#407ED2",
              border: "none",
              outline: "none",
            }}
          >
            <PersonIcon
              sx={{ fontSize: 30 }}
              style={{ cursor: "pointer", color: "white" }}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown__menu__container">
            <Dropdown.Item disabled className="dropdown__title">
              WELCOME!
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="dropdown__items__one">
              <Link to="/loginorregister">
                <button className="signIn__btn">Sign In</button>
              </Link>
              <Link to="/loginorregister">
                <button className="register__btn">Register</button>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle
            style={{
              backgroundColor: "#407ED2",
              color: "#407ED2",
              border: "none",
              outline: "none",
            }}
          >
            <FavoriteIcon
              sx={{ fontSize: 30 }}
              style={{ cursor: "pointer", color: "white" }}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle
            style={{
              backgroundColor: "#407ED2",
              color: "#407ED2",
              border: "none",
              outline: "none",
            }}
          >
            <ShoppingBagIcon
              sx={{ fontSize: 30 }}
              style={{ cursor: "pointer", color: "white" }}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown__menu__container">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>

            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
