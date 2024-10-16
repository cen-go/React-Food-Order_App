import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import Button from "./button";
import { currenceFormatter } from "../util/formatting";

function Cart() {
  const {cartItems, updateAmount} = useContext(CartContext);
  const totalPrice = cartItems
    .reduce((acc, cartItem) => (acc += cartItem.price * cartItem.quantity), 0)
    .toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id} className="cart-item">
              <p>{item.name} - {item.quantity} x {currenceFormatter.format(item.price)}</p>
              <div className="cart-item-actions">
                <button onClick={() => updateAmount(item.id, -1)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => updateAmount(item.id, 1)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="cart-total">
        <p>{currenceFormatter.format(totalPrice)}</p>
      </div>

      <div className="modal-actions">
        <Button buttonStyle="text-button" title="Close" />
        <Button buttonStyle="button" title="Go to Checkout" />
      </div>
    </div>
  );
}

export default Cart;