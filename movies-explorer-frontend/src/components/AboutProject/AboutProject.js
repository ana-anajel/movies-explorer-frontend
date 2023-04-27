import React from 'react';
import './AboutProject.css';
import Title from '../Title/Title';


function AboutProject() {
  return (
    <section className="about-project">
      {<Title text={'О проекте'} />}

      <div className='about-project__container'>

        <ul className="about-project__list">
          <li className="about-project__element">
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          </li>
          <li className="about-project__element" >
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
        </ul>

        <ul className="about-project__list">
          <li className="about-project__element">
            <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          </li>
          <li className="about-project__element" >
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>

      </div>

      <div className='about-project__table'>
        <p className='about-project__cell about-project__week'>1 неделя</p>
        <p className='about-project__cell about-project__week'>4 недели</p>
      </div>

      <div className='about-project__table'>
        <p className='about-project__cell'>Back-end</p>
        <p className='about-project__cell'>Front-end</p>
      </div>

    </section>
  );
}

export default AboutProject;