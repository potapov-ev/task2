import React, { useEffect } from "react";
import {connect} from "react-redux";

import Item from "./Item/Item";

import { makeStyles } from "@material-ui/core/styles";

import { fetchProducts } from "../../Redux/actions/actions";


const useStyles = makeStyles({
  "main-grid": {
    float: "left",
    width: "75%",
    marginTop: "20px",
    marginLeft: "1%",
  }
})

const PRODUCTS_URL = "products";
const MainGrid = props => {
  const classes = useStyles();

  useEffect( () => {
    props.fetchProductsFrom(PRODUCTS_URL);
    // useEffect должна запускаться 1 раз
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className={classes["main-grid"]}>
      { props.items.map( (item) =>
        <Item
          src={item.src}
          model={item.model}
          price={item.price}
          category={item.category} 
          id={item.id} 
          key={item.id}>   
        </Item>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  if (state.itemsReducer) {
    return {
      items: state.itemsReducer.items,
    }
  } else {
    return {
      items: []
    }
  }
};

const mapDispatchToProps = dispatch => ({
  fetchProductsFrom: (url) => { 
    dispatch(fetchProducts(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainGrid);