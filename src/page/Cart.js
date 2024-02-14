import CartAddRemoveBtn from "../components/CartAddRemoveBtn";
import { useAppContext } from "../context/AppProvider"

const Cart = () => {
    const {cartProducts, setCartProducts} = useAppContext();

    const goToCheckout = () => {

    }
  return (
    <div>
        <h2>Cart</h2>

        <table class="table">
        <thead>
          <tr>
            <th scope="col">Product Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Quantity</th>
            <th scope="col">Product Categoty</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            cartProducts.map((item) => {
              return <tr>
                <td>
                    <img src={item.image} width={30} height={30}/>
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                    <CartAddRemoveBtn singleProduct={item}/>
                </td>
                <td>{item.category}</td>
                <td>{item.price * item.quantity}</td>
                <td></td>
                <br/>
                
              </tr>
            })
          }
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><strong>{cartProducts.reduce((total, item)=> total + (item.quantity * item.price), 0)}</strong></td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={goToCheckout}>Go To Checkout</button>
      </div>

    </div>
  )
}

export default Cart