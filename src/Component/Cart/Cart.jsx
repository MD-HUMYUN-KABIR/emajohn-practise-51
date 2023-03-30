import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log('line 5 cart.jsx', cart);
let totalPrice = 0;
let totalShipping = 0;
let quantity = 0;
for(const product of cart){
    product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
    quantity = quantity + product.quantity;
}
const tax = totalPrice * 10 /100;
const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <p>Added item {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax ${tax}</p>
            <p>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;