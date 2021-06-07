//1.Ways tom Print in Java Script
//console.log('This Is Rocky Rajak')
//alert('You Are Hacked')
///document.write('This is Our Personal Tutorials')

//2.Java Script Console API
console.log('This Is Rocky Rajak');
console.log('This is ', 4 + 10, 'Another Line');
console.warn("This Is Last Warning");
console.error("Beta Galti Bhaut Karta h")
// 3.Java Script Variable
//It is Containor which store data values

var num = 34;
var num2 = 56;
console.log(num + num2);

var a = 40;
var b = 60;
console.log(num - a)
console.log(a + b)
console.log(a * b)

// 4.Data Types in Java script
//String
var str1 = "This Is First No."  //String Data Type
var str2 = "This Is second No."
var str3 = "Your Final Answer"
//Numbers
var c = 30;    // NUm Data Type
console.log(str1, a,
    str2, b)
console.log(str3, a + b);

//Objects
var marks = {
    Rohit: 98,
    Ravi: 78,
    Rajan: 28,
    Puneet: 89,


}
console.log(marks);
//Booleans Data Type
var d = true;
var e = false;
console.log(e);

var k;
var l = undefined;
console.log(k);
console.log(l);
var n = null;
console.log(n);

/*At Very High Level There are Two Data Types in JS
1. Primitive Data Types:- Undefined, Null, Numbers ,Strings, Booleans, Symbols. 
2. Referance Data Types:- Arrays and Objects. */

//Array
var array = [1, 2, 3, 4, 5]
console.log(array);

var arr = [2, 4, 6, 8, "Akki Bhaiya", 10]
console.log(arr);

//5.OPerators In Java Script
//Aritmmetics Operators
var a1 = 200;
var a2 = 20;
console.log("This Is Value Of a1 + a2", a1 + a2);
console.log("This Is Value Of a1 - a2", a1 - a2);
console.log("This Is Value Of a1 * a2", a1 * a2);
console.log("This Is Value Of a1 / a2", a1 / a2);

// Assignement Operators
//It is uses for Assigning values
var b1 = a1;
console.log(b1);
b1 += 10;  // b1= b1+10
b1 -= 20;  //b1= b1-20
b1 *= 10; //b1=b1*10
b1 /= 10; //b1=b1/10

console.log(b1);


// Comparision Operator  == uses for comparision
var x = 10;
var y = 20;

console.log(x == y);

console.log(x >= y);

console.log(x <= y);

console.log(x > y);

console.log(x < y);

//Logical Operator  
// Logical &&(And) Operator gives True only for Both true 

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// Logical || (or) Operator      | its Bit Wise Operator
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
//Logical Not ! Operator
console.log(!true);
console.log(!false);

//6.Functions
// DRY= Do not Repeat Yourself
function avg(x1, x2) {
    return (x1 + x2) / 2

}
c1 = avg(4, 6);
c2 = avg(10, 20);
console.log(c1, c2);

function family(f1, f2) {
    f1 >= f2 + 30;
    return f1, f2;

}
s1 = family(50, 10);
console.log(s1);


//Conditionals in java script
//If-else Statement
var age2 = 6;
if (age2 > 8) {
    console.log('You are Not Chhota Bachha');
}
else {
    console.log('You are a Chhota Bachha');

}
var age1 = 10;
if (age1 > 30) {
    console.log("You Can Drink Only Water");
}
else {
    console.log('You Can Drink Anything');
}
//if-else ladder statement
var age = 15;
if (age > 38) {
    console.log('You are Not Chhota Bachha');
}
else if (age > 52) {
    console.log('You are Teenager Bachha');

}

else if (age > 45) {
    console.log('You are Adult Young Boy');

}
else if (age > 25) {
    console.log('You are Young Man');

}

else if (age > 30) {
    console.log('You are Family Person');

}

else if (age > 60) {
    console.log('You are Now Senior Setizen');

}
else {
    console.log('You should Die now');
}

