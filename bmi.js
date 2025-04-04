const weight =70;
const height = 1.65;
const bmi = (weight /( height * height)).toFixed(1);
console.log("Your BMI is "+ bmi)
if (bmi < 18.5){
    console.log("You are underweight")
}else if(bmi >= 18.5 && bmi <= 24.5){
    console.log("You are normal")
}else if(bmi >= 25 && bmi <= 29.9){
    console.log("You are Overweight")
}