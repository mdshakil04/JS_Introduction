const mixedArray = ["Abdul", 12, true, "Kabul"]
// console.log(mixedArray)
// console.log(mixedArray.length)
// console.log(mixedArray.indexOf("Abdul"))
// const abdulPosition = mixedArray.indexOf('Abdul')
// console.log(mixedArray[3])
// console.log(abdulPosition)
//  mixedArray.push = 23;
// const newUpadhan = mixedArray.push(24);
// mixedArray[2] = "Shakil"
// console.log(mixedArray)
// console.log(newUpadhan)
// Code updated to 18_5_3
// console.log(mixedArray.length)
// 
// console.log(mixedArray)
 /*
 
 > To add an element first on an array we use unshift() method
 > We can use shift() to remove first element from an array

 > To add an element last on an array we use push() Method
 > We can use pop() to remove last element from an array
 */
mixedArray.push("Shakil");
console.log(mixedArray)

mixedArray.unshift("Akhi")
console.log(mixedArray)

 const removeFirstElement = mixedArray.shift()
 console.log("This First removed element is " + removeFirstElement)

const removeLastElement = mixedArray.pop()
console.log("This last removed element is " + removeLastElement)

