
//number dondurecegını belirttik
function F():number{
    return 25;
}

//tuple dondurecegını belirttik
function F1():[number,string]{
    return [25,"Here it is"];
}

//return nothing.
function F2():void{

}


function LogPerson(isim:string,soyisim:string,yas:number){
    console.log({
        isim,soyisim,yas
    });
}

LogPerson("Kadir","Yazıcı",25);


//promises

const getData=async(URL:string,Options:string):Promise<number>=>{
    return new Promise((resolve,reject)=>{
        resolve(25);
    });
};

getData("MYURL","MYOPTIONS").then(_=>{
    console.log("Hello World");
});