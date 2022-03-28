import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import CarritoImg from "./CartWidget";

const NavBar =  ()=>{

    const {totalItem} = useCartContext ()
    return(
        <div>
            <ul>
                <NavLink to="/" id="ecommerceName"> EL EMPORIO DEL BAJON </NavLink>
                <NavLink to="category/:hamburguesas"> HAMBURGUESAS</NavLink>
                <NavLink to="category/:pizzas"> PIZZAS</NavLink>
                <NavLink to="category/:papas fritas"> PAPAS FRITAS</NavLink>
                <NavLink to="category/:empanadas"> EMPANADAS</NavLink>
                <NavLink to="category/:bebidas"> BEBIDAS</NavLink>
                <NavLink to="/cart" id ="carrito">  <CarritoImg/> {totalItem ()} </NavLink>
            </ul>
        </div>
    )
};
export default NavBar;