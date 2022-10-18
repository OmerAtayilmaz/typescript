/* Exercise 1 : 2powx-5x+2 */
const specialFunc=(x:number):number=> Math.pow(2,x)-5*x+2;
console.log(specialFunc(5));


/* Exercise 2 - exercise 1 ile ilgilidir. */
const exercise2=(s1:number,s2:number) => {
    let x0=0;
    let x1=1;
    let x2=0;
    for(let i:number=1;i<10;i++){
        x2=(x0+x1)/2;
        if(specialFunc(x0)*specialFunc(x2)<0)
            x1=x2;
        else
            x0=x2;
     }
     return x2;
}

console.log(exercise2(5,3));
/* Exercise 3 */
