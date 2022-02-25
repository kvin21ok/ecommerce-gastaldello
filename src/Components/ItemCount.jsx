import {React, useState} from "react";

const ItemCount = ()=>{
    const [initial, setInitial] = useState (0);

    const plus = ()=>{
        setInitial(initial+1)
    };

    const minus = ()=>{
        setInitial(initial-1)
    };
    const buy = ()=>{
        setInitial(0)
    };

    return(
        <div id="counter">
            <button onClick= {minus}>Quitar 1 cantidad</button>
            <label>{ initial }</label>
            <button onClick= {plus}>Sumar 1 cantidad</button>
            <br/>
            <button onClick= {buy}>Comprar!</button>
        </div>
    )
};

export default ItemCount;