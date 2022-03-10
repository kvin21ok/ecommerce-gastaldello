import  { React, useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ()=>{
    const [producto, setProducto] = useState({})
    const [load, setLoad] = useState (true)

    useEffect( ()=>{
        getFetch
        .then(resp => setProducto (resp.find(prod =>  prod.id === `001`)))
        .finally(()=>setLoad(false))
    }, [])
    console.log(producto)

    return (
        load ? <p> Cargando detalles...</p>:
        
        <ItemDetail producto={producto}/>
    )
};

export default ItemDetailContainer;