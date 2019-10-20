/* eslint-disable jsx-a11y/anchor-is-valid */    // href="#"
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  footer: {
    clear: 'both', // !!!!!
    width: '100%',
    
    fontFamily: 'Roboto, sans-serif', // !!!!!

    backgroundColor: 'rgb(17, 17, 17)',
  },
  'footer-top': {
    display: 'flex',

    '& > div': {
      width: '15%',
      marginLeft: '3%',
      marginTop: '30px',
      marginBottom: '10px',
    },
    '& p': {
      marginTop: '12px',
    },
    '& a': {
      fontSize: '14px',
      textDecoration: 'none',
      color: 'white',
    },
    '& .footer-top__info': {
      display: 'block',
      marginTop: '10px',

      color: 'gray',

      '&:hover': {
        color: 'white',
      },
    },
  },
  'footer-bottom': {
    display: 'flex',
    margin: '0px 3%',
    
    color: 'gray',
    fontSize: '10px',
    
    borderTop: '1px groove gray',

    '& > div': {
      marginTop: '10px',
    },
    '& .footer-bottom__map': {
      color: 'white',
      marginBottom: '10px',
      position: 'relative',
      marginLeft: '14px',
    },
    '& .footer-bottom__description': {
      marginLeft: '20px',
    },
    '& > p:nth-of-type(1)': {
      marginLeft: '40%',
    },
    '& a': {
      textDecoration: 'none',
      color: 'gray',

      '&:hover': {
        color: 'white',
      },
    },
  },
})

function Footer() {
  const classes = useStyles();

  return(
    <footer className={classes.footer}>
      <div className={classes["footer-top"]}>
        <div>
          <p><a href="#">БЛИЖАЙШИЕ МАГАЗИНЫ</a></p>
          <p><a href="#">ПОДПИСАТЬСЯ НА РАССЫЛКУ</a></p>
          <p><a href="#">ЗАРЕГИСТРИРОВАТЬСЯ</a></p>
          <p><a href="#">ОТЗЫВ О САЙТЕ</a></p>
        </div>
        <div>
          <p><a href="#">ПОМОЩЬ</a></p>
          <a className="footer-top__info" href="#">Статус заказа</a>
          <a className="footer-top__info" href="#">Доставка</a>
          <a className="footer-top__info" href="#">Возврат</a>
          <a className="footer-top__info" href="#">Способы оплаты</a>
          <a className="footer-top__info" href="#">Cвязаться с нами</a>
        </div>
        <div>
          <p><a href="#">О NIKE</a></p>
          <a className="footer-top__info" href="#">Новости</a>
          <a className="footer-top__info" href="#">Карьера</a>
          <a className="footer-top__info" href="#">Инвесторам</a>
        </div>
      </div>
      <div className={classes["footer-bottom"]}>
        <div>
          <p className="footer-bottom__map">Россия</p>
          <p className="footer-bottom__description">Nike, Inc.,2019 Все права защищены.</p>
        </div>
        <p><a href="#">Kаталог</a></p>
        <p><a href="#">Условия использования</a></p>
        <p><a href="#">Условия продажи</a></p>
        <p><a href="#">Политика конфиденциальности</a></p>
      </div>
	  </footer>
  )
}

export default Footer;