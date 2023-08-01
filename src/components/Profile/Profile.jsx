import {useEffect, useState, useContext} from "react";
import "./Profile.css";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { validateEmail, validateName } from '../../utils/validation';

export default function Profile({ onSignOut, onUpdateUser, apiErrors, isOK }) {
  const { values, handleChange, isValid, setValues, setIsValid } =
    useFormAndValidation();
  const currentUser = useContext(CurrentUserContext);
  const [showSaveBtn, setShowSaveBtn] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  useEffect(() => {
  if (currentUser) {
    setValues(currentUser);
    setIsValid(true);
  }
 
  }, [currentUser, setIsValid, setValues]);

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  };

  useEffect(() => {
    if (isOK) {
      setShowSaveBtn(false);
      setShowSuccessMsg(true);
    }
  }, [isOK, apiErrors]);

  return (
    <div className="profile">
    <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" onSubmit={onSubmit}>
        <div className="profile__items-inputs">
          <label className="profile__input-label" htmlFor="nameInput">
            Имя
          </label>
          <input
            className="profile__item-input"
            id="nameInput"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            type="text"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            disabled={!showSaveBtn}
            required
          />
        </div>
        <span className="profile__input-help inputName-err">
        {validateName(values.name).message}
        </span>
        <div className="profile__items-inputs">
          <label className="profile__input-label" htmlFor="emailInput">
            E-mail
          </label>
          <input
            className="profile__item-input"
            id="emailInput"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            type="email"
            placeholder="Введите почту"
            minLength="2"
            maxLength="40"
            disabled={!showSaveBtn}
            required
          />
        </div>
        <span className="profile__input-help inputEmail-err">
        {validateEmail(values.email).message}
        </span>
        <div className="profile-form__buttons">
          {apiErrors.profile && (
            <span className="profile-form__error-message">
              {apiErrors.profile.errorText}
            </span>
          )}

          {showSuccessMsg && (
            <span className="profile-form__success-message">
              Данные успешно обновлены!
            </span>
          )}

          {showSaveBtn ? (
            <button
              type="submit"
              className="profile-form__button profile-form__button-save"
              disabled={
                !isValid ||
                (values.name === currentUser.name &&
                  values.email === currentUser.email) ||
                validateEmail(values.email).invalid ||
                validateName(values.name).invalid
              }
            >
              Сохранить
            </button>
          ) : (
            <button
              type="button"
              className="profile-form__button profile-form__button-edit"
              onClick={(e) => {
                e.preventDefault();
                setShowSaveBtn(true);
                setShowSuccessMsg(false);
              }}
            >
              Редактировать
            </button>
          )}

          <button
            onClick={onSignOut}
            className="profile-form__button profile-form__button-signout"
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </div>
  );
}
