
//Price 
interface Bottle{
    size:string;
    price:number;
    quantity:number;
    [anahtar:string]:any
}

const b1:Bottle={
    size:"Large",
    price:54,
    quantity:25
}

/*
    Interfaceler genişletilebilir-düşürülebilir.
    Interfaceler extends edilebilir.
*/


//type ile tip genişletme
type FunctionThatReturnsBoolean=(id:string,password:string)=>boolean;

const myFun:FunctionThatReturnsBoolean=(id,password)=>{
    return true;
}


//interface 

interface Computer{
    brand:string;
    price:number;
}

const myBrand:Computer["brand"]="Hello From String Text"; 
//brandin tipini myBrande atadı eğer yukarıyı degistirirsek asagısı da degisir.

// interface ile dizi


interface MyArray{
    [index:number]:string | number
}

const awesomeArray:MyArray={0:1,1:"NextValue"}; //çünkü her arr bir objedir.
const normalArray:MyArray=[0,1,"AwesomeHUh?"];



type c=(id:string)=>string; //type ile function oluşturma
const myFunnn:c=()=>"Awesome";

//function interface
interface IFun{
    (text:string):void; //bu interface  void döndürecek diyoruz
    (text:string):boolean;
    //hepsi aynı türde döndürmelidir.
}

const HereItIs:IFun=(text)=>{
    return true;
};


interface IFunction{
    (isim:string,tekrar:number):void;
    (isim:string,text:string):void;
}

const huhExample:IFunction=(isim,tekrar)=>{
    
}

huhExample("adasda","adsdsad");
huhExample("Omer",25);