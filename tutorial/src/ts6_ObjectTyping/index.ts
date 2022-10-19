
import type { User,Product,PaymentOption } from "./types";

console.log({
    id:1,
    balance:5000,
    isActive:"active",
    isVerified:"email_verified",
    name:"Jonas",
    token:"SDPJSADJASDAas*ocao€\£¢ÎSÂÔSAX"
} as User);

const myObj:Product = {
    //all parameters optional so there's no error.
};


const paymentOptions={
id:2,
name:"Iyzico",
status:true,
myKey:{
    expiredDate:Date.now(),
    status:"ACTIVE",
    token:"ASDASD21ÇO4EÇ0CSO-sacodmdmkk1*4jc1221"
}
} as PaymentOption;

console.log(paymentOptions);