import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import {Provider} from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import Head from "./components/pages/Head";
import Navigation from "./components/pages/Navigation";
import MainHeader from "./components/pages/MainHeader" ;
import MainGrid from "./components/pages/MainGrid";
import Footer from "./components/pages/Footer";
import Cart from "./components/pages/Cart";

import {store, persistor} from "./store";

import { makeStyles } from "@material-ui/core/styles";

/* Глобальные стили задаются в этом файле, во всех остальных файлах стили для 
  конкретных компонентов, т е в них не обязательно добавлять "@global" на верхний уровень объекта? */
const useStyles = makeStyles({
  "@global": {
    body: {
      margin: "0px",
      padding: "0px",

      fontFamily: "Roboto, sans-serif",
    },
    "*": {
      boxSizing: "border-box",
    }
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