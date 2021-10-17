import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';


const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* home work */}
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift

                        </small>
                    </>
                )}
                decimalScale={2}
                // value={getCartTotal(cart)} home work
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            >
            </CurrencyFormat>
            <button className="subtotal__button">Proceed to checkout</button>
        </div>
    );
};

export default Subtotal;