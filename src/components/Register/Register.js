import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../SignForm/SignForm.css';
import '../Animation/Animation.css';

function Register() {
  return (
    <div className="sign-form">
      <div className="sign-form__container">
        <Link className='sign-form__link animation__button' to='/'>
          <img className='sign-form__logo' alt="Логотип сайта. Черный круг." src={logo} />
        </Link>
        <h1 className="sign-form__title">Добро пожаловать!</h1>

        <form className='sign-form__form'>
          <ul className='sign-form__label-container'>
            <li>
              <label className="sign-form__label">
                <h3 className='sign-form__name'>Имя</h3>
                <input
                  className='sign-form__input'
                  // value={email || ''}
                  // onChange={handleEmail}
                  id="name"
                  name="name"
                  type="name"
                  minLength="2"
                  novalidate
                  required
                />
                <span className="sign-form__error-message popup__input-error-name"></span>
              </label>
            </li>

            <li>
              <label className="sign-form__label">
                <h3 className='sign-form__name'>E-mail</h3>
                <input
                  className='sign-form__input'
                  // value={email || ''}
                  // onChange={handleEmail}
                  id="email"
                  name="email"
                  type="email"
                  minLength="2"
                  novalidate
                  required
                />
                <span className="sign-form__error-message popup__input-error-name"></span>
              </label>
            </li>

            <li>
              <label className="sign-form__label">
                <h3 className='sign-form__name'>Пароль</h3>
                <input
                  className='sign-form__input sign-form__input-error'
                  // value={email || ''}
                  // onChange={handleEmail}
                  id="password"
                  name="password"
                  type="password"
                  minLength="2"
                  maxLength="30"
                  novalidate
                  required
                />
                <span className="sign-form__error-message popup__input-error-name">Что-то пошло не так...</span>
              </label>
            </li>
          </ul>

          <button
            className="sign-form__button animation__button"
            type="submit"
            aria-label="Кнопка сохранить"
          >Зарегистрироваться</button>
          <h2 className='sign-form__span'>Уже зарегистрированы?
            <Link className='sign-form__link animation__link' to='/signin'> Войти</Link>
          </h2>
        </form>
      </div>
    </div>
  );
}

export default Register;