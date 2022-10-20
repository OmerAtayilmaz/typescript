export interface IStudent{
    isim:string;
    soyad:string;
    sinif:number;

    getStudentInformation():{
        isim:IStudent["isim"];
        soyad:IStudent["soyad"];
        sinif:IStudent["sinif"];
    };
    
}

export class Student implements IStudent {
    //implements ettiğimiz attributeleri parametre olarak girmek zorundayız.
    constructor(public isim:string,
        public soyad:string,
        public sinif:number
        ){}

    getStudentInformation() {
        return {
            isim:this.isim,
            sinif:this.sinif,
            soyad:this.soyad
        };
    }
}