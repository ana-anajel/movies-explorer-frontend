import React from 'react';
import './Techs.css';
import Title from '../Title/Title';


function Techs() {
  return (
    <section className="techs">
      {<Title text={'Технологии'} />}

      <div className='techs__container'>
        <h2 className='techs__title'>7 технологий</h2>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>

      <ul className='techs__technologies'>
        <li className='techs__element'><p className='techs__technology'>HTML</p></li>
        <li className='techs__element'><p className='techs__technology'>CSS</p></li>
        <li className='techs__element'><p className='techs__technology'>JS</p></li>
        <li className='techs__element'><p className='techs__technology'>React</p></li>
        <li className='techs__element'><p className='techs__technology'>Git</p></li>
        <li className='techs__element'><p className='techs__technology'>Express.js</p></li>
        <li className='techs__element'><p className='techs__technology'>mongoDB</p></li>
      </ul>

    </section>
  );
}

export default Techs;