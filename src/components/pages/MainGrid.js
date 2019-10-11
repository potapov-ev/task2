import React from 'react';
import '../styles/MainGrid.css';
import Item from './Item';
import {connect} from 'react-redux';

function MainGrid(props) {

  return (
    <div className="main-grid">
      { props.items.map( (item, index) =>
        <Item src={item.img}
          model={item.model}
          price={item.price}
          category={item.category} 
          key={index}>   
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
