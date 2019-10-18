/* eslint-disable jsx-a11y/anchor-is-valid */   // href="#"
import React from "react";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({ 
  "main-header": {
    display: "flex",
    justifycontent: "space-between",
    width: "100%",
    marginbottom: "20px",

    "& .main-header__category": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      marginLeft: "4%",
      height: "80px",
      width: "20%",

      "& a": {
        textDecoration: "none",
        color: "black",

        "&:hover": {
          color: "gray",
        }
      },
      "& p": {
        margin: "0px",
        fontSize: "24px",
      },
    }
  },
})

function MainHeader() {  
  const classes = useStyles();

  return (
    <div className={classes["main-header"]}>
      <div className="main-header__category">
        <a href="#">Мужчины</a>
        <p>Мужская обувь</p>
      </div>
    </div>
  )
}

export default MainHeader;