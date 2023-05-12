import React, { useState } from 'react';
import './FilterCheckbox.css';
import '../Animation/Animation.css';

function FilterCheckbox({ filter }) {
  const [isCheckBox, setIsCheckBox] = useState(false);

  function handleCheckBox() {
    setIsCheckBox(!isCheckBox);
  }

  return (
    <div className={`filter ${filter} ${isCheckBox ? 'check-active' : ''}`}>
      <div onClick={handleCheckBox} className='filter__checkbox animation__button'>
        <span className='filter__checkbox-switch' />
        <label><input type='checkbox' name='filter'></input></label>
      </div>
      <p className='filter__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;