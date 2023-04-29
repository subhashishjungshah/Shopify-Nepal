import React from "react";
import "./css/Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
const Searchbar = () => {
  const navigate = useNavigate();
  const navigateHandler = (e) => {
    e.preventDefault();
    navigate('/product_search')
  }
  return (
    <div className="searchbar__container">
      <input
        type="text" 
        className="search__bar"
        placeholder="What are you looking for?"
      />
      <div className="search__icon" onClick={(e)=>navigateHandler(e)}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Searchbar;
