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

      {/* <ul className='about-project__table'>
        <li className='about-project__week'><p className='about-project__cell about-project__cell_type_first'>1 неделя</p></li>
        <li className='about-project__week'><p className='about-project__cell'>4 недели</p></li>
      </ul>

      <ul className='about-project__table'>
        <li className='about-project__el'><p className='about-project__te'>Back-end</p></li>
        <li className='about-project__el'><p className='about-project__te'>Front-end</p></li>
      </ul> */}

      <ul className='about-project__table'>
        <li className='about-project__table-element about-project__table-box about-project__table-element_color_black'>
          <p className='about-project__text-element'>1 неделя</p>
        </li>

        <li className='about-project__table-element about-project__table-box'>
          <p className='about-project__text-element'>4 неделя</p>
        </li>

        <li className='about-project__table-element'>
          <p className='about-project__text-element about-project__text-technologies'>Back-end</p>
        </li>

        <li className='about-project__table-element'>
          <p className='about-project__text-element about-project__text-technologies'>Front-end</p>
        </li>
      </ul>

    </section>
  );
}

export default AboutProject;