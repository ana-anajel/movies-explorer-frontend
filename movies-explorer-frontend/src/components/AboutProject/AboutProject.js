import React from 'react';
import './AboutProject.css';
import Title from '../Title/Title';


function AboutProject() {
  return (
    <section className="about">
      {<Title text={'Технологии'} />}

      <div className='about__container'>
        <h2 className='about__title'>7 технологий</h2>
        <p className='about__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>

      <div className='about__technologies'>
        <p className='about__technology'>HTML</p>
        <p className='about__technology'>CSS</p>
        <p className='about__technology'>JS</p>
        <p className='about__technology'>React</p>
        <p className='about__technology'>Git</p>
        <p className='about__technology'>Express.js</p>
        <p className='about__technology'>mongoDB</p>
      </div>

    </section>
  );
}

export default AboutProject;