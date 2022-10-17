var myname = "Jonas";
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
var b = 25;
if (b instanceof Number) {
    console.log("HELL YEAH?");
}
//OBJECT
var Person = {
    isim: "Ahmet",
    kanal: "TRT",
    bilmem: "C"
};
var res = true;
res = 25;
var dizi = []; //string dizisi
var dizi2 = []; // string dizisi
var dizi3 = [];
var arr = [];
arr.push(25, false, 25, 25, 25, false, "Hello");
//yoksa tanımlanmamışsa hata verir
var a;
a === null || a === void 0 ? void 0 : a.toExponential();
