import React from "react";
import { NavLink } from "react-router-dom";
import CarritoImg from "./CartWidget";

const NavBar =  ()=>{
    return(
        <div>
            <ul>
                <NavLink to="/" id="ecommerceName"> EL EMPORIO DEL BAJON </NavLink>
                <NavLink to="category/:hamburguesas"> HAMBURGUESAS</NavLink>
                <NavLink to="category/:pizzas"> PIZZAS</NavLink>
                <NavLink to="category/:papas fritas"> PAPAS FRITAS</NavLink>
                <NavLink to="category/:empanadas"> EMPANADAS</NavLink>
                <NavLink to="category/:bebidas"> BEBIDAS</NavLink>
                <NavLink to="/cart"> <CarritoImg/> </NavLink>
            </ul>
        </div>
    )
};
export default NavBar;