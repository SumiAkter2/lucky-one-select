import React from 'react';
import './Product.css'
const Product = (props) => {
    const {picture,balance,name}=props.product;
const {addToStore, product}=props;


    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h1>{name}</h1>
           <h1>Price: {balance}</h1> 
           <button onClick={()=>addToStore(product.name)} className='button-container'>Add Store</button>
        </div>
    );
};

export default Product;