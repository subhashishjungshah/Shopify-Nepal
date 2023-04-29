import React from 'react';
import './CategoryCard.css';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({image,title}) => {
  const navigate = useNavigate()

  const navigateHandler = (e) => {
    e.preventDefault();
    navigate('/category')
  }
  return (
    <>
      <div className="categoryCard_container" onClick={(e)=>navigateHandler(e)}>
        <div className="categoryCard_img_container">
          <img src={image} alt="category" />
        </div>
        <p>{title}</p>
      </div> 
    </>
  )
}

export default CategoryCard