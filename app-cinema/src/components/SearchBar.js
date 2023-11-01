import React, { useState } from "react";

const SearchBar = ({ onSortTypeChange, onSearchField }) => {
  const [movieName, setMovieName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSortTypeChange = (sorType) => {
    onSortTypeChange(sorType);
  };

  const handleSearchField = (movieName) => {
    onSearchField(movieName);
  };

  return (
    <div className="form-component">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setMovieName(e.target.value.toLocaleLowerCase())}
          value={movieName}
        />
        <input
          type="submit"
          value="Rechercher"
          onClick={() => handleSearchField(movieName)}
        />
      </form>
      <div className="btn-sort-container">
        <button
          id="goodToBad"
          onClick={(e) => handleSortTypeChange(e.target.id)}
        >
          Top
        </button>

        <button
          id="badToGood"
          onClick={(e) => handleSortTypeChange(e.target.id)}
        >
          Flop
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
