import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Reviewitem from '../Reviewitem/Reviewitem';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {

    const savedcart = useLoaderData();
    const [cart, setCart] = useState(savedcart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

     const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
     }


    return (
        <div className='shop-container'>

            <div className='review-container'>
                {
                    cart.map(product => <Reviewitem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></Reviewitem>)
                }

            </div>

            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                 <Link className='proced-link' to='/checkout'>
                    <button className='btn-proced'>
                        Proceed Checkout
                        <FontAwesomeIcon className='btn-icn' icon={faCreditCard} />
                    </button>
                 </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Orders;