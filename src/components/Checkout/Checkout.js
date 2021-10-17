import React from 'react';
import './Checkout.css'
import checkout_banner from '../../images/banner/checkout_banner.jpeg'
import Subtotal from '../Subtotal/Subtotal';

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__banner"
                    src={checkout_banner} alt="" />
                <div>
                    <h2 className="checkout__title"> Shopping Cart</h2>
                    {/* cart item  */}
                    {/* cart item  */}
                    {/* cart item  */}
                    {/* cart item  */}
                </div>

            </div>
            <div className="checkout__right">
                <Subtotal></Subtotal>

            </div>

        </div>
    );
};

export default Checkout;