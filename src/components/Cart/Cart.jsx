import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart, children }) => {
    // const cart = props.cart;  option-1

    // const {cart} = props;  option-2

    // console.log(cart);


    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {




        // if(product.quantity ===0){
        //     product.quantity =1;
        // }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const taxt = totalPrice * 7 / 100;

    const granTotal = totalPrice + totalShipping + taxt;







    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items:  {quantity} pcs</p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Text: ${taxt}</p>
            <h6>Grand Total: ${granTotal.toFixed(2)}</h6>

            <button onClick={handleClearCart} className='btn-clr-crt'>
              <span>  Clear Cart</span>
                <FontAwesomeIcon  icon={faTrashAlt} />
            </button>

            {children}


        </div>
    );
};

export default Cart;