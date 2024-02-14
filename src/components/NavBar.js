import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
 const storeName = "Fake Store App";
 const {categories, cartProducts} = useAppContext();

 console.log('cartProducts ', cartProducts);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          {storeName}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="all-products">
                All Products
              </Link>
            </li>
            {
                categories.map((item, i)=>{
                    return  <li key={i} className="nav-item">
                    <Link className="nav-link" to={`products/${item}`}>
                      {item}
                    </Link>
                  </li>
                })
            }
            <li className="nav-item">
              <Link className="nav-link" href="#">
                contact
              </Link>
            </li>
           
          </ul>
        </div>
        <Link to="/cart" style={{cursor: 'pointer'}}>
          <span style={{color: 'red'}}>{cartProducts.reduce((total, item)=> total + item.quantity, 0)}</span>
          <FontAwesomeIcon style={{color: 'blue', width: '20px', marginRight: '20px'}} icon={faCartShopping} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
