let sampleuser=25,lan='tamil';
if(sampleuser<15)
{
    console.log("kids");
    
}else if(sampleuser<=25 && lan=='tamil')
{
    console.log("middle age");
    
}
else if(sampleuser>=30 && lan=='tamil'){

    console.log("old age");
    
}else{
    console.log("not valid age");
    
}
//switch case
//without using break statement it is called as fall through
let sample=10;
switch(sample){
    case 10:
        console.log("case 10");
       break;
        case 20:
            console.log("case 20");
            
            default:
                console.log("invalid input");
                
            
}

// using for loop
for(let num=10;num<30;num++){
    console.log(num);
    
}

//using for of
//for of - fetch all the items from the array element
let arrayitem=['apple','orange','banana','pineapple']
for(var value of arrayitem){
    console.log(value);
    
}

//using for in
//for in - fetch the index of the element in an array
let arrayitem1=['apple','banana','pineapple','orange']
for(var val in arrayitem1)
console.log(val);

//foreach
let a1=['apple','orange','banana','grapes',4,5,'a','b','dr',8,9]
let b1:any=[];
a1.forEach(function(items){
    b1.push(items)
})
console.log(b1);

//while loop
let w=1;
while(w<=10){
    console.log(w);
    w++
}

//do while loop
let d=1
do{
    console.log(`The do while loop ${d} is:`,d);
    d++
    
}while(d<=10)

//function

