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

// console.log(products);
// add list item////////////////////////

    const addToStore=(product)=>{
    //   console.log(product);
    
    // if(addToStore){
    //     console.log('asei');
    //     const newStore = [...stores,product];
    //     setStores(newStore);
      
    // }
    if (addToStore){
        const newStore = [...stores,product];
        setStores(newStore.slice(0,4));
        document.getElementsByClassName('error').style.display='none';
    }
    else{
        console.log('sorry');
        document.getElementsByClassName('error').style.display='block';
    }
}
    //remove///////////////////
   
    const removeToStore =()=>{    
        setStores([]);
    }

    // const handleSelectProduct =( )=>{
    //     const selectProduct=  (Math.random(0,stores.length-1));
    // }
//     // random choosen///////////////////////
//     const [select, setSelect]=useState([]);
//    const handleSelectProduct=()=>{
// const selectProduct = Math.random(0, select.length-1)*10

// setSelect(selectProduct);
// console.log(selectProduct);
//    }
const handleSelectProduct =( )=>{
const rndInt = Math.floor(Math.random() * 11) + 1;
console.log(rndInt)
}

const deleteItem = ()=>{
    setStores([]);
    console.log('jai');
}


    return (
       
            <div className='shop-container'>
            <div className='shop'>

          
            {
              products.map(product=><Product
                key={product._id}
                addToStore={addToStore}
             deleteItem={deleteItem}
                product={product}></Product>)
            }
              </div>
         <div className='store-container'>
        <h2 className='store-text'>Select Your Favorite 4 Products</h2>
        <div>
        {
             stores.map(store=> (<Store
                 key={store._id} 
                 store={store}></Store>) )
               
         }
          <div className='error'>
               <h1>Sorry !! Please select 4 items.</h1>
           </div>
        </div>
       <button onClick={handleSelectProduct} className='Store-btn'>Select One For Me </button>
       <br /><br />
       <button onClick={removeToStore} className='Store-btn'>Remove All <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon> </button>
         </div>
        
        </div>
       
      
    );
};

export default Shop;