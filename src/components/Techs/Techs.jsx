import React from "react";
import "./Techs.css";

export default function Techs() {
  return (
    <div className="techs">
      <h2 className="techs__title">Технологии</h2>
      <hr className="techs__line" />
      <div className="techs__content">
        <h3 className="techs__content_title">7 технологий</h3>
        <p className="techs__content_text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className="techs__badges">
        <span className="techs__badge">HTML</span>
        <span className="techs__badge">CSS</span>
        <span className="techs__badge">JS</span>
        <span className="techs__badge">React</span>
        <span className="techs__badge">Git</span>
        <span className="techs__badge">Express.js</span>
        <span className="techs__badge">mongoDB</span>
      </div>
    </div>
  );
}
