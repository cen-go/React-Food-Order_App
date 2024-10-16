import InputField from "./InputField";

function CheckoutForm() {
  return (
    <div className="cart">
      <h2>Checkout</h2>
      <p>Total Amount: $99.99</p>
      <form>
        <InputField title="Full Name" id="name" type="text" name="fullName" />
        <InputField title="E-Mail Adress" id="email" type="email" name="email" />
        <InputField title="Street" id="street" type="text" name="street" />
        <div className="control-row">
          <InputField title="Postal Code" id="postal-code" type="text" name="postalCode" />
          <InputField title="City" id="city" type="text" name="city" />
        </div>
        <div className="modal-actions">
          <button className="text-button">Close</button>
          <button className="button">Submit Order</button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm;