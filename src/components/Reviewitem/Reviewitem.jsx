import React from 'react';
import './ReviewItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Reviewitem = ({ product, handleRemoveFromCart }) => {

    const { id, img, price, name, quantity } = product;

    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='pd-title'>{name}</p>
                <p>Price: <span className='org-txt'>${price}</span></p>
                <p>Order Quantity: <span className='org-txt'>{quantity}</span></p>


            </div>
            <button onClick={() => handleRemoveFromCart (id)} className='btn-dlt'>
                <FontAwesomeIcon className='btn-icn' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default Reviewitem;