import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto })=>{
    const [count, setCount] = useState (null)

    const onAdd = (cantidad) => {
        
        console.log(cantidad);
        setCount (cantidad);
    }
    
    return(
        <div>
            
            <h4> {producto.name} </h4>

            <p> {producto.price} </p>

            <img src={producto.pictureUrl} alt={producto.name} height="200px" />

            <p> {producto.description} </p>

            { count ?

                <Link to="/cart">
                    <button>Terminar compra e ir al carrito!</button>
                </Link>
            : 
                <ItemCount initial={1} stock={10} onAdd={onAdd} />
            
            }

        </div>
    )
};

export default ItemDetail;