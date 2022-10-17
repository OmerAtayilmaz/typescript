"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Product_1 = __importDefault(require("./Product"));
var fs = require('fs');
var path = "./trendyol/API/products.json";
var data = JSON.parse(fs.readFileSync(path, "utf-8"));
var productList = [];
data.forEach(function (el, index, arr) {
    productList.push(new Product_1["default"](el.id, el.title, el.price, el.description, el.category, el.image, el.rating.rate, el.rating.count));
});
productList.forEach(function (el) { console.log(el.getTitle()); console.log(el.getPrice()); });
