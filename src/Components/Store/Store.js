import React from 'react';

const Store = ({store}) => {
    // console.log(props);
    // const {name,picture}=props.store;
    // console.log(props.store);
    return (
        <div>
           <div className='details'>
                
               <ul>
                   <li>{store} <button>Del </button></li>
               </ul>
                <img src={store.picture} alt="" />

           </div>
        </div>
    );
};

export default Store;