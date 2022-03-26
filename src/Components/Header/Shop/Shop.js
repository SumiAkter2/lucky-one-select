import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faRemove} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import Store from '../../Store/Store';
import './Shop.css'
import Answer from '../../Answer/Answer';


const Shop = () => {
    const [products, setProducts] =useState([]);
    const [stores, setStores]=useState([]);
    //fetch data////////////////////
    useEffect(()=>{
        fetch('fake-data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);


// add list item////////////////////////

    const addToStore=(product)=>{
        const newStore = [...stores,product];
        setStores(newStore.slice(0,4));
}
    //remove///////////////////
   
    const removeToStore =()=>{    
        setStores([]);
    }


 const getRandomItem =(product)=>{
     const num=Math.round(Math.random()*product.length-0);
  
    const newNum=[num];
    
    setStores(newNum);
 }

    return (
       <div>
           
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
        <h2 className='store-text'>Select Your Favorite 4 Products</h2>
        <div>

        {
             stores.map(store=> <Store
                 key={store._id} 
                 store={store}></Store> )
               
         }
          <div className='error'>
               <h1>Sorry !! Please select 4 items.</h1>
           </div>
        </div>
       <button onClick={getRandomItem} className='Store-btn'>Select One For Me </button>
      
       <br /><br />
       <button onClick={removeToStore} className='Store-btn'>Remove All <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon> </button>
        </div>
        
        
        
        <Answer></Answer>
        </div>
       </div>
      
    );
        
}

export default Shop;