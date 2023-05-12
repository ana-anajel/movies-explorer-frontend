import React from 'react';
import './Burger.css';
import '../Animation/Animation.css';

function Burger({ handleBurgerClick }) {
  return (
    <div onClick={handleBurgerClick} className='burger animation__button'>
      <span /><span /><span />
    </div>
  );
}

export default Burger;