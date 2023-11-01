import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Movies = ({ sortType, searchField }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (searchField != "") {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=fcdec7308236c2e76d9dca06f7f3a61c&query=" +
            searchField +
            "&language=fr-FR"
        )
        .then((res) => {
          setData(res.data.results);
          console.log(res.data);
        });
    } else {
      axios
        .get(
          // "https://api.themoviedb.org/3/search/movie?api_key=fcdec7308236c2e76d9dca06f7f3a61c&query=code&language=fr-FR"
          "https://api.themoviedb.org/3/movie/popular?api_key=fcdec7308236c2e76d9dca06f7f3a61c&language=fr-FR"
        )
        .then((res) => {
          setData(res.data.results);
          console.log(res.data);
        });
    }
  }, [searchField]);

  return (
    <div className="movies">
      <ul>
        {data &&
          data
            .sort((a, b) => {
              if (sortType == "goodToBad") {
                return b.vote_average - a.vote_average;
              } else if (sortType == "badToGood") {
                return a.vote_average - b.vote_average;
              }
            })
            .map((movie, index) => <Card key={index} movie={movie} />)}
      </ul>
    </div>
  );
};

export default Movies;
