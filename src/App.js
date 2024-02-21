
import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

import  axios  from 'axios';
import config from './config/config';

import { useAppContext } from './context/AppProvider';
import AllProducts from './page/AllProducts';
import CategoryProduct from './page/CategoryProduct';
import SingleProduct from './page/SingleProduct';
import Admin from './Admin/Admin';
import AdminHome from './Admin/Components/AdminHome';
import AdminProducts from './Admin/Components/AdminProducts';
import AdminUsers from './Admin/Components/AdminUsers';
import EditProduct from './Admin/Components/EditProduct';
import Cart from './page/Cart';
import Checkout from './page/Checkout';



function App() {

  const { setCategories } = useAppContext();
  useEffect(()=> {
    const fetchCategories = async () => {
      const api = `${config.apiUrl}products/categories/`;
      console.log('api ', api);
          const response = await axios.get(api).then(res=>res).catch(e=>console.log('something went wrong'));
          // console.log(response);
          setCategories(response.data);
    }
    fetchCategories();
  }, []);


  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/all-products" element={<AllProducts/>}></Route>
      <Route path="/products/:category" element={<CategoryProduct/>}></Route>
      <Route path="/product/:productId" element={<SingleProduct/>}></Route>
      
      
      {/* Admin Area */}
      <Route element={<Admin/>}>
        <Route path="/admin" element={<AdminHome/>}></Route>
        <Route path="/admin/products" element={<AdminProducts/>}></Route>
        <Route path="/admin/users" element={<AdminUsers/>}></Route>
        <Route path="/admin/products/edit-product/:id" element={<EditProduct/>}></Route>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
