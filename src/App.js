import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import {Provider} from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { makeStyles } from "@material-ui/core/styles";

import Head from "./components/Head/Head";
import Navigation from "./components/Navigation/Navigation";
import MainHeader from "./components/MainHeader/MainHeader";
import MainGrid from "./components/MainGrid/MainGrid";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

import {store, persistor} from "./store/store";


/* Я задаю глобальные стили в этом компоненте, во всех других компонентах 
  стили задаются для тех компонентов, где используются. Т е не обязательно, 
  чтобы в других компонентах на верхнем уровне объекта было св-во "@global" ? */
/* Плохо понял, что нужно хранить в папке pages */
const useStyles = makeStyles({
  "@global": {
    body: {
      padding: "0px",
      margin: "0px",

      fontFamily: "Roboto, sans-serif",
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