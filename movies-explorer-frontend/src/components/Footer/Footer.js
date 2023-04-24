import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className='footer__container'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      </div>

      <div className='footer__info'>
        <p className='footer__year'>© 2023</p>
        <ul className='footer__list'>
          <li className='footer__element'><a href='ya.ru' className='footer__link'>Яндекс.Практикум</a></li>
          <li className='footer__element'><a href='ya.ru' className='footer__link'>Github</a></li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;