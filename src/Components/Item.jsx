import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getFetch, Products,} from "../helpers/getFetch";
import ItemCount from "./ItemCount";

const Item = ()=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    useEffect(()=>{
        getFetch
        .then((respuesta)=>{
        return respuesta
        })
        .then((res) => setProductos(res))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))

    },[])
    console.log(productos)

    return(
        <div>
            { loading ? <h1>Cargando...</h1> 
            :
            Products.map((prod)=> <li key={prod.id} className = "item"> {prod.name} {prod.price} {prod.pictureUrl} <ItemCount/> </li>)}
        </div>
    )
}

export default Item;