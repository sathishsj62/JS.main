// let x=371;
// let y=x.toString();
// let sum=0;
// for(i=y.length-1;i>=0;i--){
//     let b=parseInt(y[i]);
//     sum+=b*b*b;
// }
// if(sum==x){
//     console.log("amstrong number",x);
// }
// else{
//     console.log('not amstrong number',x);
// }

// not amstrong num/// 

let x=357;
let y=x.toString();
let sum=0;
for(i=y.length-1;i>=0;i--){
    let b=parseInt(y[i]);
    sum+=b*b*b;
}
if(sum==x){
    console.log("amstrong number",x);
}
else{
    console.log('not amstrong number',x);
}
