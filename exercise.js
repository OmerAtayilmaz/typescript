/* Exercise 1 : 2powx-5x+2 */
var specialFunc = function (x) { return Math.pow(2, x) - 5 * x + 2; };
console.log(specialFunc(5));
/* Exercise 2 */
var exercise2 = function (s1, s2) {
    var x0 = 0;
    var x1 = 1;
    var x2 = 0;
    for (var i = 1; i < 10; i++) {
        x2 = (x0 + x1) / 2;
        if (specialFunc(x0) * specialFunc(x2) < 0)
            x1 = x2;
        else
            x0 = x2;
    }
    return x2;
};
console.log(exercise2(5, 3));
/* Exercise 3 */
