function CartModal() {
  return (
    <dialog className="modal" open>
      <div className="cart">
        <h2>Your Cart</h2>

        <ul>
          <li className="cart-item">
            <p>Meal Name - Quantity * Price</p>
            <div className="cart-item-actions">
              <button>-</button>
              <p>2</p>
              <button>+</button>
            </div>
          </li>
        </ul>

        <div className="cart-total">
          <p>$99.99</p>
        </div>

        <div className="modal-actions">
          <button className="text-button">Close</button>
          <button className="button">Go to Checkout</button>
        </div>
      </div>
    </dialog>
  );
}

export default CartModal;
