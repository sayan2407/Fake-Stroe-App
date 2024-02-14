// import { useParams }
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import config from "../../config/config";
import axios from 'axios';
const EditProduct = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});
  const [productTitle, setProductTitle] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productCat, setProductCat] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const api = `${config.apiUrl}products/${id}`;
      console.log('api', api);
      const response = await axios
        .get(api)
        .then((res) => res)
        .catch((e) => console.log("error"));

      console.log(response.data);
      setProductTitle(response.data.title);
      setProductDesc(response.data.description);
      setProductCat(response.data.category);
      setProductPrice(response.data.price);

    };
    fetchProduct();
  }, []);

  const updateProduct = async () => {
    try {
        const api = `${config.apiUrl}products/${id}`;
        const response = await axios.put(api, {
            title: productTitle,
            price: productPrice,
            category: productCat,
            description: productDesc
        })
        .then(res=>res)
        .catch(e=>console.log(e));

        // console.log('update ', response);
        if (response.data) {
            setIsUpdate(true);
        }
    } catch(e) {
        console.log('error!!');
    }
  }
  return (
    <div>
        {
            (isUpdate) ? (
                <div class="alert alert-primary" role="alert">
  Product Data Updated ~ This is Fake Api so database will not change anything
</div>
            ) : (
                <p>Edit your Product</p>
            )
        }
      <div>
        <h3>Product Title</h3>
        <div class="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={productTitle}
            onChange={(e)=>setProductTitle(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h3> Product Description</h3>
        <div class="input-group">
          <textarea value={productDesc} onChange={(e)=>setProductDesc(e.target.value)} rows={10} class="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>

      <div>
        <h3>Product Price</h3>
        <div class="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            value={productPrice}
            onChange={(e)=>setProductPrice(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h3>Product Category</h3>
        <div class="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={productCat}
            onChange={(e)=>setProductCat(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button onClick={updateProduct}>Update</button>
      </div>
      
    
    </div>
  );
};

export default EditProduct;
