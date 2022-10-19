"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//number dondurecegını belirttik
function F() {
    return 25;
}
//tuple dondurecegını belirttik
function F1() {
    return [25, "Here it is"];
}
//return nothing.
function F2() {
}
function LogPerson(isim, soyisim, yas) {
    console.log({
        isim, soyisim, yas
    });
}
LogPerson("Kadir", "Yazıcı", 25);
//promises
const getData = (URL, Options) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        resolve(25);
    });
});
getData("MYURL", "MYOPTIONS").then(_ => {
    console.log("Hello World");
});
