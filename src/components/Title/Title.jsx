import React from 'react'
import './Title.css'
const Title = ({title}) => {
  return (
    <>
        <div className="title_container">
            <p>{title}</p>
        </div>
    </>
  )
}

export default Title