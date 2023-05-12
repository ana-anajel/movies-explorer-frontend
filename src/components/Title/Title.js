import React from 'react';
import './Title.css';

function Title({ text }) {
  return (
    <div className="title">
      <h2 className="title__text">{text}</h2>
    </div>
  );
}

export default Title;