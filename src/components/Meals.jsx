import { useState, useEffect } from "react";
import MealItem from "./MealItem";

function Meals() {
  const [isFetching, setIsFetching] = useState(false);
  const [availableMeals, setAvailableMeals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const meals = await response.json();
        setAvailableMeals(meals);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMeals();
    setIsFetching(false);
  }, []);

  return (
    <ul id="meals">
      {availableMeals.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            image={meal.image}
            title={meal.name}
            price={meal.price}
            description={meal.description}
          />
        );
      })}
    </ul>
  );
}

export default Meals;
