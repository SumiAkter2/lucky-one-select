import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import Store from '../../Store/Store';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] =useState([]);
    useEffect(()=>{
        fetch('fake-data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
const [stores, setStores]=useState([]);
    const addToStore=(product)=>{
       
const newStore = [...stores,product];
setStores(newStore)

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
         {
             stores.map(store=><Store 
                key={store._id}
                store={store}></Store>)
         }
       
         </div>
        </div>
    );
};

export default Shop;