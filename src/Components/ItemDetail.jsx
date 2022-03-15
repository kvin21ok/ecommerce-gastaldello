import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ name, price, pictureUrl, description })=>{
    const onAdd = (item) => console.log(item);
    
    return(
        <div>
            
            <h4> {name} </h4>

            <p> {price} </p>

            <img src={pictureUrl} alt={name} height="200px" />

            <p> {description} </p>

            <ItemCount initial={0} stock={10} onAdd={onAdd} />

        </div>
    )
};

export default ItemDetail;