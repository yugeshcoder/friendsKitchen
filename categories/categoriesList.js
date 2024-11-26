import burger from './image/burger.jpg'
import momos from './image/momos.jpg'
import pizza from './image/pizza.jpg'
import sandwich from './image/sandwich.jpg'
import wrap from './image/wrap.jpg'
import rice from './image/rice.jpg'

const categoriesObject = [
  {
  name : 'Burger',
  image : burger,
  path : '/friendsKitchen/burger'
  }
,{
  name : 'Wrap & Fries',
  image : wrap,
  path : '/friendsKitchen/wrap'
 },
 {
  name : 'Pizza',
  image : pizza,
  path : '/friendsKitchen/pizza'
 },
 {
  name : 'sandwich',
  image : sandwich,
  path : '/friendsKitchen/sandwich'
 },
 {
  name : 'Momos & others',
  image : momos,
  path : '/friendsKitchen/momos'
 },
 {
  name : 'Fried Rice',
  image : rice,
  path : '/friendsKitchen/rice'
 }
];

 export default categoriesObject;