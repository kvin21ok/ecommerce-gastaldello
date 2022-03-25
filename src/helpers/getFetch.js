export const Products = [
    {id: `001`, name: `Hamburguesa completa`, category:`hamburguesas`, price: `100 usd`, stock: `15`, description: `esto es una breve descripcion de producto 001` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `002`, name: `Pizza especial`, category:`pizzas`, price: `200 usd`, stock: `20`, description: `esto es una breve descripcion de producto 002` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `003`, name: `Papas fritas krispy`, category:`papas fritas`, price: `300 usd`, stock: `50`, description: `esto es una breve descripcion de producto 003` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `004`, name: `Empanadas salteñas`, category:`empanadas`, price: `400 usd`, stock: `20`, description: `esto es una breve descripcion de producto 004` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `005`, name: `Coca Cola`, category:`bebidas`, price: `500 usd`, stock: `100`, description: `esto es una breve descripcion de producto 005` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `006`, name: `Cheese burger`, category:`hamburguesas`, price: `100 usd`, stock: `17`, description: `esto es una breve descripcion de producto 006` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `007`, name: `4 quesos`, category:`pizzas`, price: `700 usd`, stock: `25`, description: `esto es una breve descripcion de producto 001` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `008`, name: `Papas noissette`, category:`papas fritas`, price: `50 usd`, stock: `15`, description: `esto es una breve descripcion de producto 001` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `009`, name: `Empanadas patriotas`, category:`empanadas`, price: `15 usd`, stock: `15`, description: `esto es una breve descripcion de producto 001` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
    {id: `010`, name: `Fanta`, category:`bebidas`, price: `100 usd`, stock: `15`, description: `esto es una breve descripcion de producto 001` , pictureUrl: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png"},
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