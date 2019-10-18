import React, {useCallback} from "react";
import {connect} from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"; // !!! заменить
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
});

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
  let index = getIndex();
  
  const handleItemRemove = useCallback( () => {
    let coef = 1;
    if (props.numbers[index] > 1) {
      coef = props.numbers[index];
    }

    props.changePrice(parseFloat(-props.items[index].price * coef));
    props.changeNumber(1, index);

    props.deleteItem(props.id); 
  }, [props, index]);

  function handleNumberIncrease() {
    props.changeNumber(props.numbers[index] + 1, index);
    props.changePrice(parseFloat(props.items[index].price));
  }

  function handleNumberDecrease() {
    if(props.numbers[index] > 1) {
      props.changeNumber(props.numbers[index] - 1, index);
      props.changePrice(parseFloat(-props.items[index].price));
    }
  }

  return (
    <div className={classes["cart-shoppingList-item"]}>
      <div>
        <div className={classes["cart-shoppingList-item__img"]}>
          <img src={props.items[index].img} alt="item" />
        </div>
        <div className={classes["cart-shoppingList-item-info"]}> 
          <div>
            <span className={classes["cart-shoppingList-item-info__model"]}>
              {props.items[index].model}
            </span>
            <span className={classes["cart-shoppingList-item-info__price"]}>
              {props.items[index].price}
            </span>
          </div>
          <div>
            {props.items[index].category}
          </div>
          <div className={classes["cart-shoppingList-item-info-btns"]}>
            <div className={classes["cart-shoppingList-item-info-btns__delete"]}>
              <Button onClick={handleItemRemove}>
                <DeleteIcon />
              </Button>
            </div>
            <div className={classes["cart-shoppingList-item-info-btns__number"]}>
              <Button  onClick={handleNumberIncrease}>
                <AddIcon />
              </Button>
              <span>
                {props.numbers[index]}
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
    items: state.items,
    numbers: state.numbers,
  }
}

export default connect(mapStateToProps, 
  dispatch => ({
    deleteItem: (item) => {
      dispatch({ type: "DELETE_ITEM_FROM_CART", value: item});
    },
    changePrice: (price) => {
      dispatch({ type: "CHANGE_PRICE", value: price});
    },
    changeNumber: (number, index) => {
      dispatch({ type: "CHANGE_NUMBER", value: [number, index] });
    }
  })
)(ItemInCart);