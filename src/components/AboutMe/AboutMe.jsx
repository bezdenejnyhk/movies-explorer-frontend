import React from "react";
import "./AboutMe.css";
import ava from "../../images/ava.jpg";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <hr className="aboutMe__line" />
      <div className="aboutMe__conteiner">
        <div className="aboutMe__caption">
          <h3 className="aboutMe__name">Ксения</h3>
          <p className="aboutMe__about">Фронтенд-разработчик, 25 лет</p>
          <p className="aboutMe__text">
            Я родилась в Республике Бурятия, город Улан-Удэ, живу уже 7 лет в
            Москве, закончила факультет управления МАДИ. У меня есть прекрасный
            кот-мейнкун по кличке Шайтан. Я люблю слушать музыку, а ещё
            увлекаюсь пауэрлифтингом. Недавно начала кодить. С 2020 года
            работала в компании «Синтол». После того, как прошла курс по
            веб-разработке, устроилась на новое место Fullstack-разработчиком в
            компанию «Айти солюшнс».
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
          <img className="aboutMe__photo" src={ava} alt="Фото студента" />
        </div>
      </div>
    </div>
  );
}
