import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";


const Cart = ()=>{
    const {cartList, deleteCart, deleteItem, total, totalItem} = useCartContext ()

    return(
        <div>
            {totalItem (0)?
                
                <div>
                    {cartList.map(item => <li> {item.name} / {item.cantidad} / precio por unidad: {item.price}  <button onClick={ ()=> deleteItem (item.id) }>Quitar del carro</button> </li>)}

                    <h3> Monto Total: $ { total() } </h3>

                    <button onClick={deleteCart}>Vaciar carro</button> <button>Comprar</button> 
                    
                    <Link to="/"><button>Volver al home</button></Link>
                </div>   
            :
                <div>
                    <p>Todavia no hay productos añadidos al carrito</p> <Link to="/"><button>Vamos a comprar!</button></Link>
                </div>
            }    
        </div>
    )
};

export default Cart;