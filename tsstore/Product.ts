class Product {
    private id:number;
    private title:string;
    private price:number;
    private description:string;
    private category:string;
    private image:string;
    private rating:number;
    private rating_count:number;

    constructor(id:number,name:string,price:number,description:string,category:string,image:string,rating:number,rating_count:number){
        this.id=id;
        this.title=name;
        this.price=price;
        this.description=description;
        this.category=category;
        this.image=image;
        this.rating=rating;
        this.rating_count=rating_count;
    }

    public static printProduct(product:Product):string{
        return `id:${product.id} Name:${product.title}`
    }

    public getId():number{
        return this.id;
    }
    public setId(id:number):void{
        this.id=id;
    }
    public getTitle():string{
        return this.title;
    }
    public setTitle(title:string):void{
        this.title=title;
    }

    public getPrice():number{
        return this.price;
    }
    public setPrice(price:number):void{
        this.price=price;
    }
}

export default Product;