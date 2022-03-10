import {React, useState, useEffect} from "react";
import { getFetch } from "../helpers/getFetch";
import ItemList from "./ItemList";

const ItemListContainer = ()=>{
        const [productos, setProductos] = useState ([])
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

    return (
        loading ? <p> Cargando... </p> : <ItemList productos={productos} />
        );
};

export default ItemListContainer;