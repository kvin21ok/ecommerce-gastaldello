import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const Item = ({name, price, pictureUrl, id, category})=>{
    
    const {inCart} = useCartContext ()

    return(
        <div>            

            <h3> {name} </h3>

            <h5> {category} </h5>

            <img src={pictureUrl} alt={name} height ="100px" />

            <p> ${price} </p>

            {inCart(id) ?
                <Link to="/cart"><button>Este producto ya esta añadido en el carrito, vamos alla!</button></Link>
            :
                <Link to= {`detail/${id}`}> <button> Ver detalles de {name} </button> </Link>
            }

        </div>
    )
};

export default Item;