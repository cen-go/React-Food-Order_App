import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import Button from "./button";
import Modal from "./Modal";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext";

function Cart() {
  const { hideCart, showCheckout, progress } = useContext(UserProgressContext);

  const { cartItems, updateAmount } = useContext(CartContext);
  const totalPrice = cartItems
    .reduce((acc, cartItem) => (acc += cartItem.price * cartItem.quantity), 0)
    .toFixed(2);

  return (
    <Modal open={progress} onClose={hideCart}>
      <div className="cart">
        <h2>Your Cart</h2>

        <ul>
          {cartItems.map((item) => {
            return (
              <li key={item.id} className="cart-item">
                <p>
                  {item.name} - {item.quantity} x{" "}
                  {currencyFormatter.format(item.price)}
                </p>
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
          <p>{currencyFormatter.format(totalPrice)}</p>
        </div>

        <div className="modal-actions">
          <Button buttonStyle="text-button" title="Close" onClick={hideCart} />
          <Button
            buttonStyle="button"
            title="Go to Checkout"
            onClick={showCheckout}
            disabled={cartItems.length < 1 ? true : false}
          />
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
