const mobile = {
    brand : 'Apple',
    price : 40000,
    color : 'white',
    camera : '12mp' ,
    storage : 256
}
// console.log(mobile)
for(const key in mobile){
    console.log(key)
    console.log(mobile[key])
}