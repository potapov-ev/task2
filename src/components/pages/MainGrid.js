import React from 'react';
import {connect} from 'react-redux';

import Item from './Item';

import { makeStyles } from '@material-ui/core/styles';

import { itemsFetchData } from "../action"


const useStyles = makeStyles({
  'main-grid': {
    float: 'left',
    width: '75%',
    marginTop: '20px',
    marginLeft: '1%',

    fontFamily: 'Roboto, sans-serif',
  }
})


function MainGrid(props) {
  const classes = useStyles();

  props.fetchData("./data.json"); // в useEffect

  return (
    <div className={classes["main-grid"]}>
      { props.items.map( (item) =>
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

const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
};
const mapDispatchToProps = (dispatch) => ({
  fetchData: (url) => { 
    /* Т е при получении объекта в асинхронной функции нужно использовать
      Redux Thunk middleware и передавать в dispatch эту функцию, а не стандартный action? */
    dispatch(itemsFetchData(url));
  },
  setNumbers: (numbers) => {
    dispatch({ type: "ADD_ITEMS", value: numbers});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainGrid);
