import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const Favorite = () => {
  debugger;
  const favoriteMovies =
    JSON.parse(localStorage.getItem("FavoriteMovies")) || [];
  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coups de coeur <span>💖</span>
      </h2>
      <div className="movies">
        {favoriteMovies.length > 0 ? (
          <ul>
            {favoriteMovies.map((movie, index) => (
              <Card key={index} movie={movie} isFavorite={true} />
            ))}
          </ul>
        ) : (
          <p>Aucun films favoris</p>
        )}
      </div>
    </div>
  );
};

export default Favorite;
