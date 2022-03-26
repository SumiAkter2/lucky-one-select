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

console.log(products);
const [stores, setStores]=useState([]);
    const addToStore=(products)=>{
      console.log(products);
const newStore = [...stores,products];
setStores(newStore)
console.log(...newStore);

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
        <h2>Select Your Favorite 4 Products</h2>
         {
             stores.map(store=><Store 
                key={store._id}
               
                store={store}></Store>)
               
         }
       <button className='Store-btn'>Select One For Me </button>
       <br /><br />
       <button className='Store-btn'>Remove All </button>
         </div>
        </div>
    );
};

export default Shop;