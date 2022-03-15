import  { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ()=>{
    const [producto, setProducto] = useState({});

    const [load, setLoad] = useState (true);

    const { detailId } = useParams ()
    console.log(detailId);


    useEffect( ()=>{
        getFetch
        .then(resp => setProducto (resp.find(prod => prod.id === detailId)))
        .finally(()=>setLoad(false))
    }, [detailId])
    console.log(producto)

    return (
        load ? <p> Cargando detalles...</p>:
        
        <ItemDetail producto={producto}/>
    )
};

export default ItemDetailContainer;