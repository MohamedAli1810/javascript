// 1- Write a program that allow to user enter number then printit
//((((([[[[[[  answer  ]]]]]])))))
// var x = window.prompt("Enter Number");
// console.log(x);


// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
////((((([[[[[[  answer  ]]]]]])))))
// var x = window.prompt("Enter Number");
// if(( (x % 3) || (x % 4)) == 0 ){
//     console.log("Yes");
// }else{
//     console.log("No");
// }


// 3- Write a program that allows the user to insert 2 integers then print the max
//((((([[[[[[  answer  ]]]]]])))))
// var x =Number(window.prompt("Enter Number X"));
// var y =Number(window.prompt("Enter Number Y"));
// if (x > y){
//     console.log("max is X --> "+x);
// }else{
//     console.log("max is Y --> "+y);
// }


// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
//((((([[[[[[  answer  ]]]]]])))))
// var x = Number(window.prompt("Enter Number"));
// if( x > 0 ){
//     console.log("Positive");
// }else if ( x == 0){
//     console.log("Zero");
// }else{
//     console.log("Negative");
// }

//5- Write a program that take 3 integers from user then print the max element and the min element.
//((((([[[[[[  answer  ]]]]]])))))  
var x =Number(window.prompt("Enter Number X"));
var y =Number(window.prompt("Enter Number Y"));
var z =Number(window.prompt("Enter Number Z"));
if (x > y){
    if( x > z ){
        console.log("max element = " + x);
    }else{
        console.log("max element = " + z);
    } 
    if(y<z){
        console.log("min element = " + y);
    }else{
        console.log("min element = " + z);
    }
}else if(y>z){
    console.log("max element = " + y);
    if(x<z){
        console.log("min element = " + x);
    }else{
        console.log("min element = " + z);
    };
}else {
        console.log("max element = " + z);
    if(x<y){
        console.log("min element = " + x);
    }else{
        console.log("min element = " + y);
    }
}


// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd
//((((([[[[[[  answer  ]]]]]])))))  
// var x = window.prompt("Enter Number");
// if( (x % 2) == 0 ){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }


// 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
//((((([[[[[[  answer  ]]]]]])))))  
// var x = window.prompt("Enter Char");
// if( x == 'a' || x == 'e' || x == 'I' || x == 'o' || x == 'u'){
//     console.log("vowel");
// }else{
//     console.log("Consonant");
// }

// 8- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
//((((([[[[[[  answer  ]]]]]])))))  
// var x = window.prompt("Enter Number");
// for(var i=1 ; i <= x ; i++ ){
//     console.log(i);
// }


// 9- Write a program that allows userto insert integerthen print a multiplication table up to 12.
//((((([[[[[[  answer  ]]]]]])))))  
// var x = window.prompt("Enter Number");
// for(var i=1 ; i <= 12 ; i++ ){
//    var y = x*i;
//    console.log(y);
// }


// 10- Write a program that allows to user to insert number then print all evennumbers between 1 to this number
//((((([[[[[[  answer  ]]]]]])))))  
// var x = window.prompt("Enter Number");
// for(var i=1 ; i <= x ; i++ ){
// if( (i % 2) == 0 ){
//     console.log(i);
// }
// }


// 11- Write a program that take two integers then print the power
//((((([[[[[[  answer  ]]]]]])))))  
// var x =Number(window.prompt("Enter Number"));
// var y =Number(window.prompt("Enter Power"));
// var z = x**y;
// console.log(z);


//12- Write a program to enter marks of five subjects and calculate total, average and percentage.
//((((([[[[[[  answer  ]]]]]])))))  
// var x = Number(window.prompt("Enter Number "));
// var y = Number(window.prompt("Enter Number "));
// var z = Number(window.prompt("Enter Number "));
// var r = Number(window.prompt("Enter Number "));
// var m = Number(window.prompt("Enter Number "));
// var n = x + y + z + r + m;
// var f = n/5;
// var s = ((n*100)/5)*0.01;
// console.log("Total Marks "+ n);
// console.log("Average Marks "+ f);
// console.log("Percentage Marks "+ s +"%");


//13-Write a program to input month number and print number of days in that month.
//((((([[[[[[  answer  ]]]]]])))))
// var x = Number(window.prompt("Enter Number Month"));
// if( x == 1 ){
//     console.log("Day Of Month Jan --> "+"31");
// }else if ( x == 2){
//     console.log("Day Of Month Feb --> "+"28 or 29");
// }else if ( x == 3){
//     console.log("Day Of Month Mar --> "+"31");
// }else if ( x == 4){
//     console.log("Day Of Month Apr --> "+"30");
// }else if ( x == 5){
//     console.log("Day Of Month May --> "+"31");
// }else if ( x == 6){
//     console.log("Day Of Month Jun --> "+"30");
// }else if ( x == 7){
//     console.log("Day Of Month Jul --> "+"31");
// }else if ( x == 8){
//     console.log("Day Of Month Aug --> "+"31");
// }else if ( x == 9){
//     console.log("Day Of Month Sept --> "+"30");
// }else if ( x == 10){
//     console.log("Day Of Month Oct --> "+"31");
// }else if ( x == 11){
//     console.log("Day Of Month Nov --> "+"30");
// }else if ( x == 12){
//     console.log("Day Of Month Dec --> "+"31");
// }


