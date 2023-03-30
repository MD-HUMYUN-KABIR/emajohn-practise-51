import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, name, seller,price,ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-content'>
            <h6 className='product-name'>{name}</h6>
            <p className='price'>price: ${price}</p>
            <p className='Manufacturer'>Manufacturer: {seller}</p>
            <p className='rating'>Rating: {ratings} star</p>
            </div>
           <button onClick={()=> handleAddToCart(props.product)} className='btn-cart'>
            add to cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;