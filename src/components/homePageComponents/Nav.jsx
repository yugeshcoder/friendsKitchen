import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


function Nav() {
  const[homeActive,setHomeActive] = useState("homeActive");
  const[menuActive,setMenuActive] = useState("");

  return (
    <div className='navContainer' >
      <ul className='nav'>
        <div className={`icon ${homeActive}`}><Link to = '/friendsKitchen/home' onClick={() => { setHomeActive('homeActive');setMenuActive("");}}>
          <HomeIcon/> 
          <li>Home</li>
          </Link>
        </div>
      </ul>
    </div>
  )
}

export default Nav
