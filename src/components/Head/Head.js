/* eslint-disable jsx-a11y/anchor-is-valid */    // href="#"
import React from "react";
import {Link} from "react-router-dom"

import jordanIcon from "./img/icons/air_jordan_icon.svg";
import shopIcon from "./img/icons/shopping_cart_icon.svg";
import searchIcon from "./img/icons/search_icon.svg";
import nikeLogo from "./img/nike_logo.svg";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  head: {
    width: "100%",
	
	  fontFamily: "Roboto, sans-serif",
  },
  "header-top": {
    display: "flex",
    height: "40px",

    textAlign: "center",
    
    borderBottom: "1px solid lightgray",
    
    "& .header-top-nikePlus": {
      width: "9%",
      
			borderRight: "1px solid lightgray",
    },
    "& .header-top-airJordan": {
      width: "6%",
      
 			backgroundImage: `url(${jordanIcon})`,
 	    backgroundSize: "40px 30px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

      opacity: "0.5",

      "&:hover": {
        opacity: 1,
      },
    },
    "& .header-top-hurley": {
      width: "9%",
      
			borderLeft: "1px solid lightgray",
			borderRight: "1px solid lightgray",
    },
    "& .header-top-signIn": {
      marginLeft: "40%",

      "&:hover": {
        borderBottom: "2px groove black",
      }
    },
    "& .header-top-help": {
      marginLeft: "2%",

      "&:hover": {
        borderBottom: "2px groove black",
      },
    },
    "& .header-top-shop": {
      width: "2%",
			marginLeft: "2%",
      padding: "6px 0px",
      
      background: `url(${shopIcon}) no-repeat`,
      backgroundPosition: "center",
      backgroundSize: "100% 16px",

      opacity: 0.5,

      "&:hover": {
        opacity: 1,
				cursor: "pointer",
      },
    },
    "& > .header-top-map": {
      marginLeft: "2%",
    },
    "& a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "40px",
      
      fontSize: "13px",
		  textDecoration: "none",
      color: "gray",
      
      "&:hover": {
        color: "black",
      },
    },
  },
  "header-bottom": {
    display: "flex",
		width: "100%",
		height: "80px",
		justifyContent: "space-between",
    alignItems: "center",
    
    borderBottom: "1px solid lightgray",
    
    "& .header-bottom-logo": {
      width: "18%",
      height: "80px",
      marginLeft: "1%",
      
      backgroundImage: `url(${nikeLogo})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "80px 60%",
      backgroundPosition: "left",
    },
    "& .header-bottom-logo__goHome": {
      display: "inline-block",
      height: "80px",
      width: "100%",
    },
    "& .header-bottom-main": {
      display: "flex",
      justifyContent: "center",
      width: "60%",

      "& > div": {
        height: "80px",
        marginLeft: "2%",

        "&:hover": {
          borderBottom: "2px groove black",
        }
      },
      "& a": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "80px",

        textDecoration: "none",
        fontSize: "18px",
        fontWeight: "600",
        letterSpacing: ".15px",
        color: "black",
      },
    },
    "& .header-bottom-search": {
      width: "18%",
      marginRight: "1%",
  
      border: "1px solid lightgray",
  
      "& div": {
        position: "relative",
        height: "36px",
        width: "100%",
      },
      "& input": {
        display: "inline-block",
        height: "34px",
        marginLeft: "20%",
        width: "80%",

        outline: "none",
        border: "none",
      },
      "& button": {
        position: "absolute",
        height: "26px",
        width: "26px",	
        left: "8px",
        top: "50%",

        cursor: "pointer",

        transform: "translateY(-50%)",
        border: "none",

        background: `url(${searchIcon}) no-repeat`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      },
    },
  },
  
})

function Head() {
  const classes = useStyles();

  return (
    <header className={classes.head}>
      <div className={classes["header-top"]}>
        <div className="header-top-nikePlus">
          <a href="#">NikePlus</a>
        </div>
        <div className="header-top-airJordan">
          <a href="#">	</a>
        </div>
        <div className="header-top-hurley">
          <a href="#">Hurley</a>
        </div>		
        <div className="header-top-signIn">
          <a href="#" /* onClick={handleOpen} */ >
            Присоединиться / Войти
          </a>
        </div>
        <div className="header-top-help">
          <a href="#">Помощь</a>
        </div>
        <div className="header-top-shop">
          <Link to="/Cart" href="#"></Link>
        </div>
        <div className="header-top-map">
          <a href="#">Россия</a>
        </div>
      </div>

      <div className={classes["header-bottom"]}>  
        <div className="header-bottom-logo">
          <Link className="header-bottom-logo__goHome" to="/" href="#"></Link>
        </div>
        <div className="header-bottom-main">
          <div>
            <a href="#">МУЖЧИНЫ</a>
          </div>
          <div>
            <a href="#">ЖЕНЩИНЫ</a>
          </div>
          <div>
            <a href="#">ДЕТИ</a>
          </div>
          <div>
            <a href="#">ТВОЙ ДИЗАЙН</a>
          </div>
          <div>
            <a href="#">КОЛЛЕКЦИИ</a>
          </div>
        </div>

        <div className="header-bottom-search">
          <form>
            <div>
              <input type="text" placeholder="Поиск" />
              <button type="submit"></button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Head;