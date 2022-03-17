import {React, useState} from "react";

const ItemCount = ({initial, stock, onAdd})=>{
    const [count, setCount] = useState (initial);

    const plus = ()=>{
        count < stock && setCount(count + 1)
    };

    const minus = ()=>{
        count > 1 && setCount(count - 1)
    };

    const add = ()=>{
        add (count)
    }

    return(
        <div id="counter">
            <button onClick= {minus} title= "Quitar">Quitar 1 cantidad</button>
            <label>{ count }</label>
            <button onClick= {plus} title= "Agregar">Sumar 1 cantidad</button>
            <br/>
            <button onClick= {() => onAdd(count)}>Agregar al carrito! </button>
        </div>
    )
};

export default ItemCount;