import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"; // !!! заменить
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';


/* Я имел в виду, что задаю стили тут только для объекта в корзине, часть стилей,
объект получает от родительского элемента, и мне не нужно здесь обращаться к
свойству '@global' */
const useStyles = makeStyles(
  theme => ({
    'cart-shoppingList-item':{
      marginLeft: '5%',
      marginBottom: '20px',
      width: '95%',
      height: '210px',

      borderBottom: '1px solid lightgray',
    },
    'cart-shoppingList-item__img': {
      width: '18%',
      float: 'left',

      '& > img': {
        width: '100%',
        maxHeight: '180px',
      },
    },
    'cart-shoppingList-item-info': {
      marginLeft: '22%',
      width: '77%',
      height: '100%', 

      '& > div': {
        marginTop: '10px',
      },
      '& > div:nth-of-type(1)': {
        marginTop: '20px',
      },
    },
    'cart-shoppingList-item-info__model': {
      display: 'inline-block',
      width: '70%',
    },
    'cart-shoppingList-item-info__price': {
      display: 'inline-block',
      marginLeft: '8%',
    },
    'cart-shoppingList-item-info-btns': {
      display: 'flex',
    },
    'cart-shoppingList-item-info-btns__delete': {
      width: '70%',

      '& > Button':{
        borderRadius: 3,
        color: 'black',
        height: 40,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginTop: '100px;',
      }
    },
    'cart-shoppingList-item-info-btns__number': {
      display: 'flex',
      alignItems: 'center',
      marginTop: '100px',
      marginLeft: '58%',
    },
  })
)


function ItemInCart(props) {
  const [number, setNumber] = useState(0); 
  const classes1 = useStyles();
  
  if(!localStorage['number' + props.id]) { // Кол-во данного товара в корзине
    localStorage['number' + props.id] = 1;
  }

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
  
  const handleDeteleItem = useCallback( () => {
    let coef = 1;
    if (localStorage['number' + props.id] > 1) {
      coef = localStorage['number' + props.id];
    }

    props.changePrice(parseFloat(-props.items[index].price * coef));
    localStorage['number' + props.id] = 1;

    props.deleteItem(props.id); 
  }, [props, index]);

  function handleNumberIncrease() {
    setNumber(number + 1);

    localStorage['number' + props.id] = parseInt(localStorage['number' + props.id]) + 1;
    
    props.changePrice(parseFloat(props.items[index].price));

    props.needRender(); // Вызвать рендер родительского элемента, чтобы отобразилась новая цена
  }

  function handleNumberDecrease() {
    if(localStorage['number' + props.id] > 1) {
      setNumber(number - 1);
      localStorage['number' + props.id] = localStorage['number' + props.id] - 1;
      props.changePrice(parseFloat(-props.items[index].price));
      props.needRender();
    }
  }

  return (
    <div className={classes1['cart-shoppingList-item']}>
      <div>
        <div className={classes1['cart-shoppingList-item__img']}>
          <img src={props.items[index].img} alt="item" />
        </div>
        <div className={classes1['cart-shoppingList-item-info']}> 
          <div>
            <span className={classes1['cart-shoppingList-item-info__model']}>
              {props.items[index].model}
            </span>
            <span className={classes1['cart-shoppingList-item-info__price']}>
              {props.items[index].price}
            </span>
          </div>
          <div>
            {props.items[index].category}
          </div>
          <div className={classes1['cart-shoppingList-item-info-btns']}>
            <div className={classes1['cart-shoppingList-item-info-btns__delete']}>
              <Button onClick={handleDeteleItem}>
                <DeleteIcon />
              </Button>
            </div>
            <div className={classes1['cart-shoppingList-item-info-btns__number']}>
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

export default connect(mapStateToProps, 
  dispatch => ({
    deleteItem: (item) => {
      dispatch({ type: 'DELETE_ITEM_FROM_CART', value: item});
    },
    changePrice: (price) => {
      dispatch({ type: 'CHANGE_PRICE', value: price});
    }
  })
)(ItemInCart);