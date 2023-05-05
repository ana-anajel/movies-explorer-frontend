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

        <li className='portfolio__element'>
          <Link to='https://github.com' className='portfolio__link animation'>Статичный сайт</Link>
          <Link to='https://github.com'><img className='portfolio__icon animation' alt='Изображение указателя для перехода по ссылке.' src={Pointer} /></Link>
        </li>

        <li className='portfolio__element'>
          <Link to='https://github.com' className='portfolio__link animation'>Адаптивный сайт</Link>
          <Link to='https://github.com'><img className='portfolio__icon animation' alt='Изображение указателя для перехода по ссылке.' src={Pointer} /></Link>
        </li>

        <li className='portfolio__element'>
          <Link to='https://github.com' className='portfolio__link animation'>Одностраничное приложение</Link>
          <Link to='https://github.com'><img className='portfolio__icon animation' alt='Изображение указателя для перехода по ссылке.' src={Pointer} /></Link>
        </li>

      </ul>

    </section>
  );
}

export default Portfolio;