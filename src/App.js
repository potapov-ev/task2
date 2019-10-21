import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { makeStyles } from '@material-ui/core/styles';

import Head from './components/pages/Head';
import Navigation from './components/pages/Navigation';
import MainHeader from './components/pages/MainHeader';
import MainGrid from './components/pages/MainGrid';
import Footer from './components/pages/Footer';
import Cart from './components/pages/Cart';

import {store, persistor} from './store';


/* Я задаю глобальные стили в этом компоненте, во всех других компонентах 
  стили задаются для тех компонентов, где используются. Т е не обязательно, 
  чтобы в других компонентах на верхнем уровне объекта было св-во "@global" ? */
const useStyles = makeStyles({
  "@global": {
    body: {
      padding: "0px",
      margin: "0px",
    },
    "*": {
      boxSizing: "border-box",
    },
  },
})

function App() {      
  const classes = useStyles();

  return (
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}>
        <div className={classes}>
          <BrowserRouter>
            <Head />
            <Route exact path="/" component={MainHeader}/>
            <Route exact path="/" component={Navigation}/>
            <Route exact path="/" component={MainGrid}/>
            <Route path="/Cart" component={Cart}/>
          </BrowserRouter>
          <Footer />
        </div>
      </PersistGate>
    </Provider> 
    );
  }

export default App;