interface AwesomeHuh {
    isim?: string;
    soyad: string;
    yas?: number;
}
declare const Human: Omit<AwesomeHuh, 'yas'>;
declare type AsadTipi = Parameters<typeof print>;
declare const c: Required<AwesomeHuh>;
declare const sadc: Readonly<AwesomeHuh>;
declare const casdsadx: Pick<Person, "name">;
declare type QWE = Exclude<string | number | (() => void), number>;
declare const myValasada: QWE;
declare const msadasda: QWE;
declare function returnNum(): number;
declare const myValasdasdsad: ReturnType<typeof returnNum>;
