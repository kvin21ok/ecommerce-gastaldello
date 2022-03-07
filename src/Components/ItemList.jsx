import React from "react";
import Item from "./Item";

const ItemList = ({productos})=>
    productos.map((item) => <Item key={item.id} {...item}  />);

export default ItemList;