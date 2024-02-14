import config from "../config/config";
// import { useAppContext } from "../context/AppProvider";
import axios from 'axios';
// import useAppContext


const FetchPtoducts = async (setProducts) => {
    // const {setProducts} = useAppContext();
    const api = `${config.apiUrl}products`;
    const response = await axios.get(api).
    then(res=>res).
    catch(e=>console.log('something went wrong'));
    setProducts(response.data);
}



export default FetchPtoducts;