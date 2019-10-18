import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import Item from "./Item";

import { makeStyles } from "@material-ui/core/styles";


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
  const [items, setItems] = useState([0]);

  async function getItems() {
    let items_ = null;
    let response = await fetch("./data.json");
    items_ = await response.json();
    alert(items_["products"]);
    alert(items_["products"].length);
    setItems(items_["products"]);
  }

  useEffect( () => {
    getItems();
  }, [])

  return (
    <div className={classes["main-grid"]}>
      { items.map( (item) =>
        <Item 
          src={item.img}
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

const mapStateToProps = function(state) {
  return {
    items: state.items,
  }
}
export default connect(mapStateToProps)(MainGrid);