import { useEffect } from "react"
import config from '../config/config';
import { useAppContext } from "../context/AppProvider";
import Product from "../components/Product";
import axios from 'axios';

const AllProducts = () => {

    const { products, setProducts} = useAppContext();

    useEffect(()=>{
        const fetchAllProducts = async () => {
            const api = `${config.apiUrl}products`;
            const response = await axios.get(api).
            then(res=>res).
            catch(e=>console.log('something went wrong'));
            setProducts(response.data);
        }
        fetchAllProducts();
    })
  return (
    <div>
        <div className="container d-flex flex-wrap">
            {
                products.map(item=>{
                    return <Product key={item.id} item={item}/>
                })
            }
        </div>
    </div>
  )
}

export default AllProducts