import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Search from '../../images/search.svg'
import SearchButton from '../../images/searchButton.svg'
import '../Animation/Animation.css';

function SearchForm() {
  return (
    <form className='search'>
      <div className='search__form-element'>

        <div className='search__button-icon'>
          <img src={Search} className='search__icon' alt="Иконка поиска. Луппа." />
        </div>

        <input
          className="search__form"
          type="text"
          placeholder="Фильм"
        />

        <button className='search__button animation__button'>
          <img src={SearchButton} className='search__icon' alt="Иконка поиска. Луппа." />
        </button>

        <FilterCheckbox filter={'filter__max'} />

      </div>
      <FilterCheckbox filter={'filter__min'} />
    </form>
  );
}

export default SearchForm;