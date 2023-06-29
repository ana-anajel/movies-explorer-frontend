import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../PageNotFound/PageNotFound.css';
import '../Animation/Animation.css';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="error">
      <div className='error__content'>
        <h1 className="error__title">404</h1>
        <p className="error__subtitle">Страница по указанному маршруту не найдена.</p>
        {/* <h1 className="error__title">500</h1>
        <p className="error__subtitle">На сервере произошла ошибка.</p> */}
        <button className='error__link animation__link' onClick={() => navigate(-1)} >Назад</button>
      </div>
    </main>
  );
}

export default PageNotFound;