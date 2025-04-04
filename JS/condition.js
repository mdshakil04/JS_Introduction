const price = 1000;
const member = true;

// if( price >= 1000 && member == true){
//     // console.log("You will get 10% discount")
//     const discount = price * 0.1;
//     const finalPrice = price - discount;
//     // console.log("Your final price after discount is: ", finalPrice)
// }else if(price > 5000){
//     // console.log("You get 5% discount")
//     const discount = price * 0.05;
//     const finalPrice = price - discount;
//     // console.log("Your final price after discount is: ", finalPrice)
// }else{
//     // console.log("Sorry! No discount available")
//     // console.log("Your final price is: ", price)
// }
/*
Ternary if-else

condition ? do something when true : do something when false



*/
// price > 1000 ? console.log("I can't effort this") : console.log("I will buy this")
const finalPrice = price >= 10000 && member == true? price - (price * 0.1) : price > 5000? price - (price * 0.05) : price;
