import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";


const ItemDetail = ({ producto })=>{
    const [count, setCount] = useState (null)

    const {addCart, inCart} = useCartContext()

    const onAdd = (cant) => {
        
        console.log(cant);
        setCount (cant);
        addCart ({...producto, cantidad:cant})
    }
    
    return(
        <div>
            
            <h4> {producto.name} </h4>

            <p> ${producto.price} </p>

            <img src={producto.pictureUrl} alt={producto.name} height="300px" />

            <p> {producto.description} </p>

            { inCart(producto.id) ?
                <div>
                    <Link to="/cart"><button>Este producto ya esta añadido en el carrito, vamos alla!</button></Link>

                    <Link to= "/"><button>Volver al home</button></Link>
                </div>
            :

                count ? 
                    <div>
                        <Link to="/cart"><button>Terminar compra e ir al carrito!</button></Link>

                        <Link to= "/"><button>Volver al home</button></Link>
                    </div>
                :
                        <div>
                        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />

                        <Link to= "/"><button>Volver al home</button></Link>
                    </div>
            
            }

        </div>
    )
};

export default ItemDetail;