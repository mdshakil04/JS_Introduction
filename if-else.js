let fees = 1000;
const isStudent = true;
if( isStudent === true){
    fees = fees + 100;
}
else{
    fees = 0;
}
// console.log("Tumi diba " + fees)

fees = isStudent === true ? fees+100 : fees = 0;
console.log("Tumi diba "+fees)