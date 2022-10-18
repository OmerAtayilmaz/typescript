type Person ={name:string;age:number;status:boolean;token?:string};

const user1: Person = {
    name:"Jonas",
    age:25,
    status:true,
    token:"AsTlRsF21SSStYuP"
};
const user2:Person={
    name:"Felicity",
    age:20,
    status:false,
    //because token is optional
}

const userList:Person[]=[
    {name:"UserName",age:18,status:true},
    {name:"UserName2",age:28,status:false},
    {name:"UserName3",age:25,status:true},
];


type Colors='red'|'green'|'blue';
type CustomColors='magenta'|'cyan'|'turqoise';

type AllColors=Colors | CustomColors;
const myColor:(AllColors)[] =['blue',"green","green","red","magenta"];
 

//Obje Birleştirme

type A={
    name:string;
    quantity:number;
}
type B={
    price:number,
    isActive?:boolean
};

type AB=A & B;
const data:AB={
    name:"Hello",
    quantity:25,
    price:120,
    isActive:true
}
