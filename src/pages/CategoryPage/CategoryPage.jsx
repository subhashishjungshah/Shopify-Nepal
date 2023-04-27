import React from "react";
import "./CategoryPage.css";
import Title from "../../components/Title/Title";
import SliderProvider from "../../Provider/SliderProvider";
import earphone from "../.././assets/earphone.webp";
import card from "../.././assets/card.webp";
import book from "../.././assets/books.webp";
import MobileCase from "../.././assets/mobileCase.webp";
import teaCoffee from "../.././assets/Tea&Coffee.webp";
import CategoryCard from "../../components/Card/CategoryCard/CategoryCard";
import ProductCard from "../../components/Card/ProductCard/ProductCard";
const CategoryPage = () => {
  return (
    <>
      <div className="container">
        <Title title="Category" />
        <div className="category_page_container">
          <div className="category_description">
            <p>
              Discover the latest Apple Products in Qatar. Whether you’re
              looking for the newest iPhone, Apple Watch, Mac book, AirPods, or
              Apple TV, you will certainly find it here in our latest models.
              Shop the latest iPhone 14 range and enjoy 5G connectivity and
              blazing fast speed.
            </p>
          </div> 
          <div className="category_btn">
            <button>VIEW ALL CATEGORY</button>
          </div>
          <div className="category_image_container">
            <img
              src="https://www.virginmegastore.qa/medias/Full-Width-Large-Eveons-Escooters-Mobile.jpg?context=bWFzdGVyfHJvb3R8MTMxMzc2fGltYWdlL2pwZWd8aGY5L2g4Mi85OTg0ODM0NjY2NTI2L0Z1bGwtV2lkdGgtTGFyZ2UtRXZlb25zLUVzY29vdGVycy1Nb2JpbGUuanBnfGE5MTM0MjEwYzNmODUwMGY5ZjI1NzFmYTlmNDFlZmY2MTlhMDhjNmYwZmNiNWZhY2M5OTA5ZjY5OWJhMTBiNDY"
              alt=""
              className="category_image_single"
            />
            <img
              src="https://www.virginmegastore.qa/medias/Full-Width-Large-Eveons-Escooters-Desktop.jpg?context=bWFzdGVyfHJvb3R8MjYzNjMxfGltYWdlL2pwZWd8aDRhL2g4Mi85OTg0ODM0NjAwOTkwL0Z1bGwtV2lkdGgtTGFyZ2UtRXZlb25zLUVzY29vdGVycy1EZXNrdG9wLmpwZ3w2MmQ4Y2Y3YTZmMmU0NTE5ZDk3ZjRmNjI1YjUwMGZlODg0MzMzOWRkOWRlZWQzYTVkYTdlOTk5NDg4NGM5Zjk2"
              alt=""
              className="category_image_banner"
            />
            <button>SHOP NOW</button>
          </div>
          <Title title="SHOP BY CATEGORY" />
          <div className="category_slider">
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
          </div>
          <Title title="POPULAR BRANDS" />
          <div className="image__container">
            <img
              src="https://www.virginmegastore.qa/medias/Merchant-Ambassador-logo.webp?context=bWFzdGVyfHJvb3R8MzI1OHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aGYwL2hhYS8xMDI5OTcyNjUyODU0Mi9NZXJjaGFudC1BbWJhc3NhZG9yLWxvZ28ud2VicHw1Y2QxMWVlNmU3YmFiODBjYThiOWZlZDI4NWMyYjMxODY5NDdjZTM4N2NkMGQwMmZkNjdlYmUxMDM5NGQ5Mjdm"
              alt="images"
            />
            <img
              src="https://www.virginmegastore.qa/medias/Unig-logo.webp?context=bWFzdGVyfHJvb3R8MTY1OHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDMxL2hhNy8xMDI5OTcyNjY1OTYxNC9VbmlnLWxvZ28ud2VicHw5NWFkYmM0NTZlMTNlYjc4OTQ4ZTFkNDE3YTNmZjQyMTQ0ZDU0OWFjNDc2NWUxNDk4MjAxMjA4NTk2MzczZThl"
              alt="images"
            />
            <img
              src="https://www.virginmegastore.qa/medias/Woodwick-logo.webp?context=bWFzdGVyfHJvb3R8MzkzNHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDYwL2hhMC8xMDI5OTcyNjg1NjIyMi9Xb29kd2ljay1sb2dvLndlYnB8NzJlMzg5ODEzMjU4MjBkZjhjNzc3N2NlNjczZWQ2MGY3NTM5NzdhZTcyMTYyYmI3OGJiMjAxZTVjMWI0ZTQyYg"
              alt="images"
            />
            <img
              src="https://www.virginmegastore.qa/medias/Sonos-logo.webp?context=bWFzdGVyfHJvb3R8MzIzNHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDlmL2gzNi8xMDI5OTcyODk1MzM3NC9Tb25vcy1sb2dvLndlYnB8MzgxMzhmMGQxMDRiYTlkZGI4N2Y3NTJhM2MxM2IxMjMyZDE1YThhNmQxYWU4NDliZWU3ZTE4OGExMjFjNjY3Yw"
              alt="images"
            />
            <img
              src="https://www.virginmegastore.qa/medias/Zwilling-logo.webp?context=bWFzdGVyfHJvb3R8MzY1MHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDYwL2g1Yy8xMDI5OTczMDM2MjM5OC9ad2lsbGluZy1sb2dvLndlYnB8OGVlNDE1ZGEyMzVjMzAxMWY5Y2NiNjY5YTZmZGRlMGVkZjdiMjkyZDZiNjU5NWI2ZWFjYmNmNTE5ZTRiNjk0ZA"
              alt="images"
            />
            <img
              src="https://www.virginmegastore.qa/medias/GoPro-logo.webp?context=bWFzdGVyfHJvb3R8MjYzNnxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDYzL2g1OS8xMDI5OTczMDQyNzkzNC9Hb1Byby1sb2dvLndlYnB8NTY4ZWVjMGRmZGY5OWMwMWFkOWQ1NGNhN2U5NDMyZjhkNWI1OTFlZWU5NjcyOGRjZjkzYTg0NTg2OTdmZTQ1Mw"
              alt="images"
            />
            <img
              src="https://www.virginmegastore.qa/medias/Dell-logo.webp?context=bWFzdGVyfHJvb3R8NDA2MnxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aGE2L2gwMi8xMDI5OTczMTAxNzc1OC9EZWxsLWxvZ28ud2VicHwzNDg5NWVlM2Q5MGRjZjM3ZGI2N2IwODQwMjgxMzkzMDcyNTE0ZDI1ZmYwMWYxNDdhZWUxNWRkMTVhMTBlYjBk"
              alt="images"
            />
            <img
              src="https://www.virginmegastore.qa/medias/Mountain-logo.webp?context=bWFzdGVyfHJvb3R8Mzk1NHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDI0L2gwYS8xMDI5OTczMTI3OTkwMi9Nb3VudGFpbi1sb2dvLndlYnB8MzBmYWVmYjEwMTY1Y2Y2MGI5N2U3NGQ0NGJhYjBmOWI1NGUxNTAyYTVjZjhjMWQ3NTZlODI1NjNiYjJmYjhiOQ"
              alt="images"
            />
          </div>
          <Title title="NEW ARRIVALS" />
          <div className="category_slider">
            <SliderProvider>
              <div>
                <ProductCard
                  title="Earphone"
                  image={earphone}
                  description="This is earphone that every one must wear."
                />
              </div>
              <div>
                <ProductCard
                  title="Card & Plays"
                  image={card}
                  description="This is Card & Plays that every one must play."
                />
              </div>
              <div>
                <ProductCard
                  title="Books & Store"
                  image={book}
                  description="This is Book that every one must read and only red."
                />
              </div>
              <div>
                <ProductCard
                  title="Mobile Case"
                  image={MobileCase}
                  description="This is mobile case that every one must use."
                />
              </div>
              <div>
                <ProductCard
                  title="Tea & Coffee"
                  image={teaCoffee}
                  description="This is tea & coffee that every one must sip."
                />
              </div>
            </SliderProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
