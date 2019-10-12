import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import '../styles/ItemInCart.css';

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    borderRadius: 3,
    color: 'black',
    height: 40,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginTop: '100px;',
  }
};


function ItemInCart(props) {
  const { classes } = props;
  const [number, setNumber] = useState(0); // Кол-во данного товара
  
  if(!localStorage['number' + props.id]) {
    localStorage['number' + props.id] = 1;
  }

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
  
  const handleDeteleItem = useCallback( () => {
    let coef = 1;
    if (localStorage['number' + props.id] > 1) {
      coef = localStorage['number' + props.id];
    }
    localStorage.price = parseFloat(localStorage.price) - parseFloat(props.items[index].price) * coef;
    localStorage['number' + props.id] = 1;
    props.deleteItem(props.id); 
  }, [props, index]);

  function handleNumberIncrease() {
    setNumber(number + 1);
    localStorage['number' + props.id] = parseInt(localStorage['number' + props.id]) + 1;
    localStorage.price = parseFloat(localStorage.price) + parseFloat(props.items[index].price);
    props.needRender();
  }

  function handleNumberDecrease() {
    if(localStorage['number' + props.id] > 1) {
      setNumber(number - 1);
      localStorage['number' + props.id] = localStorage['number' + props.id] - 1;
      localStorage.price = parseFloat(localStorage.price) - parseFloat(props.items[index].price);
      props.needRender();
    }
  }

  return (
    <div className="cart-shoppingList-item">
      <div>
        <div className="cart-shoppingList-item__img">
          <img src={props.items[index].img} alt="item" />
        </div>
        <div className="cart-shoppingList-item-info"> 
          <div>
            <span className="cart-shoppingList-item-info__model">
              {props.items[index].model}
            </span>
            <span className="cart-shoppingList-item-info__price">
              {props.items[index].price}
            </span>
          </div>
          <div className="cart-shoppingList-item-info__category">
            {props.items[index].category}
          </div>
          <div className="cart-shoppingList-item-info-btns">
            <div className="cart-shoppingList-item-delete">
              <Button className={classes.root} onClick={handleDeteleItem}>
                <DeleteIcon />
              </Button>
            </div>
            <div className="cart-shoppingList-item-number">
              <Button  onClick={handleNumberIncrease}>
                <AddIcon />
              </Button>
              <span>
                {localStorage['number' + props.id]}
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
    items: state.items
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, 
    dispatch => ({
      deleteItem: (item) => {
        dispatch({ type: 'DELETE_ITEM_FROM_CART', value: item});
      }
    })
  )
)(ItemInCart);