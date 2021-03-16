// Print Array Value and Sum so far
var testArr = [6,3,5,1,2,4];
var sum = 0;
var num = 0;
for(var i=0; i<testArr.length; i++){
    var num = testArr[i];
    var sum = sum + testArr[i];
    console.log("Num ",num,"Sum ",sum)
}

// Multiply each value in the array by its array position
var testArr = [6,3,5,1,2,4];
var newArr = []
for(var i=0; i<testArr.length; i++){
    newArr[i] = i * testArr[i];
}
console.log(newArr);