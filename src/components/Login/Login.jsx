import React from "react";
import './Login';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";

export default function Login() {
    <section className="login-page">
        <Link className="login-page__route" to="/">
        <img className="login-page__logo" src={logo} alt="Логотип" />
        </Link>
        <h2>Рады видеть!</h2>
    </section>
}