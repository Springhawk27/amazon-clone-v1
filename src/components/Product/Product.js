import React from 'react';
import './Product.css'
import product_chair from '../../images/products/product_chair.jpg'
import { Rating } from '@mui/material';

const Product = ({ id, title, img, price, rating }) => {
    return (
        <div className="product">
            <img src={img} alt="" />

            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* <p>&#9733;</p> */}
                    {Array(rating).fill().map((_, i) => (
                        <p>&#9733;</p>
                    ))}

                </div>

            </div>


            <button>Add to Cart</button>
        </div>
    );
};

export default Product;