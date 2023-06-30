import React from "react";
import "./AboutMe.css";
import photo from "../../images/photo.jpg";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <hr className="aboutMe__line" />
      <div className="aboutMe__conteiner">
        <div className="aboutMe__caption">
          <h3 className="aboutMe__name">Виталий</h3>
          <p className="aboutMe__about">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutMe__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="aboutMe__link"
            href="https://github.com/bezdenejnyhk"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div className="aboutMe__img">
          <img className="aboutMe__photo" src={photo} alt="Фото студента" />
        </div>
      </div>
    </div>
  );
}
