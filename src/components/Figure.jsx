import React from "react";
import "./Figure.css";

const Figure = ({ data }) => {
  return (
    <figure className="figure-container">
      <div className="img-container">
        <img className="img-daily" src={data.url} alt={data.title} />
      </div>
      <div class="text-container">
        <div class="title-container">
          <h1 class="title">{data.title}</h1>
        </div>
        <div class="details-container">
          <span>{data.date}</span>
          <span>{data.copyright}</span>
        </div>
        <div class="text-exp">{data.explanation}</div>
      </div>
    </figure>
  );
};

export default Figure;
