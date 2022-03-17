import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({name, price, pictureUrl, id, category})=>{
    const [count, setCount] = useState (null)

    const onAdd = (cantidad) =>{

        console.log(cantidad);
        setCount (cantidad);

    }        

    return(
        <div>            

            <h3> {name} </h3>

            <h5> {category} </h5>

            <img src={pictureUrl} alt={name} height ="300px" />

            <p> {price} </p>


            {count ?
                
                <Link to= "/cart">
                    <button>Terminar compra e ir al carrito!</button>
                </Link>
            :
            <div> 

                <Link to= {`detail/${id}`}> <button> Ver detalles de {name} </button> </Link>
                
                <ItemCount initial={1} stock={10} onAdd={onAdd} />

            </div>
            
        }

        </div>
    )
};

export default Item;