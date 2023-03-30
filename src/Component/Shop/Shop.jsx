import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
}, [])

useEffect(()=>{
const storeCart = getShoppingCart();
const saveCart = [];
//ager cart e ak product bar bar add korle prottek ta product array te alada alada add hoto but akhn useEffect er maddhome ak product bar bar add korle sei product ar bar bar add na hoye sudu sei product er quantity barbe sudu new product add korle e array te product barbe.so akhn product er quantityr sathe sob compare kore calculate korte hobe
for(const id in storeCart){
    const addedProduct = products.find(product => product.id === id);
    if(addedProduct){
        const newQuantity = storeCart[id];
        addedProduct.quantity = newQuantity;
        saveCart.push(addedProduct);
    }
}
setCart(saveCart);
//page reload dile ai cart kaj korbe
}, [products]);

 const handleAddToCart = (product) => {
    
        const newCart = [...cart, product];
        setCart(newCart);
        //button a click korle ai cart kaj korbe
    
console.log('shop.jsx line 15', product)
addToDb(product.id);
 }

    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
                products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
            }
            </div>

            <div className='cart-container'>
           <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;