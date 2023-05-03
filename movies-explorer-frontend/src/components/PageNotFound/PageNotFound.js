import React from 'react';
import { Link } from 'react-router-dom';
import '../PageNotFound/PageNotFound.css';
import '../Animation/Animation.css';

function PageNotFound() {
  return (
    <main className="error">
      <div className='error__content'>
        <h1 className="error__title">404</h1>
        <p className="error__subtitle">Страница не найдена</p>
        <Link className='error__link animation' to='/'>Назад</Link>
      </div>
    </main>
  );
}

export default PageNotFound;