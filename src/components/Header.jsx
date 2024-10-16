import logo from "../assets/logo.jpg";
import Modal from "./Modal";
import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";

function Header() {
  return (
    <>
      <Modal>
        <Cart />
        {/* <CheckoutForm /> */}
      </Modal>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="logo" />
          <h1>REACTFOOD</h1>
        </div>
        <div>
          <button className="text-button">Cart(3)</button>
        </div>
      </header>
    </>
  );
}

export default Header;
