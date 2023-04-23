import React from "react";
import { companylogo } from "../../assets";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
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
        <PersonIcon sx={{ fontSize: 30 }} style={{ cursor: "pointer" }} />
        <FavoriteIcon sx={{ fontSize: 30 }} style={{ cursor: "pointer" }} />
        <ShoppingBagIcon sx={{ fontSize: 30 }} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Navbar;
