import burger from './image/burger.jpg'
import momos from './image/momos.jpg'
import pizza from './image/pizza.jpg'
import sandwich from './image/sandwich.jpg'
import wrap from './image/wrap.jpg'

const categoriesObject = [
  {
  name : 'Burger',
  image : burger,
  path : '/burger'
  }
,{
  name : 'Wrap & Fries',
  image : wrap,
  path : '/wrap'
 },
 {
  name : 'Pizza',
  image : pizza,
  path : '/pizza'
 },
 {
  name : 'sandwich',
  image : sandwich,
  path : '/sandwich'
 },
 {
  name : 'Momos & others',
  image : momos,
  path : '/momos'
 }
];

 export default categoriesObject;