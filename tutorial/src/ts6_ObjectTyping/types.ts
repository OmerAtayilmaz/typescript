
export type User= {
    id:number;
    name:string;
    token:string;
    isActive:'active'|'inactive'|'deleted';
    isVerified:boolean|'email_verified'|'number_verified';
    balance:number;
}


//Partial makes optional all the parameters in the object.
export type Product=Partial<{
    id:number;
    name:string;
    quantity:number;
    price:number;
}>;


//customizable key

export type PaymentOption={
    id:number,
    name:string,
    status:'valid'|'invalid'|boolean,
    [options:string]:any,
}

//Records used for creating object with specific types
export const WatchRecord:Record<number,{user:string,pass:string}>={
    25:{
        user:"abc",
        pass:"123"
    },
    14:{
        user:"def",
        pass:"345",
    },
    12:{
        user:"geh",
        pass:"678"
    },
};