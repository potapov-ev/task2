import React from "react";
import ItemInCart from "./ItemInCart/ItemInCart";
import {connect} from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({ 
  cart: {
    width: "100%",
    display: "flex",
  },
  "cart-shopping-list": {
    width: "60%",
  },
  "cart-shopping-list__title": {
    marginLeft: "8%",
  },
  "cart-formalization": {
    margin: "34px 0px",
    marginLeft: "2%",
    width: "28%",
    height: "400px",

    color: "white",

    backgroundColor: "rgb(17, 17, 17)",

    "& > div": {
      marginTop: "10px",
      marginLeft: "5%",
    },
    "& div:last-of-type": {
      marginTop: "20px",
      marginBottom: "30px",
    },
    "& > button": {
      display: "block",
      width: "86%",
      height: "40px",
      margin: "20px auto",
      borderRadius: "3px",

      color: "white",
      textAlign: "center",
      
      border: "none",
      outline: "none",

      backgroundColor: "rgb(250, 84, 0)",

      "&:hover": {
        cursor: "pointer",

        backgroundColor: "#F4A460",
      },
      "& > span": {
        width: "10px",
      }
    },
    "& > button:last-of-type": {
      backgroundColor: "white",

      "&:hover": {
        backgroundColor: "white",
      },
    },
  },
  "cart-formalization__info": {
    display: "inline-block",
    width: "74%",
    marginTop: "10px",
  },
  
});  

function Cart(props) {
  const classes = useStyles();

  return (
    <div className={classes.cart}>
      <div className={classes["cart-shopping-list"]}>
        <h3 className={classes["cart-shopping-list__title"]}>КОРЗИНА</h3>
        {
          props.itemsId.map( (id) =>
            <ItemInCart 
              id = {id}
            /> 
          )
        }
      </div>
        <div className={classes["cart-formalization"]}>
          <div>
            СВЕДЕНИЯ
          </div>
          <div>
            <span className={classes["cart-formalization__info"]}>
              Промежуточный итог
            </span>
            <span>
              {props.temporaryPrice || 0}
            </span>
          </div>
          <div>
            <span className={classes["cart-formalization__info"]}>
              Предполагаемая стоимость доставки и обработки
            </span>
            <span>350</span>
          </div>
          <div>
            <span className={classes["cart-formalization__info"]}>
              ВСЕГО
            </span>
            <span>
              {props.temporaryPrice ? parseFloat(props.temporaryPrice) + 350 : 350}
            </span>
          </div>
          <button>
            ОФОРМИТЬ ЗАКАЗ БЕЗ РЕГИСТРАЦИИ
          </button>
          <button>
            ОФОРМИТЬ ЗАКАЗ 
          </button>
          <button className>
            <img width="51" height="14" 
              src="https://www.nike.com/assets/experience/pet/payment-icons/paypal@2x.png"
              alt="PayPal"
            />
          </button>
        </div>
    </div>
  )
}
const mapStateToProps = function(state) { 
  return {
    itemsId: state.itemsId,
    temporaryPrice: state.price,
  }
}
export default connect(mapStateToProps)(Cart);