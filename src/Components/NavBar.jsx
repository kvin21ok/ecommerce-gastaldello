import React from "react";
import CarritoImg from "./CartWidget";

const Navigation =  ()=>{
    return(
        <div>
            <ul>
                <a id="ecommerceName">ecommerce</a>            
                <a href ="#">inicio</a>
                <a href ="#">ofertas</a>
                <a href ="#">catalogos</a>
                <a href ="#">contactanos</a>
                <a href = "#"><CarritoImg/></a>
            </ul>
        </div>
    )
}
export default Navigation