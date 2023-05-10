import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([])





    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
    },[])







    const handlerAddToCart = (product) =>{
        // cart.push(product);
        const newcart = [...cart,product];
        setCart(newcart);
        addToDb(product.id)
    }


    return (
        <div className='shop-container'>

            <div className="products-container">
                {/* <h2>Products coming here: {products.length}</h2> */}

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}

                    > </Product>)
                }

            </div>

            <div className="cart-container">
              <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;