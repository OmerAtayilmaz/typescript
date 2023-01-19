/* ✨ APP 1: Hello World! ✨
const helloWorld:string="HelloWorld!";
console.warn(helloWorld); */
class Product {
    constructor(id, name, price, description, imageUrl, status, category) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
        this._imageUrl = imageUrl;
        this._status = status;
        this._category = category;
    }
    get Id() {
        return this._id;
    }
    set Id(id) {
        this._id = id;
    }
    get Price() {
        return this._price;
    }
    get Name() {
        return this._name;
    }
}
class ProductService {
    constructor() {
        this.products = [];
        this.getProducts();
    }
    getProducts() {
        for (let i = 1; i <= 20; i++) {
            let id = i;
            let name = 'Product ' + i;
            let price = Math.floor(Math.random() * 100);
            let description = 'This is the ' + i + 'th product';
            let imageUrl = 'https://via.placeholder.com/150';
            let status = (Math.random() > 0.5) ? true : false;
            let category = (Math.random() > 0.5) ? 'tech' : 'food';
            this.products.push(new Product(id, name, price, description, imageUrl, status, "tech"));
        }
        return this.products;
    }
    ;
    getProductById(id) {
        return this.products.find((p) => p.Id === id);
    }
    getTotalPricesForAllProducts() {
        return this.products.reduce((sum, item) => sum + item.Price, 0);
    }
    searchProductsByName(name) {
        return this.products.filter((p) => p.Name.includes(name));
    }
}
(() => {
    const productService = new ProductService();
    //console.log(productService.getProducts());
    console.log("*".repeat(50));
    console.log(productService.getProductById(1));
    console.log("*".repeat(50));
    console.log(productService.getTotalPricesForAllProducts());
    console.log("*".repeat(50));
    console.log(productService.searchProductsByName("12"));
})();
