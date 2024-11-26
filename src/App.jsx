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


function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center',padding: '10PX 0 0 0',color: 'tomato'}}>FRIEND'S KITCHEN</h1>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/weekend' element={<WeekendSpecial/>}></Route>
        <Route path='/burger' element={<MenuList image={burger} list={BurgerObject} name={'Burger'}/>}></Route>
        <Route path='/pizza' element={<MenuList image={pizza} list={BurgerObject} name={'Pizza'}/>}></Route>
        <Route path='/sandwich' element={<MenuList image={sandwich} list={BurgerObject} name={'3 Layer Sandwich'}/>}></Route>
        <Route path='/wrap' element={<MenuList image={wrap} list={BurgerObject} name={'Wrap'}/>}></Route>
        <Route path='/momos' element={<MenuList image={momos} list={momosObject} name={'Momos'}/>}></Route>
      </Routes>
      <ExtraItems/>
      <Nav/>
    </div>
  )
}

export default App
