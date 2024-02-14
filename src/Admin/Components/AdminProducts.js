import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppProvider";
import FetchPtoducts from "../../ApiCall/FetchProducts";
import {Link} from 'react-router-dom';

const AdminProducts = () => {
  const { products, setProducts } = useAppContext();

  useEffect(() => {
    FetchPtoducts(setProducts);
  }, []);

  return (
    <div>
      <button>Add Product</button>
      <h2>Products</h2>
      <div>
        Filters
        <input type="text" placeholder="search a product"/>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((item) => {
              return <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td><Link to={`edit-product/${item.id}`}>Edit product</Link></td>
                <br/>
                
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
