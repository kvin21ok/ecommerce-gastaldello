import React from "react";
import ItemCount from "./ItemCount";

const Item = ({name, price, pictureUrl})=>{
    const onAdd = (item) => console.log(item);

    return(
        <div>
            <h3> {name} </h3>

            <img src={pictureUrl} alt={name} />

            <p> {price} </p>

            <ItemCount initial={0} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default Item;