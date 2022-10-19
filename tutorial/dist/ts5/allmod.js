"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = exports.job = void 0;
const NotificationJob_1 = __importDefault(require("./NotificationJob"));
const Product_1 = __importDefault(require("./Product"));
exports.job = NotificationJob_1.default;
exports.product = Product_1.default;
