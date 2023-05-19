import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../SignForm/SignForm.css';
import '../Animation/Animation.css';

function Register({ onCreateUser }) {
  const [errorMessageName, setErrorMessageName] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');

  const [isValid, setIsValid] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleInput(e, setErrorMessage, setValue) {
    setErrorMessage(e.target.validationMessage.split('.')[0])
    setIsValid(e.target.form.checkValidity());
    setValue(e.target.value);
  }

  function handleName(e) {
    handleInput(e, setErrorMessageName, setName);
  }
  function handleEmail(e) {
    handleInput(e, setErrorMessageEmail, setEmail);
  }
  function handlePassword(e) {
    handleInput(e, setErrorMessagePassword, setPassword);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onCreateUser({
      name: name,
      email: email,
      password: password
    });
  }

  return (
    <div className="sign-form">
      <div className="sign-form__container">
        <Link className='sign-form__link animation__button' to='/'>
          <img className='sign-form__logo' alt="Логотип сайта. Черный круг." src={logo} />
        </Link>
        <h1 className="sign-form__title">Добро пожаловать!</h1>

        <form className='sign-form__form' onSubmit={handleFormSubmit} noValidate>
          <ul className='sign-form__label-container'>
            <li>
              <label className="sign-form__label">
                <h3 className='sign-form__name'>Имя</h3>
                <input
                  className='sign-form__input'
                  value={name || ''}
                  onChange={handleName}
                  id="name"
                  name="name"
                  type="text"
                  minLength="2"
                  maxLength='30'
                  pattern='[a-zA-Zа-яА-Я-\s]*'
                  required
                />
                <span className="sign-form__error-message popup__input-error-name">{errorMessageName}</span>
              </label>
            </li>

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
                  pattern='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                  required
                />
                <span className="sign-form__error-message popup__input-error-name">{errorMessageEmail}</span>
              </label>
            </li>

            <li>
              <label className="sign-form__label">
                <h3 className='sign-form__name'>Пароль</h3>
                <input
                  className='sign-form__input'
                  value={password || ''}
                  onChange={handlePassword}
                  id="password"
                  name="password"
                  type="password"
                  minLength="2"
                  maxLength="30"
                  pattern='^[A-Za-z\d!@#$%^&*()_+-={}[]|\:;<>,.?~]{2,}$'
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