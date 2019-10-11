/* eslint-disable jsx-a11y/anchor-is-valid */    // href="#"
import React from 'react';
import '../styles/Footer.css';

function Footer() {

  

  return(
    <footer>
      <div className="footer-top">
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
      <div className="footer-bottom">
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
