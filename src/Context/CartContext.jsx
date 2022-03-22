import React, { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children})=> {
    const [cartList, setCartList] = useState([]);

    const addCart = (item)=>{
        setCartList ([...cartList, item])
    }

    const deleteCart = ()=>{
        setCartList( [] )
    }

    const inCart = (id)=>{
        return cartList.some( (prod)=> prod.id === id)
    }

    return(
        <CartContext.Provider value = {{
            cartList,
            addCart,
            inCart,
            deleteCart
        }}>

            {children}

        </CartContext.Provider> 
    )
};

export default CartContextProvider;