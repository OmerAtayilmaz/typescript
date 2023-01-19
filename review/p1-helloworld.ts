/* ✨ APP 1: Hello World! ✨  
const helloWorld:string="HelloWorld!";
console.warn(helloWorld); */

//✨ APP 2: Sum of numbers ✨
/* const numbers:number[]=[1,2,3,4,5,6,7,8,9,10];
//5: initial value
const sum=(numbers?:number[])=>numbers.reduce((sum,i) => sum + i,5);
//or: const sum:number=numbers.reduce((sum,i) => sum + i,0);
console.error(sum);
console.error(sum(numbers)); */

//✨ APP 3: E-Commerce ✨
interface IProductService<T>{
    getProductById(id:number):Product;
    getTotalPricesForAllProducts():number;
    searchProductsByName(name:string):Product[];
}
class Product {
    private _id:number;
    private _name:string;
    private _price:number;
    private _description:string|null;
    private _imageUrl:string|null;
    private _status:boolean|'active' | 'inactive';
    private _category:"tech" | "food" | "clothes" | "other";

    public constructor(id:number, name:string, price:number, description:string, imageUrl:string, status:boolean, category:'tech' | 'food' | 'clothes' | 'other'){
        this._id=id;
        this._name=name;
        this._price=price;
        this._description=description;
        this._imageUrl=imageUrl;
        this._status=status;
        this._category=category;
    }
    public get Id():number{
        return this._id;
    }
    public set Id(id:number){
        this._id=id;
    }
    public get Price():number{
        return this._price;
    }
    public get Name():string{
        return this._name;
    }
}
class ProductService implements IProductService<Product>{
    private products:Product[] = [];
    public constructor(){
        this.getProducts();
    }
    public getProducts():Product[]{
        for (let i:number = 1; i <= 20; i++) {
            let id = i;
            let name = 'Product ' + i;
            let price = Math.floor(Math.random() * 100);
            let description = 'This is the '+ i + 'th product';
            let imageUrl = 'https://via.placeholder.com/150';
            let status = (Math.random() > 0.5) ? true : false;
            let category = (Math.random() > 0.5) ? 'tech' : 'food';
            this.products.push(new Product(id, name, price, description, imageUrl, status, "tech"));
        }
        return this.products;
    };
    public getProductById(id:number):Product {
        return this.products.find((p:Product) => p.Id === id);
    }
    public getTotalPricesForAllProducts():number {
         return this.products.reduce((sum:number,item:any)=>sum+item.Price,0);
    }
    public searchProductsByName(name:string):Product[]{
        return this.products.filter((p:any)=>p.Name.includes(name));
    }
}
(()=>{
    const productService:ProductService = new ProductService();
    //console.log(productService.getProducts());
    console.log("*".repeat(50))
    console.log(productService.getProductById(1));
    console.log("*".repeat(50))
    console.log(productService.getTotalPricesForAllProducts());
    console.log("*".repeat(50))
    console.log(productService.searchProductsByName("12"));
})();