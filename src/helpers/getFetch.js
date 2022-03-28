export const Products = [
    {id: `001`, name: `Hamburguesa completa`, category:`hamburguesas`, price: `100 usd`, stock: `15`, description: `esto es una breve descripcion de producto 001` , pictureUrl: "https://media.istockphoto.com/vectors/fast-food-black-burger-icon-is-isolated-on-white-background-vector-id1268952827?k=20&m=1268952827&s=612x612&w=0&h=4xqb7gDHtWz1z1xmeZDFk8XZ5qowMZ2LEMsYy-wGvo8="},
    {id: `002`, name: `Pizza especial`, category:`pizzas`, price: `200 usd`, stock: `20`, description: `esto es una breve descripcion de producto 002` , pictureUrl: "https://png.pngtree.com/png-vector/20190214/ourlarge/pngtree-vector-pizza-icon-png-image_449743.jpg"},
    {id: `003`, name: `Papas fritas krispy`, category:`papas fritas`, price: `300 usd`, stock: `50`, description: `esto es una breve descripcion de producto 003` , pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPoetxFNqWloH2EZloiYPkWwcsVD3nPG-xSTLmvGulF_kGRV7Gi_95bW0gre_v-ZFTQQ&usqp=CAU"},
    {id: `004`, name: `Empanadas salteñas`, category:`empanadas`, price: `400 usd`, stock: `20`, description: `esto es una breve descripcion de producto 004` , pictureUrl: "https://us.123rf.com/450wm/sekinekhanim/sekinekhanim2103/sekinekhanim210301136/165718478-.jpg?ver=6"},
    {id: `005`, name: `Coca Cola`, category:`bebidas`, price: `500 usd`, stock: `100`, description: `esto es una breve descripcion de producto 005` , pictureUrl: "https://cdn.icon-icons.com/icons2/1115/PNG/512/1486071970-12_79333.png"},
    {id: `006`, name: `Cheese burger`, category:`hamburguesas`, price: `100 usd`, stock: `17`, description: `esto es una breve descripcion de producto 006` , pictureUrl: "https://media.istockphoto.com/vectors/fast-food-black-burger-icon-is-isolated-on-white-background-vector-id1268952827?k=20&m=1268952827&s=612x612&w=0&h=4xqb7gDHtWz1z1xmeZDFk8XZ5qowMZ2LEMsYy-wGvo8="},
    {id: `007`, name: `4 quesos`, category:`pizzas`, price: `700 usd`, stock: `25`, description: `esto es una breve descripcion de producto 007` , pictureUrl: "https://png.pngtree.com/png-vector/20190214/ourlarge/pngtree-vector-pizza-icon-png-image_449743.jpg"},
    {id: `008`, name: `Papas noissette`, category:`papas fritas`, price: `50 usd`, stock: `15`, description: `esto es una breve descripcion de producto 008` , pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPoetxFNqWloH2EZloiYPkWwcsVD3nPG-xSTLmvGulF_kGRV7Gi_95bW0gre_v-ZFTQQ&usqp=CAU"},
    {id: `009`, name: `Empanadas patriotas`, category:`empanadas`, price: `15 usd`, stock: `15`, description: `esto es una breve descripcion de producto 009` , pictureUrl: "https://us.123rf.com/450wm/sekinekhanim/sekinekhanim2103/sekinekhanim210301136/165718478-.jpg?ver=6"},
    {id: `010`, name: `Fanta`, category:`bebidas`, price: `100 usd`, stock: `15`, description: `esto es una breve descripcion de producto 010` , pictureUrl: "https://cdn.icon-icons.com/icons2/1115/PNG/512/1486071970-12_79333.png"},
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