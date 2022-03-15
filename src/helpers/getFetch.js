export const Products = [
    {id: `001`, name: `Hamburguesa`, category:`HAMBURGUESAS`, price: `100 usd`, description: `esto es una breve descripcion de producto 001` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `002`, name: `Pizza`, category:`PIZZAS`, price: `200 usd`, description: `esto es una breve descripcion de producto 002` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `003`, name: `Papas fritas`, category:`PAPAS FRITAS`, price: `300 usd`, description: `esto es una breve descripcion de producto 003` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `004`, name: `Empanadas`, category:`EMPANADAS`, price: `400 usd`, description: `esto es una breve descripcion de producto 004` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `005`, name: `Bebidas`, category:`BEBIDAS`, price: `500 usd`, description: `esto es una breve descripcion de producto 005` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
];

export const getFetch = new Promise((resolve, reject) =>{
    let url = `MyArray`;
    if (url === `MyArray`) {
        setTimeout(()=>{
            resolve(Products);
        },2000);
    } else {
        reject(`404 not found`);
    }
});