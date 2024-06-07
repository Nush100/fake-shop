import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../store/actions/ProductActions';
import ProductComponent from './ProductComponent';

function ProductListing() {
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Get all products error : ", err);
        })
        dispatch(setProducts(response.data));
    }
    
    useEffect(() => {
        fetchProducts()
    }, []);

  return (
    <div>
      <ProductComponent />
    </div>
  )
}

export default ProductListing
