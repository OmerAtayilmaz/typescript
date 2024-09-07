"use strict";
var Product = /** @class */ (function () {
    function Product() {
        this.API_KEY = 'KASKDSAODKAOSDKO2OP1K3OPK213KOASDAS';
        this.belongsTo = {
            id: "A000",
            name: "John Doe",
            age: 29,
            email: "doejohn@support.io"
        };
    }
    Product.API_VERSION = 3;
    return Product;
}());
var prod = new Product();
//alacağı parametrenin tipini belirttik
var increaseVersion = function (version) { return ++version; };
//methodun döndüreceği objenin tipini belirttik, daha sağlıklı bir kullanım için böyle dönüş tiplerini model haline getirmeliyiz.
var promptVersion = function (id) { return ({
    id: id,
    name: 'Michael',
    version: increaseVersion(Product.API_VERSION)
}); };
var result = promptVersion("A001");
//generic tanımlama syntaxı
var numbers = [1, 2, 3, 4, 5, 6, "12"];
var stringOrNum = [1, 'Hello', 2024, 'Doe'];
//array elementlerinin *sırasıyla* tipini belirledik.
var tuple = [2024, "Hi there!"];
// literal type tanımlaması
var yaziTura = function () { return Math.random() < 0.5 ? 'Yazi' : 'Tura'; };
//Switch case durumları için birebir*
var Suit;
(function (Suit) {
    Suit["HEARTS"] = "Hearths";
    Suit["SPADES"] = "Spades";
    Suit["DIAMONDS"] = "Diamonds";
    Suit["CLUBS"] = "Clubs";
})(Suit || (Suit = {}));
// void, null and Undefined
var logger = function (sth) { return console.log(sth); };
//void beklediğimiz gibi geriye bir şey döndürmedi 
logger("Hehehehe This is my console.log");
//hata vermedi çünkü type opsiyonel
var examleFoo = { id: null, price: 25 };
//any and unkown
//tipini bilmediğiz şeyi unknown yani bilinmeyen yapabiliriz.
var specialLogger = function (sth) { return console.log(sth.toUpperCase()); };
var p1 = { id: 1, name: 'Apple Watch', price: 6999 };
var p2 = 'SHOE'; // opsiyonlardan başka bir şey atanamaz.
var exampleText = "Here is an awesome example"; //no error
exampleText = 25; // no error
// Onions and Intersections - Güzel Bir Örnek =)
var userCreatedEvent = {
    eventType: 'USER_CREATED',
    parameters: {
        id: 'uuid-1',
        name: 'Micheal',
        email: 'hello@email.com'
    }
};
var userDeletedEvent = {
    eventType: 'USER_DELETED',
    parameters: {
        id: '1'
    }
};
// Bu şekilde kullanırsak kontrol etmesi çok zor, hatta bir tık imkansız olabilir.
var handleUserEvent = function (event) {
    var _a;
    if (event.eventType === 'USER_CREATED') {
        console.log(event.parameters.name);
        return;
    }
    if (event.eventType === 'USER_DELETED') {
        console.log(event.parameters.id);
        // Halbuki deleted olan user'da name yoktu, bu şekilde çalıştırırsak runtime-exception atar!! Bu terslikte bir iş var (!)
        console.log((_a = event.parameters.name) === null || _a === void 0 ? void 0 : _a.toUpperCase());
        return;
    }
};
//Never, asla olmayacak durumlar için kullanılır
//never tipi döndürüyor çünkü asla return olmayacak ve throw Error(x) çalışacaktır
var unreachableCaseError = function (x) {
    throw Error(x);
};
var handleBetterUserEvent = function (event) {
    if (event.eventType === 'USER_CREATED') {
        //event.parameters. USER_CREATED eventları gelmekte
        return;
    }
    if (event.eventType === 'USER_DELETED') {
        //.name hiçbir şekilde kabul edilmemekte, çünkü UserDeletedEvent interfacesini referans alıyor.
        //console.log(event.parameters.name);
        return;
    }
    //niye çalıştı? Çünkü %100 ihtimalle 2 if içerisinden biri çalışacak ve unreachableCaseError çalışmayacaktır. :) 
    // methodların sonuna yapıştır, gözden kaçan onion varsa TS hata verecektir.
    unreachableCaseError(event);
};
// & işareti ikisini birleştirir. Tüm şartlar sağlanmalı. & --> "AND", | --> "OR"
var something = {
    uuid: 'uuid-1',
    serialize: function (x) {
        return JSON.stringify(x);
    }
};
var box = { contents: 'Hello World' };
var boxOfStrings = {
    contents: ['hello', 'Laracasts!']
};
var boxOfNumbers = {
    contents: [1, 2, 3, 4, 5, 6]
};
var identity = function (x) { return x; };
var s = identity('s');
var two = identity(5);
var randomElement = function (xs) {
    var randomIndex = Math.floor(Math.random() * xs.length);
    return xs[randomIndex];
};
var a = randomElement(['a', 'b', 'c', 'd']);
var b = randomElement([1, 2, 3, 4]);
console.table(a);
console.table(b);
console.table(p1);
console.log(Suit.SPADES);
console.log(yaziTura());
console.table(prod.belongsTo);
console.log("Name: ".concat(result.name, " - Version: ").concat(result.version));
console.log(prod.API_KEY.toLowerCase());
console.log(Product.API_VERSION.toLocaleString());
console.log(increaseVersion(Product.API_VERSION));
console.table(stringOrNum);
console.table(numbers);
