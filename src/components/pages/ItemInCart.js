import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import '../styles/ItemInCart.css';

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from '@material-ui/core/styles';

import img from '../img/products/Air Jordan 1 Mid.png'

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
  
  const handleDeteleGoods = useCallback( () => {
    props.deleteItem(props.id);
    alert(3);
  }, [props])

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
          <Button className={classes.root} onClick={handleDeteleGoods}>
            <DeleteIcon />
          </Button>
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