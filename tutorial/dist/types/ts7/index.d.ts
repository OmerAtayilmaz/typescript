interface Bottle {
    size: string;
    price: number;
    quantity: number;
    [anahtar: string]: any;
}
declare const b1: Bottle;
declare type FunctionThatReturnsBoolean = (id: string, password: string) => boolean;
declare const myFun: FunctionThatReturnsBoolean;
interface Computer {
    brand: string;
    price: number;
}
declare const myBrand: Computer["brand"];
interface MyArray {
    [index: number]: string | number;
}
declare const awesomeArray: MyArray;
declare const normalArray: MyArray;
declare type c = (id: string) => string;
declare const myFunnn: c;
interface IFun {
    (text: string): void;
    (text: string): boolean;
}
declare const HereItIs: IFun;
interface IFunction {
    (isim: string, tekrar: number): void;
    (isim: string, text: string): void;
}
declare const huhExample: IFunction;
