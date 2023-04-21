import React from "react";
import "./css/Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
const Searchbar = () => {
  return (
    <div className="searchbar__container">
      <input
        type="text"
        className="search__bar"
        placeholder="What are you looking for?"
      />
      <div className="search__icon">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Searchbar;
