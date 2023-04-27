import React from 'react';
import Pointer from '../../images/pointerDesktop.png';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className='portfolio__title'>Портфолио</h2>

      <ul className='portfolio__list'>

        <li className='portfolio__element'>
          <a href='ya.ru' className='portfolio__link'>Статичный сайт</a>
          <a href='ya.ru'><img className='portfolio__icon' alt='Изображение указателя для перехода по ссылке.' src={Pointer} /></a>
        </li>

        <li className='portfolio__element'>
          <a href='ya.ru' className='portfolio__link'>Адаптивный сайт</a>
          <a href='ya.ru'><img className='portfolio__icon' alt='Изображение указателя для перехода по ссылке.' src={Pointer} /></a>
        </li>

        <li className='portfolio__element'>
          <a href='ya.ru' className='portfolio__link'>Одностраничное приложение</a>
          <a href='ya.ru'><img className='portfolio__icon' alt='Изображение указателя для перехода по ссылке.' src={Pointer} /></a>
        </li>

      </ul>

    </section>
  );
}

export default Portfolio;