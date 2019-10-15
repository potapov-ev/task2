import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Head from './components/pages/Head';
import Navigation from './components/pages/Navigation';
import MainHeader from './components/pages/MainHeader';
import MainGrid from './components/pages/MainGrid';
import Footer from './components/pages/Footer';
import Cart from './components/pages/Cart';

import {store, persistor} from './store';

/* Плохо понял замечания про страницы Footer и Cart, Footer отображается все время,
для перехода на страницу Cart нужно нажать на иконку корзины. Т к страниц 2, не могу 
обойтись без роутера */

function App() {      
  return (
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Head />
          <Route exact path="/" component={MainHeader}/>
          <Route exact path="/" component={Navigation}/>
          <Route exact path="/" component={MainGrid}/>
          <Route path="/Cart" component={Cart}/>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider> 
    );
  }

export default App;