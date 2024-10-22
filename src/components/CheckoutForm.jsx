import { useContext } from "react";

import InputField from "./InputField";
import Button from "./button";
import UserProgressContext from "../store/UserProgressContext";
import { CartContext } from "../store/cart-context";
import { currencyFormatter } from "../util/formatting";

function CheckoutForm() {
  const { hideCart } = useContext(UserProgressContext);

  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems
    .reduce((acc, cartItem) => (acc += cartItem.price * cartItem.quantity), 0)
    .toFixed(2);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());
    const orderData = {
      customer: customerData,
      items: cartItems,
    };
    console.log(orderData);

    async function sendOrderData(data) {
      try {
        const response = await fetch("http://localhost:3000/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({order: data}),
        });
        const resData = await response.json();
        console.log(resData.message);        
      } catch (error) {
        console.log(error.message);            
      }
    }

    sendOrderData(orderData);
  }

  return (
    <div className="cart">
      <h2>Checkout</h2>
      <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
      <form onSubmit={handleSubmit}>
        <InputField
          title="Full Name"
          id="full-name"
          type="text"
          name="name"
          required
        />
        <InputField
          title="E-Mail Address"
          id="email"
          type="email"
          name="email"
          required
        />
        <InputField
          title="Street"
          id="street"
          type="text"
          name="street"
          required
        />
        <div className="control-row">
          <InputField
            title="Postal Code"
            id="postal-code"
            type="text"
            name="postal-code"
            required
          />
          <InputField title="City" id="city" type="text" name="city" required />
        </div>
        <div className="modal-actions">
          <Button
            buttonStyle="text-button"
            type="button"
            title="Close"
            onClick={hideCart}
          />
          <Button buttonStyle="button" title="Submit Order" />
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
