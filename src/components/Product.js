import { Link } from "react-router-dom";
import "./components.css";

const Product = ({ item }) => {
  console.log(item);
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card product-card" style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            {item.description.substring(0, 50)}...
            <span stye={{ fontSize: "8px", color: "blue" }}>read more</span>
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>${item.price}</p>
            <Link href="#" className="btn btn-primary">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
