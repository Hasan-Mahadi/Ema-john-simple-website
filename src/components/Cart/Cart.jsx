import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const cart = props.cart;  option-1

    // const {cart} = props;  option-2

    console.log(cart);


    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const taxt = totalPrice * 7 / 100;

    const granTotal = totalPrice + totalShipping + taxt;







    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items:  {cart.length} pcs</p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Text: ${taxt}</p>
            <h6>Grand Total: ${granTotal.toFixed(2)}</h6>


        </div>
    );
};

export default Cart;