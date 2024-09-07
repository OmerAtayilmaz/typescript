 "use strict"

/*
    - Tip tanımlamada interface kullan,
    - "any" kullanmaktan kaçın
    - modelleyerek kodlama yapılmalı
*/
 interface User {
    id: string,
    name: string,
    age:number|null, //birden fazla ihtimali değerlendir
    email: string
}


class Product{
    API_KEY:string = 'KASKDSAODKAOSDKO2OP1K3OPK213KOASDAS';
    static API_VERSION:number = 3;
    belongsTo: User = {
        id:"A000",
        name:"John Doe",
        age:29, 
        email:"doejohn@support.io"
    }
}

const prod:Product = new Product();


//alacağı parametrenin tipini belirttik
const increaseVersion = (version: number): number => ++version;

//methodun döndüreceği objenin tipini belirttik, daha sağlıklı bir kullanım için böyle dönüş tiplerini model haline getirmeliyiz.
const promptVersion = (id: string) : { id:string, name:string, version:number } => (
    {
        id,
        name:'Michael',
        version: increaseVersion(Product.API_VERSION)
    }
)

const result = promptVersion("A001");


//generic tanımlama syntaxı
const numbers: Array<number | string > = [1,2,3,4,5,6, "12"];

const stringOrNum: (string | number)[] = [1,'Hello',2024,'Doe'];


//array elementlerinin *sırasıyla* tipini belirledik.
const tuple:[number, string] = [2024,"Hi there!"];


// literal type tanımlaması
const yaziTura = () : 'Yazi' | 'Tura' => Math.random() < 0.5 ? 'Yazi' : 'Tura';


//Switch case durumları için birebir*
enum Suit{
    HEARTS = 'Hearths',
    SPADES = 'Spades',
    DIAMONDS = 'Diamonds',
    CLUBS = 'Clubs'
}

// void, null and Undefined

const logger = (sth : string | null ): void => console.log(sth);

//void beklediğimiz gibi geriye bir şey döndürmedi 
logger("Hehehehe This is my console.log");


//optional type

interface Foo{
    id:null,
    type?: string,
    price:number
}
//hata vermedi çünkü type opsiyonel
const examleFoo:Foo = { id: null, price:25};

//any and unkown


//tipini bilmediğiz şeyi unknown yani bilinmeyen yapabiliriz.
const specialLogger = (sth: any): void => console.log(sth.toUpperCase());

/*
    any ile unknown arasındaki fark nedir?
    any --> TS kontrollerini kapatır, kod js gibi çalışır
    unknown --> TS kontrollerini yapar ve unknown ise toUpperCase() gibi methodları kullanmaya müsade etmez
    unkown kullanıacaksa if içinde "type of sth ==='string' gibi koşullar kullanılmalıdır. "
*/



//types, eşittir ile atama yapılır. Interface'de assign yok, Object-type tanımlama yapılır.
type WearableProduct = {
    id: number,
    name: string,
    price: number 
}

type ProductType = 'SHOE' | 'PHONE' | 'LAPTOP' | 'DEVICE';

const p1:WearableProduct = { id:1,name:'Apple Watch', price:6999}
let p2:ProductType = 'SHOE'; // opsiyonlardan başka bir şey atanamaz.


/*
    TYPES VS INTERFACES Hangisi seçilmeli?

    - Standard data types use interfaces
    - use types for unions and intersections
    - Kilit Farklar/ Key differences
        - Interfaces are guaranteed to be 'named' in error message, whereas type aliases are not
        - Interfaces cannot be used to rename primitives or literal types
        - Type aliases cannot participate in declaration merging but interfaces can

*/



// Özel tip oluşturmada kullandık. 
type mySpecialText = string | number;
let exampleText : mySpecialText = "Here is an awesome example"; //no error
exampleText = 25; // no error


// Onions and Intersections - Güzel Bir Örnek =)
const userCreatedEvent = {
    eventType: 'USER_CREATED',
    parameters:{
        id: 'uuid-1',
        name: 'Micheal',
        email: 'hello@email.com'  
    }
} 

const userDeletedEvent = {
    eventType: 'USER_DELETED',
    parameters: {
        id: '1'
    }
}

