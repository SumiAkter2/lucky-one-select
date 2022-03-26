import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faRemove} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import Store from '../../Store/Store';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] =useState([]);
    const [stores, setStores]=useState([]);
    //fetch data////////////////////
    useEffect(()=>{
        fetch('fake-data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);

// console.log(products);
// add list item////////////////////////

    const addToStore=(product)=>{
    //   console.log(product);
    
    // if(addToStore){
    //     console.log('asei');
    //     const newStore = [...stores,product];
    //     setStores(newStore);
      
    // }
    // if (addToStore){
        const newStore = [...stores,product];
        setStores(newStore);
    // }
    // else{
    //   console.log('nai');  
    // }
         
      
     

    }
    //remove///////////////////
    const [remove, setRemove] =useState([]);
    const removeToStore =()=>{    
     
        console.log(remove);
        setRemove([]);
    }

    // random choosen///////////////////////
    const [select, setSelect]=useState([]);
   const handleSelectProduct=()=>{
const selectProduct = Math.random(0, select.length-1)*10

setSelect(selectProduct);
console.log(selectProduct);
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
        <div>
        {
             stores.map(store=> (<Store
                 key={store._id} 
                 store={store}></Store>) )
               
         }
        </div>
       <button onClick={handleSelectProduct} className='Store-btn'>Select One For Me </button>
       <br /><br />
       <button onClick={removeToStore} className='Store-btn'>Remove All <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon> </button>
         </div>
        </div>
    );
};

export default Shop;