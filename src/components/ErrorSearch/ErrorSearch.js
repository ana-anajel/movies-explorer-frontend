import React, { useState } from 'react';
import './ErrorSearch.css';

function ErrorSearch({ message }) {
  return (
    <div className="error-search">
      <span className="error-search__message">{message}</span>
    </div>
  )
};

export default ErrorSearch
