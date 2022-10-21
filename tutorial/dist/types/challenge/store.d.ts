export declare enum ShoesType {
    Terlik = 0,
    Bot = 1,
    Sandalet = 2,
    Stiletto = 3,
    Sportif = 4
}
export default class Product {
    private id;
    private status;
    private name;
    private price;
    constructor(id: number, status: boolean, name: string, price: number);
}
export declare class Shoes extends Product {
    private shoeSize;
    constructor(id: number, status: boolean, name: string, price: number, shoeSize: number);
}
export declare class Terlik extends Shoes {
    private type;
    constructor(id: number, status: boolean, name: string, price: number, shoeSize: number, type: ShoesType);
}
export interface IArrayGenerator {
    [index: number]: [Product | Shoes | Terlik];
}
