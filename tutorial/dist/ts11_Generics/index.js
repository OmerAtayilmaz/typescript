"use strict";
class ABC {
    constructor(breath) {
        this.breath = breath;
    }
    getBreath() {
        return this.breath;
    }
}
class Word extends ABC {
}
function Hello(param) {
    return new Word("ASDSAD");
}
const teASDSADst = Hello(new ABC("adsadasd"));
function ReturnerX(param) {
    return param;
}
const asdsadc = ReturnerX("HelloWorld");
