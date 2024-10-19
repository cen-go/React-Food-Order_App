import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import Button from "./button";
import { currencyFormatter } from "../util/formatting";

function MealItem({ id, image, title, price, description }) {
  const { addToCart } = useContext(CartContext);

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={title} />
        <div>
          <h3>{title}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <div className="meal-item-actions">
          <Button
            buttonStyle="button"
            title="Add to Cart"
            onClick={() => addToCart({ id: id, name: title, price: price })}
          />
        </div>
      </article>
    </li>
  );
}

export default MealItem;
