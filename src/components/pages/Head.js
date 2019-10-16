/* eslint-disable jsx-a11y/anchor-is-valid */    // href="#"
import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import jordanIcon from '../img/icons/air_jordan_icon.svg';
import '../styles/Head.css';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  head: {
    width: '100%',
	
	  fontFamily: 'Roboto, sans-serif',
  },
  'header-top': {
    display: 'flex',
    height: '40px',

    textAlign: 'center',
    
    borderBottom: '1px solid lightgray',
    
    '& > div:nth-of-type(1)': {
      width: '9%',
      
			borderRight: '1px solid lightgray',
    },
    '& > div:nth-of-type(2)': {
      width: '6%',
      
 			backgroundImage: `url(${jordanIcon})`,
 	    backgroundSize: '40px 30px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

      opacity: '0.5',

      '&:hover': {
        opacity: 1,
      },
    },
    '& a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '40px',
      
      fontSize: '13px',
		  textDecoration: 'none',
      color: 'gray',
      
      '&:hover': {
        color: 'black',
      },
    },
  },
})

function Head() {
  const classes = useStyles();

  return (
    <header className={classes.head}>
      <div className={classes['header-top']}>
        <div>
          <a href="#">NikePlus</a>
        </div>
        <div>
          <a href="#">	</a>
        </div>
        <div>
          <a href="#">Hurley</a>
        </div>		
        <div>
          <a href="#" /* onClick={handleOpen} */ >
            Присоединиться / Войти
          </a>
        </div>
        <div>
          <a href="#">Помощь</a>
        </div>
        <div className="shop">
          <Link to="/Cart" href="#"></Link>
        </div>
        <div>
          <a href="#">Россия</a>
        </div>
      </div>

      <div className="header-bottom">  
        <div class="logo">
          <Link className="goHome" to="/" href="#"></Link>
        </div>
        <div class="header-bottom-main">
          <div class="men">
            <a href="#">МУЖЧИНЫ</a>
          </div>
          <div class="women">
            <a href="#">ЖЕНЩИНЫ</a>
          </div>
          <div class="children">
            <a href="#">ДЕТИ</a>
          </div>
          <div class="design">
            <a href="#">ТВОЙ ДИЗАЙН</a>
          </div>
          <div class="design">
            <a href="#">КОЛЛЕКЦИИ</a>
          </div>
        </div>

        <div class="search">
          <form>
            <div>
              <input type="text" placeholder="Поиск" />
              <button type="submit"></button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Head;