//14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade
//((((([[[[[[  answer  ]]]]]])))))
// var x = Number(window.prompt("Enter Grade "));
// var y = Number(window.prompt("Enter Grade "));
// var z = Number(window.prompt("Enter Grade "));
// var r = Number(window.prompt("Enter Grade "));
// var m = Number(window.prompt("Enter Grade "));
// var n = x + y + z + r + m;
// var s = ((n*100)/5)*0.01;
// if( s >= 90 ){
//     console.log("Grad A");
// }else if ( s >= 90){
//     console.log("Day Of Month Feb --> "+"28 or 29");
// }else if ( s  >= 80){
//     console.log("Grad B");
// }else if ( s  >= 70){
//     console.log("Grad C");
// }else if ( s  >= 60){
//     console.log("Grad D");
// }else if ( s  >= 40){
//     console.log("Grad E");
// }else if ( s  < 40){
//     console.log("Grad F");
// }


//((((([[[[[[  Switch Case  ]]]]]])))))


//15- Write a program to print total number of days in month
//((((([[[[[[  answer  ]]]]]])))))
// var x = window.prompt("Enter Number Month");
// switch(x){
//     case "1":
//         console.log("Day Of Month Jan --> "+"31");
//         break;
//     case "2":
//         console.log("Day Of Month Feb --> "+"28 or 29");
//         break ;
//     case "3":
//         console.log("Day Of Month Mar --> "+"31");
//         break;
//     case "4":
//         console.log("Day Of Month Apr --> "+"30");
//         break;
//     case "5":
//         console.log("Day Of Month May --> "+"31");
//         break;
//     case "6":
//         console.log("Day Of Month Jun --> "+"30");
//         break;
//     case "7":
//         console.log("Day Of Month Jul --> "+"31");
//         break;
//     case "8":
//         console.log("Day Of Month Aug --> "+"31");
//         break;
//     case "9":
//         console.log("Day Of Month Sept --> "+"30");
//         break;  
//     case "10":
//         console.log("Day Of Month Oct --> "+"31");
//         break;
//     case "11":
//         console.log("Day Of Month Nov --> "+"30");
//         break;
//     case "12":
//         console.log("Day Of Month Dec --> "+"31");
//         break;
//     default:
//         console.log("invalid input");
// }


//16- Write a program to check whether an alphabet is vowel or consonant
//((((([[[[[[  answer  ]]]]]])))))
// var x = window.prompt("Enter Char");
// switch(x){
//     case "a":
//         console.log("vowel");
//         break;
//     case "e":
//         console.log("vowel");
//         break ;
//     case "I":
//         console.log("vowel");
//         break;
//     case "o":
//         console.log("vowel");
//         break; 
//     case "u":
//         console.log("vowel");
//         break;   
//     default:
//         console.log("Consonant");
// }


//17- Write a program to find maximum between two numbers
//((((([[[[[[  answer  ]]]]]])))))
// var x =Number(window.prompt("Enter Number X"));
// var y =Number(window.prompt("Enter Yumber Y"));
// var c = Number(x<y);
// switch(c){
//     case 0:
//         console.log("Maximum is X "+ x);
//         break;
//     case 1:
//         console.log("Maximum is Y "+ y);
//         break;
//     default:
//         console.log(" invalid input ");
// }


//18- Write a program to check whether a number is even or odd
//((((([[[[[[  answer  ]]]]]])))))
// var x = Number(window.prompt("Enter Number"));
// var y =Number((x % 2) == 0);
// switch(y){
//   case 1:
//     console.log(" Even ")
//     break;
//   case 0:
//     console.log(" Odd ")
//     break;
//   default:
//     console.log(" invalid input ");
// }


//19- Write a program to check whether a number is positive or negative or zero
//((((([[[[[[  answer  ]]]]]])))))
// var x = Number(window.prompt("Enter Number"));
// switch(true){
//   case x > 0 :
//     console.log(" Positive ");
//     break;
//   case x < 0:
//     console.log(" Negative ");
//     break;
//   case x == 0:
//     console.log(" Zero ");
//     break;
//   default:
//     console.log(" invalid input ");
// }


//20- Write a program to create Simple Calculator
//((((([[[[[[  answer  ]]]]]])))))
// var op = window.prompt("Enter Operation");
// var first = Number(window.prompt("Enter First Number"));
// var second = Number(window.prompt("Enter Second Number"));
// switch (op) {
//     case "+":
//       console.log(first,"+",second , "=", first + second);
//       break;
//     case "-":
//       console.log(first,"-",second , "=", first - second);
//       break;
//     case "*":
//       console.log(first,"*",second , "=", first * second);
//       break;
//     case "/":
//       console.log(first,"/",second , "=", first / second);
//       break;
// }
