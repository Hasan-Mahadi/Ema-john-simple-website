import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() =>{
    const loadedproducts = await fetch('products.json');
    const products = await loadedproducts.json();

    //if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];


    console.log(storedCart);
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id ===id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }

    }

    //if you need to send two thing
    // return [products,savedCart]
    //another options
    // return{products,savedCart}

  
    return savedCart;
}

export default cartProductsLoader;