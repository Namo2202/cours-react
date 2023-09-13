import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Meals = ({ mealName }) => {
  const [mealData, setMealData] = useState([]);

  const getData = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealName)
      .then((res) => setMealData(res.data.meals));
  };

  useEffect(() => getData(), [mealName]);

  return (
    <ul id="result">
      {mealData ? (
        mealData.map((meal) => <Card key={meal.idMeal} meal={meal} />)
      ) : (
        <p style={{ margin: "0 auto" }}>Aucun résultat</p>
      )}
    </ul>
  );
};

export default Meals;
