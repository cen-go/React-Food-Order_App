import { useContext } from "react";

import logoImg from "../assets/logo.jpg";
import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";
import { CartContext } from "../store/cart-context";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./button";

function Header() {
  const { progress, showCart} = useContext(UserProgressContext);

  const { cartItems } = useContext(CartContext);
  const cartQuantity = cartItems.reduce((acc, cartItem) => acc += cartItem.quantity, 0);

    return (
      <>
        {progress === "cart" && <Cart />}
        {progress === "checkout" && <CheckoutForm />}

        <header id="main-header">
          <div id="title">
            <img src={logoImg} alt="logo" />
            <h1>REACTFOOD</h1>
          </div>
          <nav>
            <Button
              onClick={showCart}
              buttonStyle="text-button"
              title={`Cart (${cartQuantity})`}
            />
          </nav>
        </header>
      </>
    );
}

export default Header;
