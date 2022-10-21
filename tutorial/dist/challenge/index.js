"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = __importStar(require("./store"));
const utils_1 = require("./utils");
const p1 = new store_1.default(1, true, "Macbook Pro 2022", 2000);
const p2 = new store_1.default(2, true, "Macbook Air 2022", 2000);
const p3 = new store_1.default(3, false, "Macbook Pro 2021", 2000);
const p4 = new store_1.default(4, false, "Macbook Air 2021", 2000);
const p5 = new store_1.default(5, true, "Macbook Air 2020", 2000);
const s1 = new store_1.Shoes(6, true, "Nike", 80, 35);
const s2 = new store_1.Shoes(7, false, "Nike Pro", 150, 45);
const s3 = new store_1.Shoes(8, false, "Nike Air", 100, 32);
const s4 = new store_1.Shoes(9, false, "Kinetix", 60, 33);
const s5 = new store_1.Shoes(10, true, "TX Maxy", 140, 34);
const t1 = new store_1.Terlik(1, true, "Terliksi Hayvan", 25, 25, store_1.ShoesType.Terlik);
const t2 = new store_1.Terlik(2, false, "Sportif Terlik", 35, 15, store_1.ShoesType.Sportif);
const t3 = new store_1.Terlik(3, false, "Sandalet Terlik", 17, 25, store_1.ShoesType.Sandalet);
const t4 = new store_1.Terlik(4, false, "Stiletto Terlik", 12, 25, store_1.ShoesType.Stiletto);
const t5 = new store_1.Terlik(5, true, "Bot Terlik(wtf)", 44, 25, store_1.ShoesType.Bot);
const productList = [p1, p2, p3, p4, p5];
const shoeList = [s1, s2, s3, s4, s5];
const terlikList = [t1, t2, t3, t4, t5];
/* listAll(productList);
listAll(shoeList);
listAll(terlikList); */
(0, utils_1.listAllChildOfProduct)(shoeList);
(0, utils_1.listAll)([new String("Hello World")]);
