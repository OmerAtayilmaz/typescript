import Product,{Shoes,Terlik,IArrayGenerator, ShoesType} from './store';
import {listAll,listAllChildOfProduct} from './utils';

const p1:Product=new Product(1,true,"Macbook Pro 2022",2000);
const p2:Product=new Product(2,true,"Macbook Air 2022",2000);
const p3:Product=new Product(3,false,"Macbook Pro 2021",2000);
const p4:Product=new Product(4,false,"Macbook Air 2021",2000);
const p5:Product=new Product(5,true,"Macbook Air 2020",2000);

const s1:Shoes=new Shoes(6,true,"Nike",80,35);
const s2:Shoes=new Shoes(7,false,"Nike Pro",150,45);
const s3:Shoes=new Shoes(8,false,"Nike Air",100,32);
const s4:Shoes=new Shoes(9,false,"Kinetix",60,33);
const s5:Shoes=new Shoes(10,true,"TX Maxy",140,34);

const t1:Terlik=new Terlik(1,true,"Terliksi Hayvan",25,25,ShoesType.Terlik);
const t2:Terlik=new Terlik(2,false,"Sportif Terlik",35,15,ShoesType.Sportif);
const t3:Terlik=new Terlik(3,false,"Sandalet Terlik",17,25,ShoesType.Sandalet);
const t4:Terlik=new Terlik(4,false,"Stiletto Terlik",12,25,ShoesType.Stiletto);
const t5:Terlik=new Terlik(5,true,"Bot Terlik(wtf)",44,25,ShoesType.Bot);

const productList:Product[]=[p1,p2,p3,p4,p5];
const shoeList:Shoes[]=[s1,s2,s3,s4,s5];
const terlikList:Terlik[]=[t1,t2,t3,t4,t5];

/* listAll(productList);
listAll(shoeList);
listAll(terlikList); */
//just child of Product and Product class
//listAllChildOfProduct(shoeList);

