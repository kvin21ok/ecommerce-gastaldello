import React from "react";
import { NavLink } from "react-router-dom";
import CarritoImg from "./CartWidget";

const NavBar =  ()=>{
    return(
        <div>
            <ul>
                <NavLink to="/" id="ecommerceName"> EL EMPORIO DEL BAJON </NavLink>
                <NavLink to="category/:HAMBURGUESAS"> HAMBURGUESAS</NavLink>
                <NavLink to="category/:PIZZAS"> PIZZAS</NavLink>
                <NavLink to="category/:PAPAS FRITAS"> PAPAS FRITAS</NavLink>
                <NavLink to="category/:EMPANADAS"> EMPANADAS</NavLink>
                <NavLink to="category/:BEBIDAS"> BEBIDAS</NavLink>
                <NavLink to="/cart"> <CarritoImg/> </NavLink>
            </ul>
        </div>
    )
};
export default NavBar;