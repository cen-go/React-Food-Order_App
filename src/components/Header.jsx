import logo from "../assets/logo.jpg";
import CartModal from "./CartModal";

function Header() {
  return (
    <>
      <CartModal />
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
