import { useContext } from "react";

import InputField from "./InputField";
import Button from "./button";
import UserProgressContext from "../store/UserProgressContext";
import { CartContext } from "../store/cart-context";
import { currencyFormatter } from "../util/formatting";

function CheckoutForm() {
  const {hideCart} = useContext(UserProgressContext);

  const {cartItems} = useContext(CartContext);
  const totalPrice = cartItems
    .reduce((acc, cartItem) => (acc += cartItem.price * cartItem.quantity), 0)
    .toFixed(2);

  return (
    <div className="cart">
      <h2>Checkout</h2>
      <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
      <form>
        <InputField title="Full Name" id="full-name" type="text" name="fullName" />
        <InputField title="E-Mail Address" id="email" type="email" name="email" />
        <InputField title="Street" id="street" type="text" name="street" />
        <div className="control-row">
          <InputField title="Postal Code" id="postal-code" type="text" name="postalCode" />
          <InputField title="City" id="city" type="text" name="city" />
        </div>
        <div className="modal-actions">
          <Button buttonStyle="text-button" type="button" title="Close" onClick={hideCart} />
          <Button buttonStyle="button" title="Submit Order" />
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm;