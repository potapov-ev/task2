import React from 'react';
import '../styles/MainGrid.css';
import Item from './Item';
import {connect} from 'react-redux';

function MainGrid(props) {

  return (
    <div className="main-grid">
      { props.items.map( (item) =>
        <Item src={item.img}
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