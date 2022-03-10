import React from "react";

const ItemDetail = ({ producto })=>{
    return(
        <div>
            
            <h4> {producto.name} </h4>

            <p> {producto.price} </p>

            <img src={producto.pictureUrl} alt={producto.name} height="200px" />

            <p> {producto.description} </p>

        </div>
    )
};

export default ItemDetail;