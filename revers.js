const numbers =[1,2,3,4,5,6,7,8,9]
const rev_numbers = [];
for(const num of numbers){
    // console.log(num)
    // rev_numbers.push(num)
    rev_numbers.unshift(num)
}
console.log(rev_numbers)