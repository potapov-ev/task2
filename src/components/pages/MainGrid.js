import React from 'react';
import {connect} from 'react-redux';

import Item from './Item';

import { makeStyles } from '@material-ui/core/styles';


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

const mapStateToProps = function(state) {
  return {
    items: state.items,
  }
}
export default connect(mapStateToProps)(MainGrid);