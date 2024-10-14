function MealItem({ image, title, price, description }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={title} />
        <h3>{title}</h3>
        <div>
          <p className="meal-item-price">{price}</p>
        </div>
        <p className="meal-item-description">{description}</p>
        <div className="meal-item-actions">
          <button className="button">Add to Cart</button>
        </div>
      </article>
    </li>
  );
}

export default MealItem;
