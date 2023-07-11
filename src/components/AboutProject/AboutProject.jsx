import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <div className="project">
      <h2 className="project__title">О проекте</h2>
      <hr className="project__line" />
      <div className="about-project__container">
        <div className="about-project__description">
          <p className="about-project__description-title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description">
          <p className="about-project__description-title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__progress">
        <div className="project__progress-black">1 неделя</div>
        <div className="project__progress-grey">4 недели</div>
      </div>
      <div className="project__progress-text">
        <p className="progress-text_one">Back-end</p>
        <p className="progress-text_four">Front-end</p>
      </div>
    </div>
  );
}
