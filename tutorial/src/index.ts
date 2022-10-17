/* 
 tsconfig.json içerisinde compile edilecek typescript kodlarımıza ait detaylar bulunur.

 "lib": kullanacağımız kütüphaneleri belirlediğimz alandır. "DOM" eklersek gel element by id gibi methodlar gelir.

 strict type -> zorunluluk ekler - typescript için -
 module -> projede kullanacağımız modül tipini belirler.
 allowJs -> projede js kodlarına izin verilip verilmeyeceğini belirler.
 alwaysStrict -> her dosyaya "use strict"; ekler
 moduleResolution -> nodeJS kullanılacaksa "Node" yazılır. kullanılan paket stili seçilir.

 target: derlenmesini istediğimiz JS versiyonu
 outDir: çıktı klasörümüz
*/


// @ts-ignore
//asdsadsad

/* typescript kodunu bir satır için ignore eder. */



//import * as fs from "fs";
//boyle kullanmamızı saglayan esModuleInterop:true


//let myname=25; //tip oluşturur
const test="25asd"; //tip oluşturmaz