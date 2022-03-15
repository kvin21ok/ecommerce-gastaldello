import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({name, price, pictureUrl, id, category})=>{
    const onAdd = (item) => console.log(item);

    return(
        <div>            

            <h3> {name} </h3>

            <h5> {category} </h5>

            <img src={pictureUrl} alt={name} height ="300px" />

            <p> {price} </p>

            <Link to= {`detail/${id}`}> <button> Ver detalles </button> </Link>

            <ItemCount initial={0} stock={10} onAdd={onAdd} />

        </div>
    )
};

export default Item;