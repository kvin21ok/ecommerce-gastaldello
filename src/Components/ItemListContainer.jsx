import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = ()=>{
    const [productos, setProductos] = useState ([]);

    const [loading, setLoading] = useState (true);

    const {categoryId} = useParams()

    useEffect(()=>{
        if (categoryId){
            const db = getFirestore()
            const queryCollection = collection(db, 'items')
            const queryFilter = query( queryCollection, where('category', '==', categoryId) )
            getDocs(queryFilter)
            .then(resp=> setProductos( resp.docs.map(item=>({id: item.id, ...item.data()}) )  ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        
        }else{
            const db = getFirestore()
            const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
            .then(resp=> setProductos( resp.docs.map(item=>({id: item.id, ...item.data()}) )  ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    },[categoryId])

    console.log(productos)

    return (
        loading ? <p> Cargando... </p> : <ItemList productos={productos} />
        );
};

export default ItemListContainer;