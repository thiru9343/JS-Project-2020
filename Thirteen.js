//1. for ==> simple form to iterate
//2. While ==> It's first check condition and apply logic
//3.  do- while ==> logic must run one and then check the codition
//4. for off ==> new way of for loop
//5. for in ==> used for objects
//6. map ==>
//7. filter ==> 

var i;
for (i=1;i<=5;i++){
    console.log(i);
}

for (var i=1;i<=5;i++){
    console.log(i);
}

var city=["Wayen", "London","New York", "Medampally", "Surjapur", "Khanapur"];
for (i=0;i<city.length;i++){
    console.log(city[i]);
}

var i=1;
while(i<=5){
    i++;
    console.log(i);
}

///For//
for(i=0;i<10;i++){
    console.log(i)
}

var city = ["Paris", "Nice", "NewYork", "London","Dubai", "Delhi", "Amsterdam"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

/////While///
var i = 0;
while(i<10){
    console.log(i)
    i++
}

var i=1;
while(i<=5){
    console.log(i);
    i++;
}


var i=1;
while(i<5){
    console.log(i);
    i++;
}


var i=1;
while(i<=5){
    i++;
    console.log(i);
}


var i=1;
while(i<=2){
    i++;
    console.log(i);
}


var i=1;
while(i<3){
    console.log(i);
    i++;
}

//do-while//
var i=0;
do{
    console.log(i);
    i++;
}while(i<5){
}

var i=0;
do{
    i++;
    console.log(i);
}while(i<5){
}


var i=0;
do{
    console.log(i);
    i++;
}while(i<5){
    console.log("while log", i);
}



for(var i=0; i<10; i++){
    console.log(i);
}

var i=0;
while(i<10){
    i++
    console.log(i);
};

var i=0;
do{
    console.log(i);
    i++
}while(i<10){

};


var city = ["Paris", "Nice", "NewYork", "London","Dubai", "Delhi", "Amsterdam"]
var i = 0;
do{
    console.log(city[i])
    i++
}
while(i<city.length)


var city = ["Paris", "Nice", "NewYork", "London","Dubai", "Delhi", "Amsterdam"];
for(cities of city){
    console.log(cities);
}
