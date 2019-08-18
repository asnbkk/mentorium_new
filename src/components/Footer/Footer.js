import React from 'react'

import './Footer.css';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image from '../Image/Image'

import Logo from '../../assets/mentorium-logo.png'

const footer = props => (
  <div className="footer">
    <p></p>
    <div className="footer__content">
      <div className="footer__content_social">
        
        <div className="footer__content_social__icons">
          Следи за новостями
          <ul>
            <li><a href="*"><FontAwesomeIcon size='lg' icon="bars"/></a></li>
            <li><a href="*"><FontAwesomeIcon size='lg' icon="bars"/></a></li>
            <li><a href="*"><FontAwesomeIcon size='lg' icon="bars"/></a></li>
          </ul>
        </div>
      </div>
      <p></p>
      <div className="footer__content_text">
      Рано или поздно каждый школьник сталкивается с проблемой выбора будущей специальности и места обучения.
       Задача «Mentorium» - оказать помощь в принятии верных решений. Дорогой друг, благодарим за то, что выбрал нас.
      </div>
      <div className="footer__content_nav">
        <ul>
          <li><a href="*">Профессии</a></li>
          <li><a href="*">Вузы</a></li>
          <li><a href="*">Тесты</a></li>
        </ul>
      </div>
      <div className="footer__content_info">
      <ul>
          <li><a href="*">О нас</a></li>
          <li><a href="*">Учебным заведениям</a></li>
          <li><a href="*">Размещение рекламы</a></li>
          <li><a href="*">Правовая информация</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default footer;