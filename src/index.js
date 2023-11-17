var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Day = 'kjhgfd';
console.log(Day);
var userArray1 = ['karthi', 25, true];
console.log(userArray1);
userArray1[0] = 30;
console.log(userArray1);
var userArray = ['karthi', 25, true]; //Typed Array or Tuples
console.log(userArray);
userArray[0] = 'gayathri';
userArray[2] = false;
console.log(userArray);
var userTuple = ['kausik', 25, false]; //without using readonly
userTuple.push(5);
console.log(userTuple);
var userTuple1 = ['raju', 22, true]; // using readonly
//userTuple1.push(1)                                             //Property 'push' does not exist on type 'readonly [string, number, boolean]'.
console.log(userTuple1);
//named
var userTuple2 = ['ramu', 29, false];
console.log(userTuple2);
//Accessing named tuples /destructuring
var username = userTuple2[0], age = userTuple2[1], isPresent = userTuple2[2];
console.log(username);
var userName = "karthiga";
console.log(userName);
var userNames = ['mani', 'raji', 'rahul'];
console.log(userNames);
var user = { name: 'abi', age: 24, isPresent: true };
console.log(user);
var errorCode = '401';
errorCode = 401;
console.log(errorCode);
var userTuple3 = ['ramu', 29, true];
console.log(userTuple3);
//Typecasting
// in react use as keyword others use <>
//unknown string to string
var a = 'available';
console.log(a.length);
console.log(a.length);
//unknown number to string 
var b = 800;
console.log(b.length); //in number type we cannot use length property
console.log(b.length); // It prints the output as undefined because we cannnot typecasting the number into string
//Enums - Group of constants
//we can create enums using with number and string
//when we using enums in number the value will be automatically stores
//In this thing we can change the value too
//  enum Direction{
//     East,
//     South,
//     West,
//     North
//  }
// console.log(Direction.East);
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 205] = "East";
    Direction[Direction["South"] = 206] = "South";
    Direction[Direction["West"] = 207] = "West";
    Direction[Direction["North"] = 208] = "North";
})(Direction || (Direction = {}));
console.log(Direction.East);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Unautherized"] = 401] = "Unautherized";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.ServerError);
//enums using with string
var Direction1;
(function (Direction1) {
    Direction1["East"] = "East";
    Direction1["West"] = "West";
    Direction1["South"] = "South";
    Direction1["North"] = "North";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.North);
var userinterface = {
    name: "Gayathri",
    age: 25
};
console.log(userinterface);
var add = function (p1, p2) {
    return p1 + p2;
};
console.log(add(4, 8));
var employee = {
    employeeId: 10,
    name: 'rahul',
    age: 27
};
console.log(employee);
//Typescript Classes
//simple class
var User1 = /** @class */ (function () {
    function User1(a) {
        this.id = a;
    }
    return User1;
}());
var userobject = new User1(15); //object creation
console.log(userobject.id);
var Person = /** @class */ (function () {
    function Person(id, name) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var person = new Person(15, 'mahi'); //object creation
console.log(person.id);
console.log(person.getName());
var Person1 = /** @class */ (function () {
    function Person1(age, department, id, name) {
        var _this = this;
        this.getDepartment = function () {
            return _this.department;
        };
        this.getId = function () {
            return _this.id;
        };
        this.age = age;
        this.department = department;
        this.name = name;
        this.id = id;
    }
    return Person1;
}());
var per = new Person1(25, 'Finance', 12, 'veera');
console.log(per.getDepartment());
console.log(per.name);
console.log(per.id);
// entends classes
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.studentId = 100;
        return _this;
    }
    Student.prototype.print = function () {
        console.log("The Student Name is ".concat(this.name, " and Id is ").concat(this.studentId));
    };
    return Student;
}(Person));
var student = new Student(100, 'Kalpana');
student.print();
//Abstract Class
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    return Person2;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(x) {
        var _this = _super.call(this) || this;
        _this.print = function () {
            console.log(_this.name);
        };
        _this.name = x;
        return _this;
    }
    return Student1;
}(Person2));
var studentobject = new Student1('bhavana');
studentobject.print();
//data modifier
//public, private and protected
//when we using public data modifier, we can access the parameter through out the program
//when we using protected keyword,we can access only inside the main class and subclasses
//when we using the private keyword, we can access only inside the class where we use that keyword
var Employee1 = /** @class */ (function () {
    function Employee1(x) {
        this.name = x;
    }
    return Employee1;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.print = function () {
            console.log(_this.name);
        };
        _this.changeName = function (name) {
            _this.name = name;
        };
        return _this;
    }
    return Employee2;
}(Employee1));
var empobject = new Employee2('kavi');
empobject.print();
empobject.changeName('kamini');
empobject.print();
empobject.name = 'yazhini';
empobject.print();
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
//sample program
var nu = 30, num = 20;
if (nu > num)
    console.log("a is greater than b");
else
    console.log('b is greater than a');
