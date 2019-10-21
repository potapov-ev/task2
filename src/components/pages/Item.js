import React, {useCallback} from 'react';
import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";


const useStyles = makeStyles({
  item: {
    float: 'left',
    margin: '10px',
    marginLeft: '20px',
    width: '240px',
    height: '430px',
  },
  "item-img": {
    height: "320px",

    "& > img": {
      width: "220px",
      maxHeight: "320px",
    },
  },
  "item-info": {
    width: "100%",
  },
  "item-info-top": {
    width: "100%",
    display: "flex",
    alignItems: "start",
  },
  "item-info-top__model": {
    display: "inline-block",
    width: "60%",
    marginRight: "10%",
  },
  "item-info-bottom": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",

    color: "gray",
  },
  "item-info-bottom__btn": {
    backgroundColor: 'white',
    borderRadius: 3,
    color: 'black',
    height: 40,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
  },
})

function Item(props) {
  const classes_ = useStyles();

  const addItem = useCallback ( () => {
    if (props.itemsId.length > 1 || props.itemsId.indexOf(props.id) !== -1) { /* Если этот элемент уже в корзине,
                                    не нужно добавлять его заново и увеличивать цену  */
      return;
    }

    props.buyItem(props.id);
    props.increaseСost(props.price);
    /* localStorage.price = parseFloat(localStorage.price) + parseFloat(props.price); */
  }, [props])

  return (
    <div className={classes_.item}>
      <div className={classes_["item-img"]}>
        <img src={props.src} alt=''></img>
      </div>
      <div className={classes_["item-info"]}>
        <div className={classes_["item-info-top"]}>
          <span className={classes_["item-info-top__model"]}>
            {props.model}
          </span>
          <span className={classes_["item-info-top__price"]}>
            {props.price}
          </span>
        </div>
        <div className={classes_["item-info-bottom"]}>
          <span>{props.category}</span>
          <Button className={classes_["item-info-bottom__btn"]} onClick={addItem}>
            <AddIcon />
          </Button>        
        </div>
      </div>
    </div>
  )
}
 
const mapStateToProps = (state) => { 
  return {
    itemsId: state.itemsId,
  }
}

export default connect(mapStateToProps,
  dispatch => ({
    buyItem: (id) => {
      dispatch({type: "ITEM_TO_CART", value: id}); // заменить на const
    },
    increaseСost: (price) => {
      dispatch({ type: 'CHANGE_PRICE', value: price});
    },
  })
)(Item);