
let myname: string | number = "Jonas";



function check(){
    myname=25;
    myname="adasdasd";

    if(typeof myname ==='string'){
        myname.toLowerCase();
        //stringe ozel fonksiyonlar gelir
    }

    if(typeof myname==='number'){
        //myname.toLowerCase();
    }
}

let b:any=25;
if(b instanceof Number){
    console.log("HELL YEAH?");
}



//OBJECT
const Person:{
    isim:string;
    kanal:string;
    bilmem:"A"|"B"|"C";
}={
    isim:"Ahmet",
    kanal:"TRT",
    bilmem:"C"
};