"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    //implements ettiğimiz attributeleri parametre olarak girmek zorundayız.
    constructor(isim, soyad, sinif) {
        this.isim = isim;
        this.soyad = soyad;
        this.sinif = sinif;
    }
    getStudentInformation() {
        return {
            isim: this.isim,
            sinif: this.sinif,
            soyad: this.soyad
        };
    }
}
exports.Student = Student;
