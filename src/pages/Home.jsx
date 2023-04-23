import Masterbanner from "../components/MasterBanner-component/Masterbanner";
import MostViewCategory from "../components/MostViewCategory/MostViewCategory";
import Popularbrand from "../components/PopularBrand-component/Popularbrand";
import Smallbanner from "../components/Smallbanner-component/Smallbanner";

const Home = () => {
  return (
    <>
      <Masterbanner />
      <MostViewCategory />
      <Popularbrand />
      <Smallbanner />
    </>
  );
};

export default Home;
