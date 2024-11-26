import React from 'react'
import Nav from './components/homePageComponents/Nav'
import Home from './Pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import WeekendSpecial from './components/homePageComponents/WeekendSpecial'
import MenuList from './components/menuComponent/MenuList'
import BurgerObject from '../public/burgerList/burgerListObject'
import burger from '../public/categories/image/burger.jpg'
import pizza from '../public/categories/image/pizza.jpg'
import sandwich from '../public/categories/image/sandwich.jpg'
import wrap from '../public/categories/image/wrap.jpg'
import momos from '../public/categories/image/momos.jpg'
import momosObject from '../public/burgerList/momos'
import ExtraItems from './components/ExtraItems'
import rice from './components/menuComponent/extraItems/rice.jpg'
import RiceObject from '../public/burgerList/rice'


function App() {
  return (
    <div className='main'>
      <h1 style={{textAlign: 'center',padding: '10PX 0 0 0',color: 'tomato'}}>FRIEND'S KITCHEN</h1>
      <Routes>
        <Route path='/friendsKitchen/home' element={<Home/>}></Route>
        <Route path='/friendsKitchen/' element={<Home/>}></Route>
        <Route path='/friendsKitchen/weekend' element={<WeekendSpecial/>}></Route>
        <Route path='/friendsKitchen/burger' element={<MenuList image={burger} list={BurgerObject} name={'Burger'}/>}></Route>
        <Route path='/friendsKitchen/pizza' element={<MenuList image={pizza} list={BurgerObject} name={'Pizza'}/>}></Route>
        <Route path='/friendsKitchen/sandwich' element={<MenuList image={sandwich} list={BurgerObject} name={'3 Layer Sandwich'}/>}></Route>
        <Route path='/friendsKitchen/wrap' element={<MenuList image={wrap} list={BurgerObject} name={'Wrap'}/>}></Route>
        <Route path='/friendsKitchen/momos' element={<MenuList image={momos} list={momosObject} name={'Momos'}/>}></Route>
        <Route path='/friendsKitchen/rice' element={<MenuList image={rice} list={RiceObject} name={'Fried Rice'}/>}></Route>
      </Routes>
      <ExtraItems/>
      <Nav/>
    </div>
  )
}

export default App
