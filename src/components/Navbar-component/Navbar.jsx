import React from "react";
import { companylogo } from "../../assets";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./Navbar.css";
import Searchbar from "../Resuablecomponents/Searchbar";
const Navbar = () => {
  return (
    <div className="navbar__container">
      <img src={companylogo} alt="image" className="image__logo" />
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
