import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Search from '../../images/search.svg'
import SearchButton from '../../images/searchButton.svg'
import '../Animation/Animation.css';

function SearchForm({ dataSearch, loading, dataSearchType, checkedType, typeSearch }) {
  const [isValid, setIsValid] = useState(true);
  const [search, setSearch] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  // if (!search) {
  //   setNullInput(true);
  // }

  useEffect(() => {
    if (typeSearch === 'search') {
      const query = localStorage.getItem(dataSearchType);
      const checked = JSON.parse(localStorage.getItem(checkedType));
      console.log(query, checked)

      if (query && checked) {
        setSearch(query);
        setIsChecked(checked);
      }
      dataSearch();
    } else if (typeSearch === 'saveSearch') {
      setSearch('');
      setIsChecked(false);
    }
  }, []);

  function handleCheckbox() {
    setIsChecked(!isChecked);
  }

  function handleSearch(e) {
    setIsValid(e.target.form.checkValidity());
    setSearch(e.target.value);
  }


  function handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem(dataSearchType, search);
    localStorage.setItem(checkedType, JSON.stringify(isChecked));
    dataSearch();
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
          value={search}
          id="search"
          name="search"
          maxLength="30"
          pattern='[a-zA-Zа-яА-Я0-9-\s]*'
          noValidate
        />
        <button
          disabled={!isValid || loading}
          type='submit'
          className={`search__button ${!isValid || loading ? 'search__button_disabled' : 'animation__button'}`}
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