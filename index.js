var message = "Hello World From Typescript";
var code = "npx a.ts && node a.js";
var test = "value";
console.log(message);
console.log(code);
var ex = "Muq";
function greeter(isim) {
    return "Merhaba " + this.isim;
}
var age = 25.7;
var isTrue = true;
//special types:
//any disable checking type
var v = true;
var w = 1;
w = "string"; // no error
w = {
    checkVariable: function () {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type?
// w.checkVariable(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
    w.checkVariable();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
var idList = [1, 2, 3, 4, 5, 6, 7];
var dataList = [25, "MYSTRING"]; //sırasıyla çalışır
var i = undefined;
function deneme() {
}
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLUE"] = 1] = "BLUE";
    Colors[Colors["GREEN"] = 2] = "GREEN";
})(Colors || (Colors = {}));
;
