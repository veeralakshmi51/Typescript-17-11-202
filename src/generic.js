//without using Generics
var toArray = function (a, b, c) {
    return [a, b, c];
};
var array = toArray('56', 98, 70);
console.log(array);
//when I am passing a number as string it shows an error why because the data type is number instead of using number we can use ANY then only we can print the output
var toArray1 = function (a, b, c) {
    return [a, b, c];
};
var array1 = toArray1('56', 98, 70); // here I have used any data type it takes number or string as a parameter
console.log(array1);
//when we using generics 
//using number data type
var toGenericArray = function (num1, num2, num3) {
    return [num1, num2, num3];
};
var genericArray = toGenericArray(10, 20, 30);
console.log(genericArray);
//using string data type
var toGenericArray1 = function (name, department, address) {
    return [name, department, address];
};
var genericArray1 = toGenericArray1('kan', 'tesing', '2-main road');
console.log(genericArray1);
//multiple types using generics
var printValues = function (a, b, c, d, e) {
    console.log("A is ".concat(typeof a, " B is ").concat(typeof b, " C is ").concat(typeof c, " D is ").concat(typeof d, " E is ").concat(typeof e)); //template string
};
printValues('two', false, 3, 'hello', 5); //invoking
// class generic type
var StatusCode1 = /** @class */ (function () {
    function StatusCode1(code, message, num) {
        this.code = code;
        this.message = message;
        this.num = num;
    }
    return StatusCode1;
}());
var statusCode = new StatusCode1('hellooo', 'iuytrertyui', 1);
console.log(statusCode);
//Generic Constraints
var StatusCode2 = /** @class */ (function () {
    function StatusCode2(code) {
        this.code = code;
    }
    return StatusCode2;
}());
var statusCode1 = new StatusCode2({ code: 200, id: 1, name: 'dtyuikjhbvvh' });
console.log(statusCode1);
