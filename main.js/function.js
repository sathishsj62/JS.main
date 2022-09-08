//// function direct call method ////

// function add(a,b) {
//     console.log(a+b);

// }
// add(40,30);

// function add with variable//

// function add(a,b){
//   let c =a+b;
//   console.log(c);

// }
// add(10,15);  

// function  even num//
// function odd (a){
//   for(i=0 ; i<a ; i++){
//     if(i%2==0){
//       return"even"
//     }
//   }

// }
// odd(10);


//function using condition//

// function hello(moi) {
//     if(moi < 100){
//         return "Banana";
//     }
//     else{
//         return "bad";
//     }

// }
// let x = hello(101);
// console.log(x);


// function name (vivi){
//   if(vivi<100){
//     return"no"

//   }else if (vivi<=160 && vivi>=100){
//     return"yes"

//   }else{
//     return"equal"
//   }
// }
// let a = name(prompt("enter the value"));
// console.log(a);

// // function  //
// function vowelsAndConsonants(s) {
//   let conso ="";
//   for(var i=0;i<s.length;i++){
//       if((s[i]=="a")||(s[i]=="e")||(s[i]=="i")||(s[i]=="o")||
//       (s[i]=="u")){
//           console.log(s[i])
//       }else{
//       }
//   }
//   console.log(conso);
// }
// vowelsAndConsonants('kumaresan')


// function odd  & even //

// function odd(x){
//   for(i=0; i<x ;i++){
//     if(i%2==0){
//       console.log("even:"+i);
//     }
//     else{
//       console.log("odd:"+i);
//     }

//   }

// }
// odd(20)


///Arrow function///

// let name = a => a * a;
// console.log(name(5));


// let value = (a,b) => a + b;
// console.log(value(5, 40));

// let num = (a,b,c) => a+b+c ;
// console.log(num(10,20,30));


// // sum of numbers
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;

// }
// console.log(sum);


// // factorial
// let factorial = 1, number = 5;
// for (let i = number; i >= 1; i--) {
//     factorial = factorial * i;
// }
// console.log(factorial);

// // 
// let fact = 1;
// let f4 = 5;
// for (let i = f4; i >=1; i--) {
//     fact = fact * i;
// }
// console.log(fact);

// // ascending order using for loop
// function value() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }
// value();

// // ascending order using while loop

// function value() {
//     let i = 1;
//     while (i <= 10) {
//         console.log(i);
//         i++
//     }
// }
// value();
// // decending order using for loop

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
// //function tabule//

// // random color //

// function randomcolor(){
// 	var x = Math.floor(Math.random() * 100);
// 	var y = Math.floor(Math.random() * 150);
//     var randomcolor = "rgb(" + x + "," + y + ")";

// 	console.log(randomcolor);


// }

// randomcolor();

// // random num //

// function randomnum(){
//   let a = Math.floor(Math.random()*60)
//   let b = Math.floor(Math.random()*100)
//   let c = Math.floor(Math.random()*150)
//   let randomnum = "num("+ a + "," + b + "," + c +")";
//   console.log(randomnum);
// }
// randomnum();



/// tow stringvowels//

function x(a,b){
	let c=0;
	for(i=0; i<a.length;i++){
		for(j=0; j<b.length ; j++){
			if(a[i]==b[j])
				c++
		}
	}
	return c ;
}
let m,h;
let f = prompt("enter the first string");
let s = prompt("enter the second string");
let v  =["a","e","i","o","u","A","E","I","O","U"];
m = x(f,v);
h = x(s,v);
if(m==h){
	console.log("the both string has same vowels");
}else if( m>h){
	console.log("the first string has more vowels");
}else{
	console.log("the second string has more vowels");
}