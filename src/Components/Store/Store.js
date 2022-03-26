import React from 'react';

const Store = (props) => {
    const {name,picture}=props.store;
    console.log(props.store);
    return (
        <div>
            <h1>Name: {name}</h1>
            <img src={picture} alt="" />
        </div>
    );
};

export default Store;