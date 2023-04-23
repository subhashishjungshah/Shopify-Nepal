import React from "react";
import "./MostViewCategory.css";
import Title from "../Title/Title";
import SliderProvider from "../../Provider/SliderProvider";
import CategoryCard from "../Card/CategoryCard/CategoryCard";

//importing images from assets 
import earphone from '../../assets/earphone.webp'
import card from '../../assets/card.webp'
import book from '../../assets/books.webp'
import MobileCase from '../../assets/mobileCase.webp'
import teaCoffee from '../../assets/Tea&Coffee.webp'

const MostViewCategory = () => {
  return (
    <>
      <div className="most_view_container">
        <Title title="Most View Category" />
      </div>
      <SliderProvider>
        <div className="center">
            <CategoryCard title="Headphone" image={earphone} />
        </div>
        <div className="center">
            <CategoryCard title="Card & Plays" image={card} />
        </div>
        <div className="center">
            <CategoryCard title="Books & Store" image={book} />
        </div>
        <div className="center">
            <CategoryCard title="Mobile Case" image={MobileCase} />
        </div>
        <div className="center">
            <CategoryCard title="Tea & Coffee" image={teaCoffee} />
        </div>
      </SliderProvider>
    </>
  );
};

export default MostViewCategory;