// How would we type these? hmm düşün bakalım üstüne 
interface UserEvent {
    eventType: 'USER_CREATED' | 'USER_DELETED',
    parameters: {
        id: string;
        name?: string;
        email?: string;
    }
}

// Bu şekilde kullanırsak kontrol etmesi çok zor, hatta bir tık imkansız olabilir.
const handleUserEvent = (event: UserEvent) => {
    if(event.eventType === 'USER_CREATED'){
        console.log(event.parameters.name);
        return;
    }

    if(event.eventType ==='USER_DELETED'){
        console.log(event.parameters.id);

        // Halbuki deleted olan user'da name yoktu, bu şekilde çalıştırırsak runtime-exception atar!! Bu terslikte bir iş var (!)
        console.log(event.parameters.name?.toUpperCase());
        return;
    }
}

// Yukarıdaki yöntem yerine bunu yapmalıyız
interface userCreatedEvent {
    eventType:'USER_CREATED',
    parameters: {
        id: string;
        name: string;
        email: string;
    }
}

interface UserDeletedEvent {
    eventType: 'USER_DELETED',
    parameters: {
        id: string
    }
}

type BetterUserEvent = userCreatedEvent | UserDeletedEvent;


//Never, asla olmayacak durumlar için kullanılır

//never tipi döndürüyor çünkü asla return olmayacak ve throw Error(x) çalışacaktır
const unreachableCaseError = (x: never): never => {
    throw Error(x);
}

const handleBetterUserEvent = (event: BetterUserEvent) => {
    if(event.eventType === 'USER_CREATED'){
        //event.parameters. USER_CREATED eventları gelmekte
        return;
    }

    if(event.eventType === 'USER_DELETED'){
        //.name hiçbir şekilde kabul edilmemekte, çünkü UserDeletedEvent interfacesini referans alıyor.
        //console.log(event.parameters.name);
        return;
    }

    //niye çalıştı? Çünkü %100 ihtimalle 2 if içerisinden biri çalışacak ve unreachableCaseError çalışmayacaktır. :) 
    // methodların sonuna yapıştır, gözden kaçan onion varsa TS hata verecektir.
    unreachableCaseError(event);
}

// Intersections
interface Serializable {
    serialize(x: unknown) : string
}

interface Identifiable {
    uuid: string
}

// & işareti ikisini birleştirir. Tüm şartlar sağlanmalı. & --> "AND", | --> "OR"
const something: Serializable & Identifiable = {
    uuid: 'uuid-1',
    serialize(x: unknown) : string {
        return JSON.stringify(x)
    }
}

type Dictionary = {
    [key: string]: string
}

type OtherDictionalry = Record<string, string>
type UnknownRecord = Record<PropertyKey, unknown>

interface FooY {
    ttl: number;
    name: string
}

type NopeX = FooY & Record <string, string>
/*
    const nope: NopeX = {
        ttl: 100, ilk interface'de number kabul edilirken Recordda sadece string kabul ediliyor.
        name:'yes'
    }
*/

// GENERICS
interface Box<T>{
    contents: T
}

const box: Box<string> = { contents:'Hello World' };

const boxOfStrings: Box < string[] > = {

    contents:['hello', 'Laracasts!']
}

const boxOfNumbers: Box<number[]> = {
    contents: [1,2,3,4,5,6]
}

const identity = <T>(x:T): T => x;


const s = identity('s');
const two = identity(5);

const randomElement = <T,U> (xs: T[]): T|U => {
    const randomIndex = Math.floor(Math.random() * xs.length )
    return xs[randomIndex];
}



const a = randomElement(['a','b','c','d']);
const b = randomElement([1,2,3,4]);

console.table(a);
console.table(b);
console.table(p1);
console.log(Suit.SPADES);
console.log(yaziTura());
console.table(prod.belongsTo);
console.log(`Name: ${result.name} - Version: ${result.version}`);
console.log(prod.API_KEY.toLowerCase());
console.log(Product.API_VERSION.toLocaleString());
console.log(increaseVersion(Product.API_VERSION));
console.table(stringOrNum)
console.table(numbers)
