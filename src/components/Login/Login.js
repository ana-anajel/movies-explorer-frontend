import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../SignForm/SignForm.css';
import '../Animation/Animation.css';

function Login({ onLogin }) {
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');

  const [isValid, setIsValid] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleInput(e, setErrorMessage, setValue) {
    setErrorMessage(e.target.validationMessage.split('.')[0])
    setIsValid(e.target.form.checkValidity());
    setValue(e.target.value);
  }

  function handleEmail(e) {
    handleInput(e, setErrorMessageEmail, setEmail);
  }
  function handlePassword(e) {
    handleInput(e, setErrorMessagePassword, setPassword);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onLogin({
      email: email,
      password: password
    });
  }

  return (
    <article className="sign-form">
      <div className="sign-form__container">
        <img className='sign-form__logo' alt="Логотип сайта. Черный круг." src={logo} />
        <h1 className="sign-form__title">Рады видеть!</h1>

        <form className='sign-form__form' onSubmit={handleFormSubmit} noValidate >
          <ul className='sign-form__label-container'>
            <li>
              <label className="sign-form__label">
                <h3 className='sign-form__name'>E-mail</h3>
                <input
                  className='sign-form__input'
                  value={email || ''}
                  onChange={handleEmail}
                  id="email"
                  name="email"
                  type="email"
                  noValidate
                  required
                />
                <span className="sign-form__error-message popup__input-error-name">{errorMessageEmail}</span>
              </label>
            </li>

            <li>
              <label className="sign-form__label">
                <h3 className='sign-form__name'>Пароль</h3>
                <input
                  className='sign-form__input sign-form__input-error'
                  value={password || ''}
                  onChange={handlePassword}
                  id="password"
                  name="password"
                  type="password"
                  minLength="2"
                  maxLength="30"
                  noValidate
                  required
                />
                <span className="sign-form__error-message popup__input-error-name">{errorMessagePassword}</span>
              </label>
            </li>
          </ul>

          <button
            className={`sign-form__button ${!isValid ? 'sign-form__button_disabled' : ''} animation__button`}
            type="submit"
            aria-label="Кнопка сохранить"
            disabled={!isValid}
          >Войти</button>
          <h2 className='sign-form__span'>Ещё не зарегистрированы?
            <Link className='sign-form__link animation__link' to='/signup'> Регистрация</Link></h2>
        </form>
      </div>
    </article>
  );
}

export default Login;