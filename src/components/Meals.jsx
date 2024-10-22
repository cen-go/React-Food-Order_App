import MealItem from "./MealItem";
import Error from "./Error";

import useHttp from "../hooks/useHttp";

const requestConfig = {};

function Meals() {
  const {
    isFetching,
    data: availableMeals,    
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

    if (isFetching) {
    return (
      <div className="meal-item">
        <p className="meal-item-price">Loading available meals...</p>
      </div>
    );
  }

  if (error) {
    return <Error title="Failed to load meals!" message={error} />
  }

  return (
    <ul id="meals">      
      {availableMeals.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            id={meal.id}
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
