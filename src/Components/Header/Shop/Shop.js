import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] =useState([]);
    useEffect(()=>{
        fetch('fake-data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
const [store, setStore]=useState([]);
    const addToStore=(product)=>{
        console.log('ki',product);
const newStore = [...store,product];
setStore(newStore)

    }

    return (
        <div className='shop-container'>
            <div className='shop'>

          
            {
              products.map(product=><Product
                key={product._id}
                addToStore={addToStore}
                product={product}></Product>)
            }
              </div>
         <div className='store-container'>
         <h1>store</h1>
         <h1>Name: {store}</h1>
         </div>
        </div>
    );
};

export default Shop;