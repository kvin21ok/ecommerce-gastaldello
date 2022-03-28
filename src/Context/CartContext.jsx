import React, { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children})=> {
    const [cartList, setCartList] = useState([]);

    const addCart = (item)=>{
        setCartList ([...cartList, item])
    }
    
    const inCart = (id)=>{
        return cartList.some( (prod)=> prod.id === id)
    }

    const deleteCart = ()=>{
        setCartList( [] )
    }

    const deleteItem = (id) =>{
        setCartList(cartList.filter(item => item.id !== id))
    }

    const totalItem = ()=>{
        return cartList.reduce((acum, prod) => acum +=prod.cantidad , 0)
    }

    const total = () =>{
        return cartList.reduce((acum, prod) => acum + (prod.cant * prod.price) , 0)
    }

    return(
        <CartContext.Provider value = {{
            cartList,
            addCart,
            total,
            inCart,
            deleteItem,
            deleteCart,
            totalItem
        }}>

            {children}

        </CartContext.Provider> 
    )
};

export default CartContextProvider;