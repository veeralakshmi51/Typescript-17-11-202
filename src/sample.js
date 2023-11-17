var sampleuser = 25, lan = 'tamil';
if (sampleuser < 15) {
    console.log("kids");
}
else if (sampleuser <= 25 && lan == 'tamil') {
    console.log("middle age");
}
else if (sampleuser >= 30 && lan == 'tamil') {
    console.log("old age");
}
else {
    console.log("not valid age");
}
//switch case
//without using break statement it is called as fall through
var sample = 10;
switch (sample) {
    case 10:
        console.log("case 10");
        break;
    case 20:
        console.log("case 20");
    default:
        console.log("invalid input");
}
// using for loop
for (var num = 10; num < 30; num++) {
    console.log(num);
}
//using for of
//for of - fetch all the items from the array element
var arrayitem = ['apple', 'orange', 'banana', 'pineapple'];
for (var _i = 0, arrayitem_1 = arrayitem; _i < arrayitem_1.length; _i++) {
    var value = arrayitem_1[_i];
    console.log(value);
}
//using for in
//for in - fetch the index of the element in an array
var arrayitem1 = ['apple', 'banana', 'pineapple', 'orange'];
for (var val in arrayitem1)
    console.log(val);
//foreach
var a1 = ['apple', 'orange', 'banana', 'grapes', 4, 5, 'a', 'b', 'dr', 8, 9];
var b1 = [];
a1.forEach(function (items) {
    b1.push(items);
});
console.log(b1);
//while loop
var w = 1;
while (w <= 10) {
    console.log(w);
    w++;
}
//do while loop
var d = 1;
do {
    console.log("The do while loop ".concat(d, " is:"), d);
    d++;
} while (d <= 10);
//function
function print() {
    console.log("Function printed");
}
print(); //function calling
