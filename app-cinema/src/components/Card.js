import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = ({ movie, isFavorite }) => {
  const [dataGenres, setDataGenres] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=fcdec7308236c2e76d9dca06f7f3a61c&language=fr-FR"
      )
      .then((res) => {
        setDataGenres(res.data.genres);
        console.log(res.data.genres);
      });
  }, []);

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    let releaseDate = `${day}/${month}/${year}`;
    return releaseDate;
  };

  const handleAddFavorite = (movie) => {
    debugger;
    console.log(movie);
    const favoriteMovies =
      JSON.parse(localStorage.getItem("FavoriteMovies")) || [];
    favoriteMovies.push(movie);
    localStorage.setItem("FavoriteMovies", JSON.stringify(favoriteMovies));
  };

  return (
    <li className="card">
      <img
        src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
        alt={"image du film " + movie.original_title.to}
      />
      <h2>{movie.original_title}</h2>
      <h5>{"Sorti le : " + formatDate(movie.release_date)}</h5>
      <h4>
        {movie.vote_average.toFixed(2) + "/10"}
        <span>⭐</span>
      </h4>
      <ul>
        {dataGenres &&
          movie.genre_ids.map((genreId) => {
            const genre = dataGenres.find((genre) => genre.id === genreId);
            return (
              <li key={genreId}>{genre ? genre.name : "Unknown Genre"}</li>
            );
          })}
      </ul>
      <h3>Synopsis</h3>
      <p>{movie.overview}</p>
      {isFavorite ? null : (
        <input
          type="submit"
          value="Ajouter aux coups de coeur"
          className="btn"
          onClick={() => handleAddFavorite(movie)}
        />
      )}
    </li>
  );
};

export default Card;
