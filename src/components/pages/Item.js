import React, {useCallback} from "react";
import {connect} from "react-redux";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  item: {
    float: "left",
    margin: "10px",
    marginLeft: "20px",
    width: "240px",
    height: "430px",

    "& .item__img":{
      height: "320px",
  
      "& img": {
        width: "220px",
        maxHeight: "320px",
      },
    },
    "& .item_info": {
      width: "100%",

      "& > div": {
        width: "100%",
      },
      "& > div:nth-of-type(1)": {
        display: "flex",
        alignItems: "start",
      },
    },
    "& .item-info__model": {
      display: "inline-block",
      width: "60%",
      marginRight: "10%",
    },
    "& .item-info-category": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      marginTop: "10px",
      color: "gray",
    },
    "& .item-info-category__btn": {
      backgroundColor: "white",
      borderRadius: 3,
      color: "black",
      height: 40,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",

      "&:hover": {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      },
    },
  },
  
})

function Item(props) {
  const classes = useStyles();

  const addItem = useCallback ( () => {
    if (props.itemsId.indexOf(props.id) !== -1) { /* Если этот элемент уже в корзине,
                                    не нужно добавлять его заново и увеличивать цену  */
      return;
    }

    props.buyItem(props.id);
    props.increaseСost(props.price);
  }, [props])

  return (
    <div className={classes.item}>
      <div className="item__img">
        <img src={props.src} alt=""></img>
      </div>
      <div className="item-info">
        <div>
          <span className="item-info__model">{props.model}</span>
          <span className="item-info__price">{props.price}</span>
        </div>
        <div  className="item-info-category">
          <span>{props.category}</span>
          <Button className="item-info-category__btn" onClick={addItem}>
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
      buyItem: (item) => {
        dispatch({ type: "ITEM_TO_CART", value: item});
      },
      increaseСost: (price) => {
        dispatch({ type: "CHANGE_PRICE", value: price});
      },
    })
  )(Item);