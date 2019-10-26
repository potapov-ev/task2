/* eslint-disable jsx-a11y/anchor-is-valid */    // href="#"
import React, {useState} from "react";
import {Link} from "react-router-dom"
import {connect} from "react-redux";

import jordanIcon from "./img/icons/air_jordan_icon.svg";
import shopIcon from "./img/icons/shopping_cart_icon.svg";
import searchIcon from "./img/icons/search_icon.svg";
import nikeLogo from "./img/nike_logo.svg";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles( theme => ({
  head: {
    width: "100%",
	
	  fontFamily: "Roboto, sans-serif",
  },
  "header-top": {
    display: "flex",
    height: "40px",

    textAlign: "center",
    
    borderBottom: "1px solid lightgray",
    
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
  "header-top-nikePlus": {
    width: "9%",
    
    borderRight: "1px solid lightgray",
  },
  "header-top-airJordan": {
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
  "header-top-hurley": {
    width: "9%",
    
    borderLeft: "1px solid lightgray",
    borderRight: "1px solid lightgray",
  },
  "header-top-signIn": {
    marginLeft: "40%",

    "&:hover": {
      borderBottom: "2px groove black",
    }
  },
  "header-top-modal": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "header-top-fade": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 200 + "px",
    width: 240 + "px",

    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
  },
  "header-top-fade-signIn": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  "header-top-fade-signIn__input": {
    height: "20px",

    background: "none",
    boxShadow: "0 1px 3px 1px rgba(0, 0, 139, .5)",
    border: "none",
    outline: "none",

    "&:focus":{
      boxShadow: "1px 3px 5px 2px rgba(0, 0, 139, .5)",
    },

  },
  "header-top-fade-signIn__btn": {
    width: "50%",

    boxShadow: "0 3px 5px 2px rgba(0, 0, 139, .5)",
  },
  "header-top-fade-signIn__error": {
    color: "red",
    fontSize: "12px",
  },
  "header-top-help": {
    marginLeft: "2%",

    "&:hover": {
      borderBottom: "2px groove black",
    },
  },
  "header-top-shop": {
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
  "header-top-map": {
    marginLeft: "2%",
  },


  "header-bottom": {
    display: "flex",
		width: "100%",
		height: "80px",
		justifyContent: "space-between",
    alignItems: "center",
    
    borderBottom: "1px solid lightgray",
  },
  "header-bottom-logo": {
    width: "18%",
    height: "80px",
    marginLeft: "1%",
    
    backgroundImage: `url(${nikeLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "80px 60%",
    backgroundPosition: "left",
  },
  "header-bottom-logo__goHome": {
    display: "inline-block",
    height: "80px",
    width: "100%",
  },
  "header-bottom-main": {
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
  "header-bottom-search": {
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
}))

function Head(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false); // Закрыть, открыть всплывающее окно
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState(""); 
  const [isError, setIsError] = useState(false);

  function handleModalWindowOpen() {
    setOpen(true);
  }
  function handleModalWindowClose() {
    setOpen(false);
  }
  function getLogin(event) {
    setLogin(event.target.value);
  }
  function getPassword(event) {
    setPassword(event.target.value);
  }


  function handleFormSubmit(event) {
    event.preventDefault();
    if (login === "admin" && password === "000000gtd") {
      setOpen(false);
      document.location.href = "http://localhost:1337/admin/";
      setIsError(false);
    } else {
      setIsError(true);
    }
  }

  return (
    <header className={classes.head}>
      <div className={classes["header-top"]}>
        <div className={classes["header-top-nikePlus"]}>
          <a href="#">NikePlus</a>
        </div>
        <div className={classes["header-top-airJordan"]}>
          <a href="#">	</a>
        </div>
        <div className={classes["header-top-hurley"]}>
          <a href="#">Hurley</a>
        </div>		
        <div className={classes["header-top-signIn"]}>
          { props.userData.login ? <a>{props.userData.login}</a> :
          <a href="#"  onClick={handleModalWindowOpen}>
            Присоединиться / Войти
          </a>
          }
        </div>
       <Modal
          className={classes["header-top-modal"]}
          open={open}
          onClose={handleModalWindowClose}
          closeAfterTransition
        >
          <Fade in={open} onSubmit={handleFormSubmit}>
            <div className={classes["header-top-fade"]}>
              <form
                className={classes["header-top-fade-signIn"]}
              >
                <input 
                  className={classes["header-top-fade-signIn__input"]}
                  type="text" 
                  placeholder="Введите логин"
                  onChange={getLogin}
                  >
                </input>
                <p>
                  <input 
                    className={classes["header-top-fade-signIn__input"]}
                    type="password" 
                    placeholder="Введите пароль"
                    onChange={getPassword}
                    >
                  </input>
                </p>
                <Button 
                    type="submit"
                    className={classes["header-top-fade-signIn__btn"]}
                  >
                    Sign In
                </Button>
                { isError && <p className={classes["header-top-fade-signIn__error"]}>
                  Неверный логин или пароль
                </p> }
              </form>
            </div>
          </Fade>
        </Modal>
        <div className={classes["header-top-help"]}>
          <a href="#">Помощь</a>
        </div>
        <div className={classes["header-top-shop"]}>
          <Link to="/Cart" href="#"></Link>
        </div>
        <div className={classes["header-top-map"]}>
          <a href="#">Россия</a>
        </div>
      </div>

      <div className={classes["header-bottom"]}>  
        <div className={classes["header-bottom-logo"]}>
          <Link className={classes["header-bottom-logo__goHome"]} to="/" href="#"></Link>
        </div>
        <div className={classes["header-bottom-main"]}>
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

        <div className={classes["header-bottom-search"]}>
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

const mapStateToProps = (state) => {
  return {
    userData: state.fetchUserData.userData,
  }
};

export default connect(mapStateToProps)(Head);