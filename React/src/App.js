import React from "react";
import {BrowserRouter, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Head from "./components/Head/Head";
import Navigation from "./components/Navigation/Navigation";
import MainHeader from "./components/MainHeader/MainHeader";
import MainGrid from "./components/MainGrid/MainGrid";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";


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

function App(props) {      
  const classes = useStyles();

  return (
    <div className={classes}>
      <BrowserRouter>
        <Head />
        <Route exact path="/" component={MainHeader}/>
        <Route exact path="/" component={Navigation}/>
        <Route exact path="/" component={MainGrid}/>
        <Route exact path="/Cart" component={Cart}/>
      </BrowserRouter>
      <Footer />
    </div>
  );
}


export default (App); 