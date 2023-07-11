import React from "react";
import "./Portfolio.css";
import ArrowLink from "../../images/ArrowLink.svg";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__section-title">Портфолио</h3>

      <div className="portfolio__links">
        <a
          className="portfolio__link"
          href="https://bezdenejnyhk.github.io/triathlon"
          target="_blank"
          rel="noreferrer"
        >
          <span>Статичный сайт</span>{" "}
          <img
            className="portfolio__link-img"
            src={ArrowLink}
            alt="Ссылка на внешний сайт"
          />
        </a>

        <a
          className="portfolio__link"
          href="https://bezdenejnyhk.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Адаптивный сайт</span>{" "}
          <img
            className="portfolio__link-img"
            src={ArrowLink}
            alt="Ссылка на внешний сайт"
          />
        </a>

        <a
          className="portfolio__link"
          href=" https://bezdenejnyhk.github.io/mesto"
          target="_blank"
          rel="noreferrer"
        >
          <span>Одностраничное приложение</span>{" "}
          <img
            className="portfolio__link-img"
            src={ArrowLink}
            alt="Ссылка на внешний сайт"
          />
        </a>
      </div>
    </div>
  );
}
