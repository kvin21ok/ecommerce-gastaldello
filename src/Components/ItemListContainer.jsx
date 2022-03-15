import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemList from "./ItemList";

const ItemListContainer = ()=>{
        const [productos, setProductos] = useState ([]);

        const [loading, setLoading] = useState (true);

        const { categoryName } = useParams ();
    
        useEffect(()=>{
            if (categoryName){
                getFetch
                .then((respuesta)=>{
                return respuesta
                })
                .then((res) => setProductos(res.filter(prod => prod.category=== categoryName)))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))
            }else{
            getFetch
            .then((respuesta)=>{
            return respuesta
            })
            .then((res) => setProductos(res))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    
        },[categoryName])
        console.log(productos);
        console.log(categoryName);

    return (
        loading ? <p> Cargando... </p> : <ItemList productos={productos} />
        );
};

export default ItemListContainer;