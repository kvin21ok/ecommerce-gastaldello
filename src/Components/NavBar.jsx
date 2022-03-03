import React from "react";
import CarritoImg from "./CartWidget";

const NavBar =  ()=>{
    return(
        <div>
            <ul>
                <a id="ecommerceName">EL EMPORIO</a>            
                <a href ="#">inicio</a>
                <a href ="#">ofertas</a>
                <a href ="#">catalogos</a>
                <a href ="#">contactanos</a>
                <a href = "#"><CarritoImg/></a>
            </ul>
        </div>
    )
}
export default NavBar