"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAllChildOfProduct = exports.listAll = void 0;
const listAll = (param) => {
    param.forEach(item => {
        console.log(item);
    });
};
exports.listAll = listAll;
const listAllChildOfProduct = (param) => {
    param.forEach(item => console.log(item));
};
exports.listAllChildOfProduct = listAllChildOfProduct;
