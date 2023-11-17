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



