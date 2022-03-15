import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto })=>{
    const onAdd = (item) => console.log(item);
    
    return(
        <div>
            
            <h4> {producto.name} </h4>

            <p> {producto.price} </p>

            <img src={producto.pictureUrl} alt={producto.name} height="200px" />

            <p> {producto.description} </p>

            <ItemCount initial={0} stock={10} onAdd={onAdd} />

        </div>
    )
};

export default ItemDetail;