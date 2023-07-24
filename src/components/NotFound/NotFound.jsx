import React from "react";
import "./NotFound.css";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound({ isLoggedIn }) {
  const navigate = useNavigate();
  const goBack = () => {
    isLoggedIn ? navigate(-2) : navigate(-1);
  };
  return (
    <div className="not-found-page">
      <div className="not-found-page__container">
        <p className="not-found-page__title">404</p>
        <p className="not-found-page__text">Страница не найдена</p>
        <Link className="not-found-page__back-btn" onClick={goBack}>
          Назад
        </Link>
      </div>
    </div>
  );
}
