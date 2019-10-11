/* eslint-disable jsx-a11y/anchor-is-valid */    // href="#"
import React from 'react';
import '../styles/MainHeader.css';

function MainHeader(props) {  

  return (
    <div className="main-header">
      <div className="main-header__category">
        <a href="#">Мужчины</a>
        <p>Мужская обувь</p>
      </div>
      <div className="main-header__sort">
        <select> 
          <option selected disabled>Сортировать по</option>
          <option value="descending">Цена: от высокой к низкой</option>
          <option value="аscending">Цена: от низкой к высокой</option>
        </select>
      </div>
    </div>
  )
}

export default MainHeader;

/* const mapStateToProps = function(state) {
  return {
    items: state.items
  }
}
export default connect(mapStateToProps,
  dispatch => ({
    sortItems: (items) => {
      let buff = items;
      for (let i = 0; i < buff.length - 1; ++i) {
        for(let j = i + 1; j < buff.length; ++j) {
          if (buff[i].price > buff[j].price) {
            let temp = buff[i];
            buff[i] = buff[j];
            buff[j] = temp;
          }
        }
      }
      dispatch({ type: 'ITEMS', value: buff});
    }
  })
)(MainHeader); */