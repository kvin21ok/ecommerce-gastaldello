import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";


const Cart = ()=>{
    const {cartList, deleteCart, deleteItem, total} = useCartContext ()


    const [cartRender, setCartRender] = useState ()
    console.log (cartList)

    return(
        <div>
            {cartRender?
                <div>
                    <p>Todavia no hay productos añadidos al carrito</p> <Link to="/"><button>Vamos a comprar!</button></Link>
                </div>
            :
                <div>
                    {cartList.map(item => <li> {item.name} / {item.cantidad} / precio por unidad: {item.price} <button onClick={ ()=> deleteItem (item.id) }>Quitar del carro</button> </li>)}

                    <h3> Monto Total: $ { total() } </h3>

                    <button onClick={deleteCart}>Vaciar carro</button> <button>Comprar</button>
                </div>   
        }    
        </div>
    )
};

export default Cart;