const price = 1250;
const member = true;

if( price >= 10000 || member == true){
    console.log("You will get 5% discount")
    const discount = price * 0.05;
    const finalPrice = price - discount;
    console.log("Your final price after discount is: ", finalPrice)
}else{
    console.log("You have to pay full BDT")
}