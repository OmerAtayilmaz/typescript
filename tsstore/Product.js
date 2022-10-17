"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(id, name, price, description, category, image, rating, rating_count) {
        this.id = id;
        this.title = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rating;
        this.rating_count = rating_count;
    }
    Product.printProduct = function (product) {
        return "id:".concat(product.id, " Name:").concat(product.title);
    };
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.setId = function (id) {
        this.id = id;
    };
    Product.prototype.getTitle = function () {
        return this.title;
    };
    Product.prototype.setTitle = function (title) {
        this.title = title;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Product;
}());
exports["default"] = Product;
