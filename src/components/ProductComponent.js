import React from 'react'
import { useSelector } from 'react-redux';
import './../App.css';
import { Link } from 'react-router-dom';

function ProductComponent() {
    const products =  useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product;
        return (
            <div className='product' key={id}>
                <Link to={`/product/${id}`} className='link'>
                    <img src={image} alt={title} className='productImg'/>
                    <div class="container">
                        <h4><b>{title}</b></h4> 
                        <p className='price'>${price}</p> 
                        <p className='category'>{category}</p> 
                    </div>
                </Link>
            </div>
        )
    })
  return (
    <div className='productList'>
      {renderList}
    </div>
  )
}

export default ProductComponent;
