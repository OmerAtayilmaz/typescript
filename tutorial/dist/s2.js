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
const dizi = []; //string dizisi
const dizi2 = []; // string dizisi
const dizi3 = [];
const arr = [];
arr.push(25, false, 25, 25, 25, false, "Hello");
//yoksa tanımlanmamışsa hata verir
let a;
a === null || a === void 0 ? void 0 : a.toExponential();
//tuples
const myDizi = ["Ahmet", "Terliksi", 25];
myDizi[2].toExponential(); //sayıya ayrı!
myDizi[1].charAt(3); //stringe ayrı method gelıyor
