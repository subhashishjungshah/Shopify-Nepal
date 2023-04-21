import "./SecondaryNavbar.css";
import Dropdownitems from "../Resuablecomponents/Dropdownitems";
import Searchbar from "../Resuablecomponents/Searchbar";
const SecondaryNavbar = () => {
  return (
    <div className="secondary__navbar__container">
      <div className="dropdown__container">
        <Dropdownitems />
        <Dropdownitems />
        <Dropdownitems />
        <Dropdownitems />
        <Dropdownitems />
      </div>
      <div className="searchbar__second__nav">
        <Searchbar />
      </div>
    </div>
  );
};

export default SecondaryNavbar;
