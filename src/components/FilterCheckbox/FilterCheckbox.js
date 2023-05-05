import React from 'react';
import './FilterCheckbox.css';
import '../Animation/Animation.css';

function FilterCheckbox({ filter }) {
  // activ класс для +- переключателя
  return (
    <div className={`filter ${filter}`}>
      <div className='filter__checkbox animation'>
        <span className='filter__checkbox-switch' />
        <label><input type='checkbox' checked name='filter'></input></label>
      </div>
      <p className='filter__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;