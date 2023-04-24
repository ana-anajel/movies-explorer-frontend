import React from 'react';
import './NavTab.css';
import Title from '../Title/Title';


function NavTab() {
  return (
    <section className="navigation">
      {<Title text={'О проекте'} />}

      <div className='navigation__container'>

        <ul className="navigation__list">
          <li className="navigation__element">
            <h3 className="navigation__subtitle">Дипломный проект включал 5 этапов</h3>
          </li>
          <li className="navigation__element" >
            <p className="navigation__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
        </ul>

        <ul className="navigation__list">
          <li className="navigation__element">
            <h3 className="navigation__subtitle">На выполнение диплома ушло 5 недель</h3>
          </li>
          <li className="navigation__element" >
            <p className="navigation__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>

      </div>

      <div className='navigation__table'>
        <p className='navigation__cell navigation__week'>1 неделя</p>
        <p className='navigation__cell navigation__week'>4 недели</p>
      </div>

      <div className='navigation__table'>
        <p className='navigation__cell'>Back-end</p>
        <p className='navigation__cell'>Front-end</p>
      </div>

    </section>
  );
}

export default NavTab;