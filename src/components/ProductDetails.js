import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../store/actions/ProductActions';
import './../App.css';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const {title, description, image, price, category} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product)

    const fetchProduct = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log('Fetch product error : ', err);
            });
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProduct();
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return (
        <div>
            {Object.keys(product).length === 0 ? (
                <div>Loading ...</div>
            ) :
                <div className='details'>
                    <div className='data'>
                        <img src={image} alt={title} className='detailImg'/>
                        <div>
                            <h1>{title}</h1>
                            <div className='desc'>
                                <p className='detailCategory'><b>{category}</b></p>
                                <p className='category'>{description}</p>
                                <p className='price'>Price: ${price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductDetails;
