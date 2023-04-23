import FeatureProduct from "../components/FeatureProduct/FeatureProduct";
import HotDeals from "../components/HotDeals/HotDeals";
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
      <FeatureProduct />
      <Smallbanner />
      <HotDeals />
    </>
  );
};

export default Home;
