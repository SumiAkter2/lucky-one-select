import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './Product.css'
const Product = ( { product ,addToStore}) => {
    const {picture,balance,name,_id}=product;

    return (
      <div>
            <div className='product'>
              <img src={picture} alt="" />
              <h1>{name}</h1>
              <h1>Price: {balance}</h1> 
              <button onClick={()=>addToStore(product)} className='button-container'>Select Me <FontAwesomeIcon icon={faBasketShopping}></FontAwesomeIcon> </button>
          </div>
        <div>
           
        </div>
        </div>
    );
};

export default Product;