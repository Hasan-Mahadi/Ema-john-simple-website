import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])





    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);



    // below the storege.....

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        //step1 get id of the addedProduct
        for (const id in storedCart) {
            //step2 get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                //step3 add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                //step4 add the added product to the saved cart
                saveCart.push(addedProduct);

            }
            // console.log('added product', addedProduct);

        }
        //step5 set the cart
        setCart(saveCart);
    }, [products])

    //end





    const handlerAddToCart = (product) => {

        // cart.push(product);
        let newCart = [];
        // const newcart = [...cart, product];
        // if product dosent exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
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