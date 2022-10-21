declare class ABC {
    private breath;
    constructor(breath: string);
    getBreath(): string;
}
declare class Word extends ABC {
}
declare function Hello<T extends ABC>(param: T): Word;
declare const teASDSADst: Word;
declare function ReturnerX<T extends string | boolean>(param: T): T;
declare const asdsadc: string;
