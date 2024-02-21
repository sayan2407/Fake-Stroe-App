import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./components.css";
import {useLocation} from 'react-router-dom';


const NavBar = () => {
 const storeName = "Fake Store App";
 const {categories, cartProducts, setIsSideBarOpen, setSignInOpen} = useAppContext();

//  console.log('cartProducts ', cartProducts);
const location = useLocation();
const pathname = location.pathname;
console.log('path: ', location.pathname);

const openSignIn = () => {
  setIsSideBarOpen(true);
  setSignInOpen(true);
}

const openSignUp = () => {
  setIsSideBarOpen(true);
}

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container container-fluid">
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
              <Link className={'nav-link' + (pathname==="/" ? ' active' : '') } aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={'nav-link' + (pathname==="/all-products" ? ' active' : '')} aria-current="page" to="all-products">
                All Products
              </Link>
            </li>
            {
                categories.map((item, i)=>{
                    return  <li key={i} className="nav-item">
                    <Link className={'nav-link' + ( pathname === '/products/'+item ? ' active' : '')} to={`products/${item}`}>
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
          <FontAwesomeIcon style={{color: 'blue', width: '30px', marginRight: '20px', height: 'auto'}} icon={faCartShopping} />
        </Link>
        <button onClick={openSignIn}>Log In</button>
        <button onClick={openSignUp}>Sign Up</button>
      </div>
    </nav>
  );
};

export default NavBar;
