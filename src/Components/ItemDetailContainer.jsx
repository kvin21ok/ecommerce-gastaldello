import  { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = ()=>{
    const [producto, setProducto] = useState({});

    const [load, setLoad] = useState (true);

    const { detailId } = useParams ()


    useEffect(()=>{
        const db = getFirestore()
        const queryDb = doc (db, 'items', detailId)
        getDoc(queryDb)
        .then(resp => setProducto({id: resp.id, ...resp.data()}))
        .finally(()=>setLoad(false))
    },[detailId])
    
    return (
        load ? <p> Cargando detalles...</p>:
        
        <ItemDetail producto={producto}/>
    )
};

export default ItemDetailContainer;