//import logo from '../../images/logo.svg';
import React from 'react';
import './SearchForm.css';
import Search from '../../images/guard.png'
import SearchB from '../../images/serch.png'
import Check from '../../images/check.png'

function SearchForm(props) {
  return (
    <div className='search'>

      <div className='search__form-element'>

        <div>
          <img src={Search} className='search__icon-search' alt="Иконка добавить. Флажёк в кругу." />
          <input
            className="search__form"
            type="text"
            placeholder="Фильм" />
        </div>


        <div className='search__box'>

          <img src={SearchB} className='search__icon-add' alt="Иконка добавить. Флажёк в кругу." />

          <div className='search__f'>
            <img src={Check} className='search__icon-add' alt="Иконка добавить. Флажёк в кругу." />
            <p className='search__name'>Короткометражки</p>
          </div>
        </div>

      </div>



    </div>
    // <input
    //   className="SearchForm"
    //   type="text"
    //   placeholder="Фильм"
    // />
  );
}

export default SearchForm;