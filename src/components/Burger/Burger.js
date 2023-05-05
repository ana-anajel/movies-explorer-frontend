import React from 'react';
import './Burger.css';
import '../Animation/Animation.css';

function Burger({ handleBurgerClick }) {
  return (
    <div onClick={handleBurgerClick} className='burger animation'>
      <span /><span /><span />
    </div>
  );
}

export default Burger;