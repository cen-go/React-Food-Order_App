import { useContext } from "react";
import { CartContext } from "../store/cart-context";

function Cart() {
  const {cartItems} = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id} className="cart-item">
              <p>{item.name} - {item.quantity} x ${item.price}</p>
              <div className="cart-item-actions">
                <button>-</button>
                <p>{item.quantity}</p>
                <button>+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="cart-total">
        <p>$99.99</p>
      </div>

      <div className="modal-actions">
        <button className="text-button">Close</button>
        <button className="button">Go to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;