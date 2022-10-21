"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terlik = exports.Shoes = exports.ShoesType = void 0;
var ShoesType;
(function (ShoesType) {
    ShoesType[ShoesType["Terlik"] = 0] = "Terlik";
    ShoesType[ShoesType["Bot"] = 1] = "Bot";
    ShoesType[ShoesType["Sandalet"] = 2] = "Sandalet";
    ShoesType[ShoesType["Stiletto"] = 3] = "Stiletto";
    ShoesType[ShoesType["Sportif"] = 4] = "Sportif";
})(ShoesType = exports.ShoesType || (exports.ShoesType = {}));
class Product {
    constructor(id, status, name, price) {
        this.id = id;
        this.status = status;
        this.name = name;
        this.price = price;
    }
}
exports.default = Product;
class Shoes extends Product {
    constructor(id, status, name, price, shoeSize) {
        super(id, status, name, price);
        this.shoeSize = shoeSize;
    }
}
exports.Shoes = Shoes;
class Terlik extends Shoes {
    constructor(id, status, name, price, shoeSize, type) {
        super(id, status, name, price, shoeSize);
        this.type = type;
    }
}
exports.Terlik = Terlik;
