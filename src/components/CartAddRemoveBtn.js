import React from "react";
import { useAppContext } from "../context/AppProvider";

const CartAddRemoveBtn = ({singleProduct}) => {

  const { cartProducts, setCartProducts } = useAppContext();

  const addToCart = (product) => {
    // Find the index of the product in cartProducts
    const currentCart = [...cartProducts];
    let index = currentCart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      // If product already exists in cart, increase quantity
      currentCart[index].quantity++;
    } else {
      // If product doesn't exist in cart, add it with quantity 1
      currentCart.push({ quantity: 1, ...product });
    }
    setCartProducts(currentCart);
  };

  const removeFromCart = (product) => {
    const currentCart = [...cartProducts];

    let index = currentCart.findIndex(item=> item.id === product.id);

    if (index !== -1) {
      if ( currentCart[index].quantity === 1 ) {
        currentCart.splice(index, 1);
      } else {
        currentCart[index].quantity--;
      }
    }
    setCartProducts(currentCart);

  }
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic mixed styles example"
    >
      <button
        onClick={() => removeFromCart(singleProduct)}
        type="button"
        className="btn btn-danger"
      >
        -
      </button>
      <span type="button" className="btn btn-warning">
        {cartProducts.find((item) => item.id === singleProduct.id).quantity}
      </span>
      <button
        onClick={() => addToCart(singleProduct)}
        type="button"
        className="btn btn-success"
      >
        +
      </button>
    </div>
  );
};

export default CartAddRemoveBtn;
