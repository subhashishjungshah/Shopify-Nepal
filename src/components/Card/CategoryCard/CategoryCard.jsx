import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({image,title}) => {
  return (
    <>
      <div className="categoryCard_container">
        <div className="categoryCard_img_container">
          <img src={image} alt="category" />
        </div>
        <p>{title}</p>
      </div> 
    </>
  )
}

export default CategoryCard