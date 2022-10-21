export enum ShoesType{
    Terlik,
    Bot,
    Sandalet,
    Stiletto,
    Sportif
}
export default class Product{
    private id:number;
    private status:boolean;
    private name:string;
    private price:number;
    constructor(id:number,status:boolean,name:string,price:number){
        this.id=id;
        this.status=status;
        this.name=name;
        this.price=price;
    }
}

export  class Shoes extends Product{
    private shoeSize:number;
    constructor(id:number,status:boolean,name:string,price:number,shoeSize:number){
        super(id,status,name,price);
        this.shoeSize=shoeSize;
    }

}


export class Terlik extends Shoes{
    private type:ShoesType;
    constructor(id:number,status:boolean,name:string,price:number,shoeSize:number,type:ShoesType){
        super(id,status,name,price,shoeSize);
        this.type=type;
    }
}

export interface IArrayGenerator{
    [index:number]:[Product|Shoes|Terlik]
}