import { useContext } from "react";

import InputField from "./InputField";
import Button from "./button";
import Modal from "./Modal";
import UserProgressContext from "../store/UserProgressContext";
import { CartContext } from "../store/cart-context";
import { currencyFormatter } from "../util/formatting";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

function CheckoutForm() {
  const { hideCart, progress } = useContext(UserProgressContext);

  const { data, error, isFetching, sendRequest } = useHttp(
    "http://localhost:3000/orders",
    requestConfig
  );

  const { cartItems, resetCart } = useContext(CartContext);
  const totalPrice = cartItems
    .reduce((acc, cartItem) => (acc += cartItem.price * cartItem.quantity), 0)
    .toFixed(2);

  function handleFinishOrder() {
    resetCart();
    hideCart();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());
    const orderData = {
      customer: customerData,
      items: cartItems,
    };
    sendRequest(JSON.stringify({ order: orderData }));
  }

  let actions = (
    <>
      <Button
        buttonStyle="text-button"
        type="button"
        title="Close"
        onClick={hideCart}
      />
      <Button buttonStyle="button" title="Submit Order" />
    </>
  );

  if (isFetching) {
    actions = <span>Sending the order request...</span>;
  }

  if (data && data.message === "Order created!") {
    return (
      <Modal open={progress} onClose={handleFinishOrder}>
        <div className="cart">
          <h2>Success!</h2>
          <p>Your order was successfully submitted.</p>
          <div className="modal-actions">
            <Button
              buttonStyle="button"
              title="Close"
              onClick={handleFinishOrder}
            />
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal open={progress} onClose={hideCart}>
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
            <InputField
              title="City"
              id="city"
              type="text"
              name="city"
              required
            />
          </div>
          {error ? (
            <Error title="Couldn't submit the order!" message={error} />
          ) : null}
          <div className="modal-actions">{actions}</div>
        </form>
      </div>
    </Modal>
  );
}

export default CheckoutForm;
