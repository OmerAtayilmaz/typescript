export interface IStudent {
    isim: string;
    soyad: string;
    sinif: number;
    getStudentInformation(): {
        isim: IStudent["isim"];
        soyad: IStudent["soyad"];
        sinif: IStudent["sinif"];
    };
}
export declare class Student implements IStudent {
    isim: string;
    soyad: string;
    sinif: number;
    constructor(isim: string, soyad: string, sinif: number);
    getStudentInformation(): {
        isim: string;
        sinif: number;
        soyad: string;
    };
}
