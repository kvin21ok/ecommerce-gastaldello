import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greetings })=>{
    return(
        <div>
            <h3>{ greetings }</h3>
            <ItemCount/>
        </div>
    )
};

export default ItemListContainer;