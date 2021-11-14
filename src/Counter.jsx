import React from 'react';
import "./App.css"
import counter from "./store/counter";
import {observer} from "mobx-react-lite";

const Counter = observer(() => {
    return (
        <div className='counter'>
            {"Count = "+ counter.count}
            <button onClick={()=>counter.increment()}>+</button>
            <button onClick={()=>counter.decrement()}>-</button>


        </div>
    );
});

export default Counter;