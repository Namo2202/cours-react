import React, { useState } from "react";
import Meals from "../components/Meals";

const Home = () => {
  const [mealName, setMealName] = useState("");

  return (
    <div className="app">
      <h1>React cook</h1>

      <form>
        <input
          type="text"
          placeholder="Tapez le nom d'un aliment"
          onChange={(e) => setMealName(e.target.value)}
        />
      </form>
      <Meals mealName={mealName} />
    </div>
  );
};

export default Home;
