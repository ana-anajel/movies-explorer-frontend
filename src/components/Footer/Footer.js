import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import '../Animation/Animation.css';

function Footer() {
  return (
    <footer className="footer">

      <div className='footer__container'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      </div>

      <div className='footer__info'>
        <p className='footer__year'>© <span>{new Date().getFullYear()}</span></p>
        <ul className='footer__list'>
          <li className='footer__element animation'><Link to='https://practicum.yandex.ru' className='footer__link'>Яндекс.Практикум</Link></li>
          <li className='footer__element animation'><Link to='https://github.com' className='footer__link'>Github</Link></li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;