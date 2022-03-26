import React from 'react';
import './Answer.css';
const Answer = () => {
    return (
        <div className='answer-container'>
           <h1>Q:Difference between State and Props?</h1>
        <h3>Ans:
            1.State are asynchronous but props are read only.
            2.State can be modified using this.state but props can't be.    
            3.State are mutable but Props are immutable.
            4.State can't pass properties from parents Components but props can.
            5.State can define in the Components itself but props can't.
        </h3>
        <h1>Q:How react works?</h1>
        <h3>Ans:
            React is a javascript library and it is declarative, efficient, and flexible.React works using multiple component under the hood.It create Virtual DOM that is similar to react DOM.React read search the component in the Virtual Dom Which we want to change.Then React change or work only the component without change others component. </h3>
        <h1>Q:How useState works????
        </h1>
        <h3>Ans:
            useState is a hook function.</h3>
        </div>
    );
};

export default Answer;