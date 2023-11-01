import React, { useState } from "react";
import Header from "../components/Header";
import Movies from "../components/Movies";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [sortType, setSortType] = useState("");
  const [searchField, setSearchField] = useState("");

  const handleSortTypeChange = (sortType) => {
    setSortType(sortType);
  };

  const handleSearchField = (search) => {
    setSearchField(search);
  };
  return (
    <div>
      <Header />
      <SearchBar
        onSortTypeChange={handleSortTypeChange}
        onSearchField={handleSearchField}
      />
      <Movies sortType={sortType} searchField={searchField} />
    </div>
  );
};

export default Home;
