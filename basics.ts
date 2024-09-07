let message: string = "Hello World From Typescript";
let code: string = "npx a.ts && node a.js";
const test: string = "value";
console.log(message);
console.log(code);
const  ex:string = "Muq";

function greeter(isim:string){
    return "Merhaba "+this.isim;
}

let age:number=25.7;

let isTrue:boolean=true;

//special types:
//any disable checking type
let v:any =true;

let w: unknown = 1;
w = "string"; // no error
w = {
  checkVariable: () => {
    console.log("I think therefore I am");
  }
} as { checkVariable: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.checkVariable(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { checkVariable: Function }).checkVariable();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting


let idList:number[]=[1,2,3,4,5,6,7];
let dataList:[number,string]=[25,"MYSTRING"];//sırasıyla çalışır


let i:void=undefined;
function deneme():void{ //deger dondurmesını engelledik

}
enum Colors{RED,BLUE,GREEN};
