import React from "react";

const Card = ({ movie }) => {
  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    let releaseDate = `${day}/${month}/${year}`;
    return releaseDate;
  };

  return (
    <li className="card">
      <img
        src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
        alt={"image du film " + movie.original_title.to}
      />
      <h2>{movie.original_title}</h2>
      <h5>{"Sorti le : " + formatDate(movie.release_date)}</h5>
    </li>
  );
};

export default Card;
