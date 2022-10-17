"use strict";
let myname = "Jonas";
function check() {
    myname = 25;
    myname = "adasdasd";
    if (typeof myname === 'string') {
        myname.toLowerCase();
        //stringe ozel fonksiyonlar gelir
    }
    if (typeof myname === 'number') {
        //myname.toLowerCase();
    }
}
let b = 25;
if (b instanceof Number) {
    console.log("HELL YEAH?");
}
//OBJECT
const Person = {
    isim: "Ahmet",
    kanal: "TRT",
    bilmem: "C"
};
let res = true;
res = 25;
