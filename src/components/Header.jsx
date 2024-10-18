import { useContext } from "react";

import logoImg from "../assets/logo.jpg";
import Modal from "./Modal";
import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";
import { CartContext } from "../store/cart-context";
import Button from "./button";

function Header() {
  const { cartItems } = useContext(CartContext);
  const cartQuantity = cartItems.reduce((acc, cartItem) => acc += cartItem.quantity, 0);

  return (
    <>
      <Modal>
        <Cart />
        {/* <CheckoutForm /> */}
      </Modal>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="logo" />
          <h1>REACTFOOD</h1>
        </div>
        <nav>
          <Button buttonStyle="text-button" title={`Cart (${cartQuantity})`} />
        </nav>
      </header>
    </>
  );
}

export default Header;
