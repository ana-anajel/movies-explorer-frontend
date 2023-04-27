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

      <div className='techs__technologies'>
        <p className='techs__technology'>HTML</p>
        <p className='techs__technology'>CSS</p>
        <p className='techs__technology'>JS</p>
        <p className='techs__technology'>React</p>
        <p className='techs__technology'>Git</p>
        <p className='techs__technology'>Express.js</p>
        <p className='techs__technology'>mongoDB</p>
      </div>

    </section>
  );
}

export default Techs;