import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Search from '../../images/search.svg'
import SearchButton from '../../images/searchButton.svg'
import '../Animation/Animation.css';

function SearchForm({ dataSearch }) {
  const [errorMessageSearch, setErrorMessageSearch] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [search, setSearch] = useState('');

  const [isChecked, setIsChecked] = useState(false);

  function handleCheckbox() {
    setIsChecked(!isChecked);
  }

  function handleSearch(e) {
    setErrorMessageSearch(e.target.validationMessage.split('.')[0])
    setIsValid(e.target.form.checkValidity());
    setSearch(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    dataSearch({ search: search, isChecked: isChecked });
  }

  return (
    <form className='search' onSubmit={handleFormSubmit} noValidate>
      <div className='search__form-element'>

        <div className='search__button-icon'>
          <img src={Search} className='search__icon' alt="Иконка поиска. Луппа." />
        </div>

        <input
          className="search__form"
          type="text"
          placeholder="Фильм"
          onChange={handleSearch}
          value={search || ''}
          id="search"
          name="search"
          minLength="1"
          maxLength="30"
          noValidate
          required
        />

        <button
          disabled={!isValid}
          type='submit'
          className={`search__button ${!isValid ? 'search__button_disabled' : ''} animation__button `}
        >
          <img src={SearchButton} className='search__icon' alt="Иконка кнопки поиска. Луппа." />
        </button>

        <FilterCheckbox filter={'filter__max'} isChecked={isChecked} handleCheckbox={handleCheckbox} />

      </div>
      <FilterCheckbox filter={'filter__min'} isChecked={isChecked} handleCheckbox={handleCheckbox} />
    </form>
  );
}

export default SearchForm;