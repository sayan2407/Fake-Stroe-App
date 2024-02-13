import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import config from "../config/config";
import axios from "axios";
import "./pages.css";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();
  console.log("productId ", productId);

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
  return (
    <div className="container">
      <div className="product-layout">
        <div>
          <img src={singleProduct.image} width="550px" height="auto" />
        </div>
        <div className="product-info">
          <h2>{singleProduct.title}</h2>
          <p>{singleProduct.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
