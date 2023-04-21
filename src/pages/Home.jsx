import React from "react";
import Navbar from "../components/Navbar-component/Navbar";
import SecondaryNavbar from "../components/SecondaryNavbar/SecondaryNavbar";
import Masterbanner from "../components/MasterBanner-component/Masterbanner";
import Popularbrand from "../components/PopularBrand-component/Popularbrand";
import Smallbanner from "../components/Smallbanner-component/Smallbanner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SecondaryNavbar />
      <Masterbanner />
      <Popularbrand />
      <Smallbanner />
    </div>
  );
};

export default Home;
