import React, {useEffect} from "react";
import {connect} from "react-redux";

import Item from "./Item/Item";

import { makeStyles } from "@material-ui/core/styles";

import { itemsGetData } from "../../Redux/actions/action";
import { object } from "prop-types";


const useStyles = makeStyles({
  "main-grid": {
    float: "left",
    width: "75%",
    marginTop: "20px",
    marginLeft: "1%",
  }
})

function MainGrid(props) {
  const classes = useStyles();

  useEffect( () => {
    props.getData("products");
  })
  
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

const mapStateToProps = (state) => {
  if (state.fetchItems) {
    return {
      items: state.fetchItems.items,
    }
  } else {
    return {
      items: []
    }
  }
};

const mapDispatchToProps = (dispatch) => ({
  getData: (url) => { 
    dispatch(itemsGetData(url));
  },
  setNumbers: (numbers) => {
    dispatch({ type: "ADD_ITEMS", value: numbers});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainGrid);
