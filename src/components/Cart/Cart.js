import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
             <h1>this is order sector </h1>
                <p>selected: {cart.length}</p>
        </div>
    );
};

export default Cart;