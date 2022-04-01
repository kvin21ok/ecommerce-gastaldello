import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore, } from "firebase/firestore";
import { useState } from "react";



const Cart = ()=>{
    
    const [dataForm, setDataForm] = useState ({
        name: '', email:'', phone:''
    })
    
    const [id, setId] = useState('')
    
    const {cartList, deleteCart, deleteItem, total, totalItem} = useCartContext ()

    const orderGenerate = async (e)=>{
        e.preventDefault();
        let order = {};
        order.buyer = dataForm
        order.total = total()
        order.prods = cartList.map(cartProd =>{
            const prodId = cartProd.id;
            const prodName = cartProd.name
            const prodPrice = cartProd.price
        
            return {prodId, prodName, prodPrice}
        })
        console.log(order) 


        const db = getFirestore()
        const queryCollectionSet = collection(db, 'orders')
        addDoc(queryCollectionSet, order)
        .then(resp => setId(resp.id))
        .catch(err => console.error(err))
        .finally(() => console.log('finish'))

        
        
    }
    const handleChange = (e) => {
        setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
    }
    
    return(
        <div>
            {totalItem (0)?
                
                <div>
                    {id.length !== '' && `el id de la compra es: ${id}`}

                    {cartList.map(item => <li> {item.name} / {item.cantidad} / precio por unidad: {item.price}  <button onClick={ ()=> deleteItem (item.id) }>Quitar del carro</button> </li>)}

                    <h3> Monto Total: $ { total() }</h3>

                    <button onClick={deleteCart}>Vaciar carrito</button>  
                    
                    <Link to="/"><button>Volver al home</button></Link>

                    <form 
                onSubmit={orderGenerate}
                                
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                    onChange={handleChange}
                    
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='phone' 
                    value={dataForm.phone}
                    onChange={handleChange}
                    
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                    onChange={handleChange}
                    
                /><br/>
                <button onClick = {orderGenerate}>Comprar carrito</button>
            </form>

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