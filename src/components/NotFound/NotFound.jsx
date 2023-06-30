import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h2 className="NotFound__error">404</h2>
      <p className="NotFound__text">Страница не найдена</p>
      <Link className="NotFound__link" to="/">
        Назад
      </Link>
    </div>
  );
}
