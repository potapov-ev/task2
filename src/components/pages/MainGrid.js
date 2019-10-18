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
  const [items, setItems] = useState([]);

  async function getItems() {
    const response = await fetch("./data.json");
    const data = await response.json();
    setItems(data["products"]);

    props.itemsToStore(data["products"]);

    const numbers = new Array(data["products"].length) /* каждый элемент массива numbers - кол-во 
                                                       определенного  товара в корзине */
    for (let i = 0; i < numbers.length; ++i) {
      numbers[i] = 1; // при добавлении в корзину кол-во = 1
    }

    props.setNumbers(numbers);
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
export default connect(mapStateToProps,
  dispatch => ({
    itemsToStore: (items) => {
      dispatch({ type: "ITEMS", value: items});
    },
    setNumbers: (numbers) => {
      dispatch({ type: "SET_NUMBERS", value: numbers});
    },
  })
)(MainGrid);