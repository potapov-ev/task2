import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import Head from './components/pages/Head';
import Navigation from './components/pages/Navigation';
import MainHeader from './components/pages/MainHeader';
import MainGrid from './components/pages/MainGrid';
import Footer from './components/pages/Footer';
import Cart from './components/pages/Cart';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import img_1 from './components/img/products/Air Jordan 1 Low.png';
import img_2 from './components/img/products/Air Jordan 1 Mid.png';
import img_3 from './components/img/products/Air_Jordan_12_Retro.png';
import img_4 from './components/img/products/Air_Max_Plus.png';
import img_5 from './components/img/products/Jordan_Mars_270.png';
import img_6 from "./components/img/products/Nike_Air_Force_1_High_'07_LV8_Sport_NBA.png";
import img_7 from './components/img/products/Nike_Air_Force_1_LV8_UL.png';
import img_8 from './components/img/products/Nike_Air_Force_1_MID_By_You.png';
import img_9 from './components/img/products/Nike_P-6000.png';

const items = [ 
  {
    img: img_1,
    model: 'Air Jordan 1 Low',
    price: '8190',
    category: 'Обувь',
    id: 11,
  },
  {
    img: img_2,
    model: 'Air Jordan 1 Mid',
    price: '8190',
    category: 'Мужская обувь',
    id: 12,
  },
  {
    img: img_3,
    model: 'Air Jordan 12 Retro',
    price: '15490',
    category: 'Мужская обувь',
    id: 13,
  },
  {
    img: img_4,
    model: 'Air Max Plus',
    price: '8190',
    category: 'Обувь',
    id: 14,
  },
  {
    img: img_5,
    model: 'Jordan Mars 270',
    price: '12990',
    category: 'Мужская обувь',
    id: 15,
  },
  {
    img: img_6,
    model: "Nike Air Force 1 High",
    price: '8990',
    category: 'Обувь',
    id: 16,
  },
  {
    img: img_7,
    model: 'Nike Air Force 1 LV8 UL',
    price: '8990',
    category: 'Обувь',
    id: 17,
  },
  {
    img: img_8,
    model: 'Nike Air Force 1 MID By You',
    price: '9990',
    category: 'Обувь',
    id: 18,
  },
  {
    img: img_9,
    model: 'Nike P-6000',
    price: '9490',
    category: 'Обувь',
    id: 19,
  }
];

const initialState = {
  items: items,
  itemsId: [], // id товаров в корзине
};

function Reducer(state = initialState, action) {

  // eslint-disable-next-line eqeqeq
  if (action.type == 'ITEMS') {
    return Object.assign({}, state, {items: action.value} );
  }
  // eslint-disable-next-line eqeqeq
  if (action.type == 'GOODS') {
    return Object.assign({}, state, {itemsId: [...state.itemsId, action.value]} );
  }
  // eslint-disable-next-line eqeqeq
  if (action.type == 'deleteGOODS') {
    let index = state.itemsId.indexOf(action.value);
    return Object.assign({}, state, {itemsId: [...state.itemsId.slice(0, index),
       ...state.itemsId.slice(index + 1, state.itemsId.length )]} );
  }
  return state;
}

const store = new createStore(Reducer);  

class App extends React.Component {      
  
  render() {
    return (
      <Provider store={store}> 
        <BrowserRouter>
          <Head />
          <Route exact path="/" component={MainHeader}/>
          <Route exact path="/" component={Navigation}/>
          <Route exact path="/" component={MainGrid}/>
          <Route path="/Cart" component={Cart}/>
          <Footer />
        </BrowserRouter>
      </Provider> 
      );
    }
  }
  export default App;