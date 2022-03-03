import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greetings })=>{
    return(
        <div>
            <h3>{ greetings }</h3>
            <ItemCount/>
            <ItemList/>
        </div>
    )
};

export default ItemListContainer;