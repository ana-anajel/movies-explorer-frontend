//import logo from '../../images/logo.svg';
import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
  return (
    <input
      className="SearchForm"
      type="text"
      placeholder="Фильм"
    />
  );
}

export default SearchForm;