import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

export default function Login() {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const onLogin = (val) => {
    console.log(val);
  };

  <div className="login-page">
    <Link className="login-page__route" to="/">
      <img className="login-page__logo" src={logo} alt="Логотип" />
    </Link>
    <h2>Рады видеть!</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onLogin(values);
      }}
      className="form"
    >
      <div className="form__input-field">
        <label className="form__label" htmlFor="user-email-input">
          E-mail
        </label>
        <input
          className="form__input"
          id="user-email-input"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          type="email"
          placeholder="Введите почту"
          minLength="2"
          maxLength="40"
          required
        />
        <span
          className={`form__input-error ${
            isValid ? "" : "form__input-error_active"
          }`}
        >
          {errors.email}
        </span>
      </div>

      <div className="form__input-field">
        <label className="form__label" htmlFor="user-password-input">
          Пароль
        </label>
        <input
          className="form__input"
          id="user-password-input"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          type="password"
          placeholder="Введите пароль"
          minLength="6"
          maxLength="200"
          required
        />
        <span
          className={`form__input-error ${
            isValid ? "" : "form__input-error_active"
          }`}
        >
          {errors.password}
        </span>
      </div>

      <button type="submit" className="form__btn">
        Войти
      </button>

      <div className="login-page__text">
        <span>Ещё не зарегистрированы? </span>
        <Link to="/signup" className="login-page__link">
          Регистрация
        </Link>
      </div>
    </form>
  </div>;
}
