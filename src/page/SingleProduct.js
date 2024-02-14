import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import config from "../config/config";
import axios from "axios";
import "./pages.css";
import { useAppContext } from "../context/AppProvider";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] =
    useState({});
    const {cartProducts, setCartProducts} = useAppContext();
  const { productId } = useParams();
  // console.log("productId ", productId);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const api = `${config.apiUrl}products/${productId}`;
      const response = await axios
        .get(api)
        .then((res) => res)
        .catch((e) => console.log("Somethig went wrong!"));
      setSingleProduct(response.data);
    };
    fetchSingleProduct();
  });
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

  const isInCart = cartProducts.some((item) => item.id === singleProduct.id);

  return (
    <div className="container">
      <div className="product-layout">
        <div>
          <img src={singleProduct.image} width="550px" height="auto" />
        </div>
        <div className="product-info">
          <h2>{singleProduct.title}</h2>
          <p>{singleProduct.description}</p>
          <p>Category: {singleProduct.category}</p>
          {isInCart ? (
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button onClick={()=>removeFromCart(singleProduct)} type="button" className="btn btn-danger">
                -
              </button>
              <span type="button" className="btn btn-warning">
              {cartProducts.find(item => item.id === singleProduct.id).quantity}
              </span>
              <button onClick={()=>addToCart(singleProduct)} type="button" className="btn btn-success">
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(singleProduct)}
              type="button"
              className="btn btn-primary"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
