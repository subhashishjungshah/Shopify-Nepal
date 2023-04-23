import React from "react";
import "./FeatureProduct.css";
import Title from "../Title/Title";
import SliderProvider from "../../Provider/SliderProvider";
import CategoryCard from "../Card/CategoryCard/CategoryCard";

//importing images from assets
import earphone from "../../assets/earphone.webp";
import card from "../../assets/card.webp";
import book from "../../assets/books.webp";
import MobileCase from "../../assets/mobileCase.webp";
import teaCoffee from "../../assets/Tea&Coffee.webp";
import ProductCard from "../Card/ProductCard/ProductCard";

const FeatureProduct = () => {
  return (
    <>
      <div className="most_view_container">
        <Title title="Feature Product" />
      </div>
      <SliderProvider>
        <div>
          <ProductCard title="Earphone" image={earphone} description="This is earphone that every one must wear." />
        </div>
        <div>
          <ProductCard title="Card & Plays" image={card} description="This is Card & Plays that every one must play." />
        </div>
        <div>
          <ProductCard title="Books & Store" image={book} description="This is Book that every one must read and only red." />
        </div>
        <div>
          <ProductCard title="Mobile Case" image={MobileCase} description="This is mobile case that every one must use." />
        </div>
        <div>
          <ProductCard title="Tea & Coffee" image={teaCoffee} description="This is tea & coffee that every one must sip." />
        </div>
      </SliderProvider>
    </>
  );
};

export default FeatureProduct;
