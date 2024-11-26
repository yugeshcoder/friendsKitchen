import React from 'react'
import specialList from '../../../public/specialList/specialListObject'

function WeekendSpecial() {
  return (
    <div className='weekendContainer'>
      {specialList.map((item,id) => (
        <div className='weekendList' key={id}>
          <img src={item.image}></img>
          <h2>{item.name}</h2>
          <h3>Price : {item.price}Rs</h3>
        </div>
      ))}
    </div>
  );
}

export default WeekendSpecial
