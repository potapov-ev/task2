import React, { useCallback} from "react";
import {connect} from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";


const useStyles = makeStyles({
  "cart-shoppingList-item":{
    marginLeft: "5%",
    marginBottom: "20px",
    width: "95%",
    height: "210px",
    borderBottom: "1px solid lightgray",
  },
  "cart-shoppingList-item__img": {
    width: "18%",
    float: "left",
    "& > img": {
      width: "100%",
      maxHeight: "180px",
    },
  },
  "cart-shoppingList-item-info": {
    marginLeft: "22%",
    width: "77%",
    height: "100%", 
    "& > div": {
      marginTop: "10px",
    },
    "& > div:nth-of-type(1)": {
      marginTop: "20px",
    },
  },
  "cart-shoppingList-item-info__model": {
    display: "inline-block",
    width: "70%",
  },
  "cart-shoppingList-item-info__price": {
    display: "inline-block",
    marginLeft: "8%",
  },
  "cart-shoppingList-item-info-btns": {
    display: "flex",
  },
  "cart-shoppingList-item-info-btns__delete": {
    width: "70%",
    "& > Button":{
      borderRadius: 3,
      color: "black",
      height: 40,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      marginTop: "100px;",
    }
  },
  "cart-shoppingList-item-info-btns__number": {
    display: "flex",
    alignItems: "center",
    marginTop: "100px",
    marginLeft: "58%",
  },
})

function ItemInCart(props) {
  const classes = useStyles();

  /* Через пропсы передается только id товара, вся информация о товаре 
    берется из store, функция ищет индекс товара в store по id */
  function getIndex()  {
    let counter = 0;

    props.items.map( (item, index) => { 
      if (item.id === props.id) {
        counter = index;
      } 
      return item;
    })
    return counter;
  }
  const index = getIndex();
  const item = props.items[index];
  const number = props.numbers[item.id]; // Кол-во данного товара в корзине

  const handleItemRemove = useCallback( () => {
    let coef = 1;
    if (number && number > 1) {
      coef = number;
    }
    
    props.changePrice(parseFloat(- item.price * coef));
    props.changeNumber(1, item.id);
    props.deleteItem(props.id); 
  }, [props, item, number]);

  function handleNumberIncrease() {
    props.changeNumber(number ? number + 1 : 2, item.id);
    props.changePrice(parseFloat(item.price));
  }
  
  function handleNumberDecrease() {
    if (number && number > 1) {
      props.changeNumber(number - 1, item.id);
      props.changePrice(parseFloat(- item.price));
    }
  }

  return (
    <div className={classes["cart-shoppingList-item"]}>
      <div>
        <div className={classes["cart-shoppingList-item__img"]}>
          <img src={item.src} alt="item" />
        </div>
        <div className={classes["cart-shoppingList-item-info"]}> 
          <div>
            <span className={classes["cart-shoppingList-item-info__model"]}>
              {item.model}
            </span>
            <span className={classes["cart-shoppingList-item-info__price"]}>
              {item.price}
            </span>
          </div>
          <div>
            {item.category}
          </div>
          <div className={classes["cart-shoppingList-item-info-btns"]}>
            <div className={classes["cart-shoppingList-item-info-btns__delete"]}>
              <Button onClick={handleItemRemove}>
                <DeleteIcon />
              </Button>
            </div>
            <div className={classes["cart-shoppingList-item-info-btns__number"]}>
              <Button onClick={handleNumberIncrease}>
                <AddIcon />
              </Button>
              <span>
                {number || 1}
              </span>
              <Button onClick={handleNumberDecrease}>
                <RemoveIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

const mapStateToProps = function(state) { 
  return {
    items: state.itemsReducer.fetchItems.items,
    numbers: state.cartReducer.numbers,
  }
}

export default connect(mapStateToProps, 
  dispatch => ({
    deleteItem: (id) => {
      dispatch({ type: "DELETE_ITEM_FROM_CART", value: id });
    },
    changePrice: (price) => {
      dispatch({ type: "CHANGE_PRICE", value: price});
    },
    changeNumber: (number, id) => {
      dispatch({ type: "CHANGE_NUMBER", value: {number, id}});
    }
  })
)(ItemInCart);