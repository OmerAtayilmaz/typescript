import Product from "./Product";

const fs=require('fs');

const path:string="./trendyol/API/products.json";
const data=JSON.parse(fs.readFileSync(path,"utf-8"));

const productList:Product[]=[];

data.forEach((el,index:number,arr:[]) => {
    productList.push(
        new Product(
            el.id,
            el.title,
            el.price,
            el.description,
            el.category,
            el.image,
            el.rating.rate,
            el.rating.count
        )
    );
});

productList.forEach(el=>{console.log(el.getTitle());console.log(el.getPrice());});
