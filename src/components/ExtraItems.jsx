import React from 'react'
import frenchFries from './menuComponent/extraItems/frenchFries.jpg'
import friedchicken from './menuComponent/extraItems/friedchicken.jpg'
import pasta from './menuComponent/extraItems/pasta.jpg'

function ExtraItems() {
  return (
    <>
      <h2 style={{color:'red'}}>Addition Items :</h2>
      <br/>
      <div className='extraItem'>
        <img src={frenchFries}></img>
        <h2>French Fries : 39Rs</h2>
      </div>
      <div className='extraItem'>
        <img src={friedchicken}></img>
        <h2>Fried Chicken : 49Rs</h2>
      </div>
      <div className='extraItem'>
        <img src={pasta}></img>
        <h2>White sauce pasta : 80Rs</h2>
      </div>
    </>
  )
}

export default ExtraItems
