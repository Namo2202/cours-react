import React, { useState } from "react";

const SearchBar = () => {
  const [movieName, setMovieName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-component">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setMovieName(e.target.value)}
          value={movieName}
        />
        <input type="submit" value="Rechercher" />
      </form>
      <div className="btn-sort-container">
        <input type="button" value="Top" id="goodToBad" />
        <input type="button" value="Flop" id="badToGood" />
      </div>
    </div>
  );
};

export default SearchBar;
