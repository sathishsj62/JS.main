let lists = [
    { name: "ford", price: 1000 },
    { name: "kia", price: 2000 },
    { name: "Hyundai", price: 500 },
    { name: "Tata", price: 300 },
    { name: "Mahindra", price: 3000 },
    { name: "Toyota", price: 800 },
    { name: "Maruti Suzuki", price: 700 },
    { name: "Honda", price: 500 },
];

//filet Method//
let filterelement = lists.filter((list) =>{
    return list.price <= 1000;
});
// console.log(filterelement);

//map Method//
let mapelement = lists.map((list)=>{
    return list.price;

})
// console.log(mapelement);

//find method//
let findelement = lists.find((list) => {
    return list.name === "ford"

});
// console.log(findelement);
//-------------------------------------------------------------------------
 //forEach method//
  lists.forEach((list) =>{
    // console.log(list.price*2);

 })

 //--------------------------------------------------------
//some method//
let someelement = lists.some((list) =>{
    return list.price <= 1000;
})
// console.log(someelement);

//----------------------------------------------------------

//Evevry method//
let Everyelement = lists.every((list) =>{
    return list.price <=10000;
})
// console.log(Everyelement);  
//---------------------------------------------------------
//reduce
let reduceelement = lists.reduce((currenttotel,list)=>{
    return list.price + currenttotel;
},0)
// console.log(reduceelement);
//----------------------------------------------------------
//includes////

const includeelement = [1,2,3,4,5,6,7,8,9,10];
console.log(includeelement.includes(5));
