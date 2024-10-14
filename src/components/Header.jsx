import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>REACTFOOD</h1>
      </div>
      <button>Cart(3)</button>
    </header>
  )
}

export default Header;