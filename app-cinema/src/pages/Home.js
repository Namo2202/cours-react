import React from "react";
import Header from "../components/Header";
import Movies from "../components/Movies";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Movies />
    </div>
  );
};

export default Home;
