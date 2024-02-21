import { useAppContext } from "../context/AppProvider";
const Checkout = () => {
  const { cartProducts, setCartProducts } = useAppContext();
//   console.log(cartProducts);

const placeOrder = () => {

}

  return (
    <div>
      <h2>Checkout</h2>
      <div className="container checkout-container">
        <div>
          <div class="mb-3">
            <label for="fullname" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="fullname"
              placeholder="Ex: Sayan Pal"
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">
              Enter address
            </label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="xyz street"
            ></input>
          </div>
          <div class="mb-3">
            <label for="country" class="form-label">
              Enter Country
            </label>
            <input
              type="text"
              class="form-control"
              id="country"
              placeholder="Ex: India"
            ></input>
          </div>
          <div class="mb-3">
            <label for="state" class="form-label">
              Enter State
            </label>
            <input
              type="text"
              class="form-control"
              id="state"
              placeholder="Delhi"
            ></input>
          </div>
          <div class="mb-3">
            <label for="zip" class="form-label">
              Enter Postal Code
            </label>
            <input
              type="number"
              class="form-control"
              id="zip"
              placeholder="Ex:85458"
            ></input>
          </div>
        </div>
        <div>
            <h2>Order Details</h2>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {cartProducts.map((item)=>{
                        return <tr>
                            <td>
                                <img src={item.image} width={20}  ></img>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            ${item.price * item.quantity}
                        </tr>
                    })}
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td><strong>${cartProducts.reduce(
                      (total, item) => total + item.quantity * item.price,
                      0
                    )}</strong></td>
                    </tr>
                </tbody>

            </table>
            <button onClick={placeOrder}>
                Place Order
            </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
