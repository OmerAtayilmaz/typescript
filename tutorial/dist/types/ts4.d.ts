declare type Person = {
    name: string;
    age: number;
    status: boolean;
    token?: string;
};
declare const user1: Person;
declare const user2: Person;
declare const userList: Person[];
declare type Colors = 'red' | 'green' | 'blue';
declare type CustomColors = 'magenta' | 'cyan' | 'turqoise';
declare type AllColors = Colors | CustomColors;
declare const myColor: (AllColors)[];
declare type A = {
    name: string;
    quantity: number;
};
declare type B = {
    price: number;
    isActive?: boolean;
};
declare type AB = A & B;
declare const data: AB;
