import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greetings })=>{
    return(
        <div>
            <h3>{ greetings }</h3>
            <ItemList/>
        </div>
    )
};

export default ItemListContainer;