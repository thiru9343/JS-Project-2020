function sayHi(){
    return "Say Hi JS";
}

console.log(sayHi());
// Say Hi JS

//console.log(sayHi())
//IIFE

(function(){
    console.log("Hello JS");
}())

// Generator
function looping(userInput){
    for(i=0;i<userInput;i++){
       console.log(i); 
    }
};
looping(3);
0
// VM8041:3 1
// VM8041:3 2

function * looping(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
  }
undefined
looping(2)
//looping {<suspended>}
var data = looping(3)
undefined
data.next()
//{value: 0, done: false}
data.next()
//{value: 1, done: false}
data.next()
//{value: 2, done: false}
data.next()
//{value: undefined, done: true}