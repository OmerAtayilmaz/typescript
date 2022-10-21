
interface AwesomeHuh{
    isim?:string;
    soyad:string;
    yas?:number;
}
/* Omit istenmeyen parametreler için kullanılır */
const Human:Omit<AwesomeHuh,'yas'>={
    isim:"asdasd",
    soyad:"qasdasdsa"
};


/* 
function print(adasdasdsad:{
    memleket:string,kutuk:string
}){}; */

//type almak

type AsadTipi=Parameters<typeof print>;// parametre gelir



//zorunlu olsun olması zorunlu yapar!
const c:Required<AwesomeHuh>={
    isim:"asdasd",
    soyad:"sadasd",
    yas:25
}


//ReadOnly olarak oluşturulan objenin degeri degisitirlemez!

const sadc:Readonly<AwesomeHuh>={
    soyad:"asdsad",
    isim:"asdasd",
    yas:25,
}
//ERROR: sadc.isim=25;


//Omittin tersi sadece name' sahip bir obje olur!
const casdsadx:Pick<Person,"name">={
    name:"asdadsad"
};


//Exclude: bir tipten verilen tipleri çıkar

type QWE=Exclude<string|number|(()=>void),number>;//virgüden sonraki tip(s) desteklenmez!
const myValasada:QWE="sadsadsad";//number verilemez

const msadasda:QWE=function(){
    
}


//geriye dondurulen degeri alma
function returnNum(){
    return 25;
}

const myValasdasdsad:ReturnType<typeof returnNum>=25;;