export const Products = [
    {id: `001`, name: `producto 001`, price: `100 usd`, pictureUrl: <img src="https://cdn-icons-png.flaticon.com/512/1170/1170577.png"></img>},
    {id: `002`, name: `producto 002`, price: `200 usd`, pictureUrl: <img src="https://cdn-icons-png.flaticon.com/512/1170/1170577.png"></img>},
    {id: `003`, name: `producto 003`, price: `300 usd`, pictureUrl: <img src="https://cdn-icons-png.flaticon.com/512/1170/1170577.png"></img>},
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