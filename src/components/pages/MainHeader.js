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
    </div>
  )
}

export default MainHeader;
