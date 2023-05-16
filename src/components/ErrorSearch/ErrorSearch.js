import React, { useState } from 'react';
import './ErrorSearch.css';

function ErrorSearch() {

  const [message, setMessage] = useState('');
  const errorMessage = 'Ничего не найдено.';
  return (
    <div className="error-search">
      <span className="error-search__message">{message}</span>
    </div>
  )
};

export default ErrorSearch
