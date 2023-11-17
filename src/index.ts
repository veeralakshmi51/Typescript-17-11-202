let Day='kjhgfd'
  console.log(Day)


let userArray1=['karthi',25,true]
console.log(userArray1)
userArray1[0]=30
console.log(userArray1)


let userArray:[string,number,boolean]=['karthi',25,true]//Typed Array or Tuples
console.log(userArray)
userArray[0]='gayathri'
userArray[2]=false
console.log(userArray)


let userTuple:[string,number,boolean]=['kausik',25,false]//without using readonly
userTuple.push(5)
console.log(userTuple)


let userTuple1:readonly[string,number,boolean]=['raju',22,true]// using readonly
//userTuple1.push(1)                                             //Property 'push' does not exist on type 'readonly [string, number, boolean]'.
console.log(userTuple1)

//named
let userTuple2:readonly[username:string,age:number,isPresent:boolean]=['ramu',29,false]
console.log(userTuple2)

//Accessing named tuples /destructuring

let [username,age,isPresent]=userTuple2
console.log(username)

//TypeAlias
//In TypeAlias the first should capital letter

type Username=string
type YesorNo=boolean
type Age=number
let userName:Username="karthiga"
console.log(userName)

// In an array how to use alias
type Usernames=string[]
let userNames:Usernames=['mani','raji','rahul']
console.log(userNames);

//objects
type User={
    name:Username,
    age:Age,
    isPresent:YesorNo
}
let user:User={name:'abi',age:24,isPresent:true}
console.log(user)


//Union type in typealias
type StrorNum=string | number
let errorCode:StrorNum='401'
errorCode=401
console.log(errorCode);

//Tuples in typealias
type TupleAlias=[username:string,Age:number,isEng:YesorNo]
let userTuple3:TupleAlias=['ramu',29,true]
console.log(userTuple3)

//Typecasting
// in react use as keyword others use <>
//unknown string to string
let a:unknown='available'
console.log((a as string).length);
console.log((<string>a).length)

//unknown number to string 

let b:unknown=800
console.log((b as string).length);//in number type we cannot use length property
console.log((<string>b).length); // It prints the output as undefined because we cannnot typecasting the number into string

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

enum Direction{
    East=205,
    South,
    West,
    North
 }
console.log(Direction.East);

enum StatusCode{
    Success=200,
    Unautherized=401,
    ServerError=500
}
console.log(StatusCode.ServerError);

//enums using with string

enum Direction1{
    East='East',
    West='West',
    South='South',
    North='North'
}
console.log(Direction1.North);

// Typescript Interfaces
//Interface - Only works with objects not primitive types
interface UserInterface{
    name:string,
    age:number
}
const userinterface:UserInterface={
     name:"Gayathri",
     age:25
}
console.log(userinterface);

//funciton interface
interface funciton{
    (a:number,b:number):number
}
let add:funciton=(p1:number,p2:number)=>{
    return p1+p2
}
console.log(add(4,8));


//Entending interfaces

interface Employee extends UserInterface{
employeeId:number
}
const employee:Employee={
    employeeId:10,
    name:'rahul',
    age:27
}
console.log(employee);

//Typescript Classes

//simple class

class User1 {
    id:number
    constructor(a:number){
        this.id=a
    }
}
let userobject=new User1(15) //object creation
console.log(userobject.id);

//Interface

interface PersonInterface{
    id:number,
    name:string
}
class Person implements PersonInterface{
    id:number
    name: string
    constructor(id:number,name:string)
    {
this.id=id
this.name=name
    }
    getName=()=>{
        return this.name
    }
}
let person=new Person(15,'mahi')//object creation
console.log(person.id);
console.log(person.getName());

//multiple interfaces

interface PersonInterface1{
age:number,
department:string
}
interface PersonDetails{
    name:string,
    id:number
}
class Person1 implements PersonInterface1,PersonDetails{
    age:number
    department: string
    name: string
    id: number
    constructor(age:number,department:string,id:number,name:string){
        this.age=age
        this.department=department
        this.name=name
        this.id=id
    }
    getDepartment=()=>{
      return  this.department
    }
    getId=()=>{
        return this.id
    }
}
let per=new Person1(25,'Finance',12,'veera')
console.log(per.getDepartment())
console.log(per.name);
console.log(per.id);

// entends classes
class Student extends Person{
    studentId:number=100
    print(){
        console.log(`The Student Name is ${this.name} and Id is ${this.studentId}`);
        
    }
}
let student=new Student(100,'Kalpana')
student.print()

//Abstract Class

abstract class Person2{
     abstract name:string
     
    abstract print():void //function signature
}
class Student1 extends Person2{
    name: string
    
    constructor(x:string){
    super()
        this.name=x
    }
    print=()=>{
        console.log(this.name);
        
    }
}
let studentobject=new Student1('bhavana')
studentobject.print()

//data modifier
//public, private and protected
//when we using public data modifier, we can access the parameter through out the program
//when we using protected keyword,we can access only inside the main class and subclasses
//when we using the private keyword, we can access only inside the class where we use that keyword
class Employee1{
    name:string
    constructor(x:string){
        this.name=x
    }
}
class Employee2 extends Employee1{
    print=()=>{
        console.log(this.name);
        
    }
    changeName=(name:string)=>{
       this.name=name
    }
}
let empobject=new Employee2('kavi')
empobject.print()
empobject.changeName('kamini')
empobject.print()
empobject.name='yazhini'
empobject.print()

//without using Generics
const toArray=(a:string,b:number,c:number)=>{
    return [a,b,c]
}
let array=toArray('56',98,70)
console.log(array);

//when I am passing a number as string it shows an error why because the data type is number instead of using number we can use ANY then only we can print the output

const toArray1=(a:any,b:number,c:number)=>{
    return [a,b,c]
}
let array1=toArray1('56',98,70)// here I have used any data type it takes number or string as a parameter
console.log(array1);
 
//when we using generics 
//using number data type
const toGenericArray=<C>(num1:C,num2:C,num3:C)=>{
return [num1,num2,num3]
}
let genericArray=toGenericArray<number>(10,20,30)
console.log(genericArray);

//using string data type

let toGenericArray1=<S>(name:S,department:S,address:S)=>{
return[name,department,address]
}
let genericArray1=toGenericArray1<string>('kan','tesing','2-main road')
console.log(genericArray1);

//multiple types using generics

let printValues=<X,Y,Z>(a:X,b:Y,c:Z,d:string,e:number)=>{
    console.log(`A is ${typeof a} B is ${typeof b} C is ${typeof c} D is ${typeof d} E is ${typeof e}`);    //template string
}
printValues('two',false,3,'hello',5)//invoking

// class generic type
class StatusCode1<C,N>{
code:C
message:string
num:N


constructor (code:C,message:string,num:N){
    this.code=code
    this.message=message
    this.num=num
}
}
let statusCode=new StatusCode1('hellooo','iuytrertyui',1)
console.log(statusCode)

//Generic Constraints

class StatusCode2<C extends object>{
    code:C
    constructor(code:C){
        this.code=code
    }
}
let statusCode1=new StatusCode2({code:200,id:1,name:'dtyuikjhbvvh'})
console.log(statusCode1);
//sample program
let nu:number=30,num:number=20;
if(nu > num)
    console.log("a is greater than b")

else
console.log('b is greater than a');