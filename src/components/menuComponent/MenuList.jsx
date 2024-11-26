import React from 'react'

function MenuList(props) {
  return (
    <div className='menu'>
      <img src={props.image}></img>
      <h1 style={{color:'red'}}>{props.name}</h1>
      <div>
        {props.list.map((item,id) => (
            <h2 key={id}>{item.name} : {item.price}Rs</h2>
        ))}
      </div>
    </div>
  )
}

export default MenuList
