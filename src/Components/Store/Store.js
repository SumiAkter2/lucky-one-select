import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Store = ({store}) => {
    // console.log(props);
    // const {name,picture}=props.store;
    // console.log(props.store);
    return (
        <div>
           <div className='details'>
                
               <ul>
                   <li>{store} <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon > </li>
               </ul>
                <img src={store.picture} alt="" />

           </div>
        </div>
    );
};

export default Store;