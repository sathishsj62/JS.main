//// function direct call method ////

function add(a,b) {
    console.log(a+b);
    
}
add(40,30);

// function add with variable//

function add(a,b){
  let c =a+b;
  console.log(c);

}
add(10,15);  

// function  even num//
function odd (a){
  for(i=0 ; i<a ; i++){
    if(i%2==0){
      return"even"
    }
  }
 
}
odd(10);

  
//function using condition//

function hello(moi) {
    if(moi < 100){
        return "Banana";
    }
    else{
        return "bad";
    }

}
let x = hello(101);
console.log(x);


function name (vivi){
  if(vivi<100){
    return"no"

  }else if (vivi<=160 && vivi>=100){
    return"yes"

  }else{
    return"equal"
  }
}
let a = name(prompt("enter the value"));
console.log(a);

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

function odd(x){
  for(i=0; i<x ;i++){
    if(i%2==0){
      console.log("even:"+i);
    }
    else{
      console.log("odd:"+i);
    }

  }

}
odd(20)


///Arrow function///

let name = a => a * a;
console.log(name(5));


let value = (a,b) => a + b;
console.log(value(5, 40));

let num = (a,b,c) => a+b+c ;
console.log(num(10,20,30));


