import Product from "./store";

export const listAll=<T>(param:T[])=>{
    param.forEach(item => {
        console.log(item);
    });
}

export const listAllChildOfProduct=<T extends Product>(param:T[])=>{
    param.forEach(item=>console.log(item));
}