console.log("End Of Ladder");

var age3 = 9;
if (age3 > 10) {
    console.log("You can Drink Rasna Water");

}
else {
    console.log("You Can Drink Only Water");

}
/*c4= age3(5);
console.log(c);
c5= age3(15);
console.log(c5);
*/

//Loops in Java Script
//For Loop
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1.forEach(function (element) {
    console.log(element)
})
//console.log(arr);
//for(var i=0; i < arr1.length; i++){
//  console.log(arr1[i]);
//}

/*var arr2 =[1,2,3,4,5,6,7,8,9,10];
//console.log(arr);
for(var i=arr2.length; i > 0; i--){
    console.log(arr2[i]);
}*/

//While Loop
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var j = 0;
while (j < arr3.length) {
    console.log(arr3[j]);
    j++;
}
/*
///Do While
var arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var j1 = 0;
do {

    console.log(arr4[j1])
    j++;
}
while (j1 < arr4.length);

// Break and Continuoue

for (vari = 0; i < arr.length; i++) {
    if (i == 2) {

        break;
    }
    console.log(arr[i]);
}*/
// var arr5 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// var j5=0;
// while(j5<arr5.length){
// console.log(arr5[j5]);
// j5++;

// }

// console.log("Hello world");

// var arr6 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// var j6=0;
// do{
//     console.log(arr6[j5]);
//     j6++;
// }
// while(j6<arr5.length);

var arr8 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
for (var j8 = 0; j8 < arr8.length; j8++) {
    console.log(arr8[j8]);
    if (j8 == 5) {

        //break; 
        continue;
    }
    //  else(j7==6);{
    //      break;
    //  }
}
// console.log("Hello My Name Is Khan");
let arr9 = ["fan", "camera", "cycle", "tv", 50, 90, "cloths", "books", true, null];
console.log(arr9.length);
arr9.pop();

arr9.push("table");

//arr9.shift();
arr9.unshift("Home");
console.log(arr9);
console.log(arr9.unshift("Home"));
arr8.sort();
console.log(arr8);

//My String Method IN Java Script
let mylovelystring = "Rocky Is Pagalait Boy";
console.log(mylovelystring.length);
console.log(mylovelystring.indexOf("Is"));
console.log(mylovelystring.slice(0,5));
d= mylovelystring.replace("Rocky","Akshay")
console.log(mylovelystring);
console.log(d, mylovelystring);

let mydate= new Date;
console.log(mydate);
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDay());
//Dom Manupulation
let elem= document.getElementById("btn");
console.log(elem);
let elemclass= document.getElementsByClassName("container");
console.log(elemclass);
elemclass[0].style.background="yellow";
// elemclass[0].classList.add("bgprimary");
// //elemclass[0].classList.add("textsuccess");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

tn= document.getElementsByTagName("button");
console.log(tn);

tin= document.getElementsByTagName("div");
console.log(tin);

createdelement= document.createElement('p');
createdelement.innerText="This is You Who will Learn Firstly";
tin[0].appendChild(createdelement);

createdelement1= document.createElement('b');
createdelement1.innerText="This is You Who will Learn Firstly Bold";
tin[0].replaceChild(createdelement1, createdelement);
//Selecting using query Selector
sel=document.querySelector('.container');
console.log(sel);

//Events in JS
//console.log(clicked("btn"));
function clicked()
{
    console.log("Button was clicked");

}
window.onload= function(){
    console.log('Document has been Loaded');
}
// document.getElementById('firstcontainer');

// firstcontainer.addEventListner('Click',function(){
//     console.log("Click Has been Done")
 
//})

//jasn
obj = { name:"Rocky", length:1}
jso = JSON.stringify(obj);
console.log(jso)
console.log(typeof jso);
//parsed = JSON.parse(`{ name:"Rocky", length:1}`)
//console.log(parsed);
//Templet Laterals Backtics
a= 34;
console.log(`this is my ${a}`);
