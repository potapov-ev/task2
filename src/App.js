import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux'

import Head from './components/pages/Head';
import Navigation from './components/pages/Navigation';
import MainHeader from './components/pages/MainHeader';
import MainGrid from './components/pages/MainGrid';
import Footer from './components/pages/Footer';
import Cart from './components/pages/Cart';

import store from './store';


if (!localStorage.itemsId) {
  localStorage.itemsId = JSON.stringify([]);
}
 

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