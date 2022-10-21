class ABC{
    private breath:string;

    constructor(breath:string){
        this.breath=breath;
    }
    public getBreath():string{
        return this.breath;
    }

}

class Word extends ABC{

}



function Hello<T extends ABC>(param:T){
    return new Word("ASDSAD");
}
const teASDSADst=Hello<Word>(new ABC("adsadasd"));


function ReturnerX<T extends string|boolean>(param:T){
    return param;
}

const asdsadc=ReturnerX<string>("HelloWorld");