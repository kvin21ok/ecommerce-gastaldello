import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemList from "./ItemList";

const ItemListContainer = ()=>{
        const [productos, setProductos] = useState ([]);

        const [loading, setLoading] = useState (true);

        const { categoryId } = useParams ();
    
        useEffect(()=>{
            if (categoryId){
                getFetch
                .then((respuesta)=>{
                return respuesta
                })
                .then((res) => setProductos(res.filter(prod => prod.category=== categoryId)))
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
    
        },[categoryId])
        console.log(productos);
        console.log(categoryId);

    return (
        loading ? <p> Cargando... </p> : <ItemList productos={productos} />
        );
};

export default ItemListContainer;