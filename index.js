//Functions
//Arrow Functions


//Normal Function
function SayName(name){
    console.log("Hello, How are you ?\n"+name);
}
SayName("Vinay");

//Arrow Function
const greet =(name)=>
{
    console.log("Hello, How are you ?\n"+name);
}
greet("Mr Vinay");

//Objects in js [key:value] pair collections

let person0 = {Name:'vinay',age:18,dob:'26-07-2007'};
let person1 = {Name:'vijay',age:16,dob:'16-02-2010'};
//console.log(person0.Name);

//destructuring
const {Name,age,dob}=person0;
console.log(Name,age,dob);

//any two entities like client - server or else server - server communicate in js format 
let object = {
    Name:'vinay',
    age:18,
    dob:'26-07-2007'
};
console.log(typeof object);
//converting object into a string and transfering through servers 
let stringifiedobject = JSON.stringify(object);
console.log(typeof stringifiedobject);
//again converting back to the object form
let parsedobject = JSON.parse(stringifiedobject);
console.log(typeof parsedobject);

//promises in js 
//asyn and await keywords in js 
//by default node is asynchronous we uses async and await keywords to make it synchronous 
//asynchronous means it does not wait for the response it executes next lines of code 
async function getjoke() {
    let j =  fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political",{
        method:"GET"
    })
    //await keyword makes the code to wait until the response is received
    let data = await j.json();
    console.log(data);
}
getjoke();
//using then keyword to handle promises
function getjoke2() {
   let j= fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political",{
        method:"GET"
    })
    j.then((response)=>response.json())
    .then((data)=>{
        console.log(data);
    })
}
getjoke2();
//callback hell in js
function func1(callback){
    console.log("Function 1 is called");
    callback();
}   
function func2(callback){
    console.log("Function 2 is called");
    callback();
}
function func3(){
    console.log("Function 3 is called");
}
func1(function(){
    func2(function(){
        func3();
    });
});
//here func3 is nested inside func2 and func2 is nested inside func1 this is called callback hell
//to avoid callback hell we use promises or async await keywords





//callbacks in js
function fun1(callback){
    console.log("Function 1 is called");
    callback();
}
function fun2(){
    console.log("Function 2 is called");
}
fun1(fun2);
//setTimeout function in js
console.log("Start");
setTimeout(() => {
    console.log("This is inside setTimeout function");
}, 2000);
console.log("End");
//setInterval function in js
let count =0;
let interval = setInterval(() => {
    count++;
    console.log("Count is : "+count);       
    if(count==5){
        clearInterval(interval);
    }
}, 1000);

//modules in js
//importing and exporting modules
//in module1.js file
/*
export const name = "vinay";        
export function greet(){
    console.log("Hello from module1");
}
*/
//in index.js file
/*
import {name,greet} from './module1.js';
console.log(name);
greet();
*/

//Note : To use modules in node.js we have to set "type":"module" in package.json file
