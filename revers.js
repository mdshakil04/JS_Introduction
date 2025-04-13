const numbers =[1,2,3,4,5,6,7,8,9]
const rev_numbers = [];
 /*
for(const num of numbers){
    // console.log(num)
    // rev_numbers.push(num)
    rev_numbers.unshift(num)
}
console.log(rev_numbers)
*/
for(let i =0; i< numbers.length; i++){
    // console.log(numbers[i])
    const num = numbers[i]
    rev_numbers.unshift(num)
}
// console.log(rev_numbers)
const new_rev_numbers = [];
for(let i = numbers.length-1; i >= 0 ; i--){
    const num = numbers[i]
    // console.log(num)
    new_rev_numbers.push(num)
}
console.log(new_rev_numbers)