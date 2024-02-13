
import {useParams} from 'react-router-dom';
import { useAppContext } from '../context/AppProvider';
import axios from 'axios';
import { useEffect } from 'react';
import config from '../config/config';
import Product from '../components/Product';

const CategoryProduct = () => {
    const { categoryProducts, setCategoryProducts } = useAppContext();
    const {category} = useParams();
    // console.log('category ', category);
    useEffect(()=>{
        const fetchCategoryProducts = async () => {
            const api = `${config.apiUrl}products/category/${category}`;
            const response = await axios.get(api).
            then(res=>res).
            catch(e=>console.log('something went wrong'));
            setCategoryProducts(response.data);
        }
        fetchCategoryProducts();
    })
  return (
    <div>
        <div className="container d-flex flex-wrap">
            {
                categoryProducts.map(item=>{
                    return <Product key={item.id} item={item}/>
                })
            }
        </div>
    </div>
  )
}

export default CategoryProduct