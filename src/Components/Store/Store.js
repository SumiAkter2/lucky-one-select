import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Store.css'
const Store = (props) => {

  
    return (
        <div>
           <div className='details'>
                
               <ul>
                   <li className='store'>
                        <img  src={props.store.picture} alt="" /> 
                        {props.store.name} <FontAwesomeIcon 
                        icon={faTrash}></FontAwesomeIcon >
                         </li>
               </ul>
               </div>
        </div>
    );
};

export default Store;