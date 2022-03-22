import { useCartContext } from "../Context/CartContext";


const Cart = ()=>{
    const {cartList, deleteCart} = useCartContext ()
    console.log (cartList)

    return(
        <div>

            {cartList.map(item => <li> {item.name} / {item.cantidad} / precio por unidad: {item.price} </li>)}
            
            <button onClick={deleteCart}>Vaciar carro</button>

        </div>
    )
};

export default Cart;