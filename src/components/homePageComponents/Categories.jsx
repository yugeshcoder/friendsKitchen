import React from 'react'
import categoriesObject from '../../../public/categories/categoriesList'
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className='categories'>
      {categoriesObject.map((item,id) => {
        return(
              <div className='categoriesItem' key={id}><Link to = {item.path}>
                <img src={item.image} alt = {item.name} className='categoriesImage'></img>
                <div className='itemName'>{item.name.toUpperCase()}</div>
                </Link>
              </div>
        )
      })}
    </div>
  )
}

export default Categories
