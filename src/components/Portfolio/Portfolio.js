import React from 'react';
import { Link } from 'react-router-dom';
import Pointer from '../../images/pointer.svg';
import './Portfolio.css';
import '../Animation/Animation.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className='portfolio__title'>Портфолио</h2>

      <ul className='portfolio__list'>

        <li className='portfolio__element animation'>
          <Link to='https://github.com' target="_blank" className='portfolio__link'>Статичный сайт</Link>
          <Link to='https://github.com' target="_blank" > <img className='portfolio__icon' alt='Изображение указателя для перехода по ссылке.' src={Pointer} /></Link>
        </li >

        <li className='portfolio__element animation'>
          <Link to='https://github.com' target="_blank" className='portfolio__link'>Адаптивный сайт</Link>
          <Link to='https://github.com' target="_blank"><img className='portfolio__icon' alt='Изображение указателя для перехода по ссылке.' src={Pointer} /></Link>
        </li>

        <li className='portfolio__element animation'>
          <Link to='https://github.com' target="_blank" className='portfolio__link'>Одностраничное приложение</Link>
          <Link to='https://github.com' target="_blank"><img className='portfolio__icon' alt='Изображение указателя для перехода по ссылке.' src={Pointer} /></Link>
        </li>

      </ul >

    </section >
  );
}

export default Portfolio;