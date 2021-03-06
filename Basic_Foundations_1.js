// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function createArray(){
    var array = [ ];
    for(var i=1; i<=255; i++){
        array.push(i);
    }
    return array;
}
var newArr = createArray();
console.log(newArr);

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  
//You may use a modulus operator for this exercise.
function sumEven(){
    var sum = 0;
    for(var i=0; i<=1000; i++){
        if(i%2 == 0){
            var sum = sum + i;
        }
    }
    return sum;
}
var sum_Even = sumEven();
console.log(sum_Even);

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. 
//(e.g. 1+3+5+...+4997+4999).
function sumOdd(){
    var sum = 0;
    for(var i=0; i<=5000; i++){
        if(i%2 == 1){
            var sum = sum + i;
        }
    }
    return sum;
}
var sum_Odd = sumOdd();
console.log(sum_Odd);

// Iterate an array - Write a function that returns the sum of all the values within an array. 
//(e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function arrSum(array){
    var sum = 0;
    for(var i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
var arrSum = arrSum([-5,2,5,12]);
console.log(arrSum);

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. 
//(e.g. for [-3,3,5,7] max is 7)
function findMax(array){
    var max = array[0];
    for(var i=0; i<array.length; i++){
        if(max<array[i]){
            max = array[i];
        }
    }
    return max;
}
var arrMax = findMax([-3,3,5,7]);
console.log(arrMax);

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. 
//(e.g. for [1,3,5,7,20] average is 7.2)
function average(array){
    var sum = 0;
    for(var i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum/array.length;
}
var averageArr = average([1,3,5,7,20]);
console.log(averageArr);

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. 
//(ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function onlyOdd(){
    var newArray = [];
    for(var i=0; i<=50; i++){
        if(i%2 !== 0){
            newArray.push(i);
        }
    }
    return newArray;
}
var NewArray = onlyOdd();
console.log(NewArray);

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
//For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
//(There are two values in the array greater than 3, which are 5, 7).
function greaterY(Y,array){
    var count = 0
    for(var i=0; i<array.length; i++){
        if(array[i]>Y){
            count++;
        }
    }
    return count;
}
var GreaterY = greaterY(3,[1,3,5,7]);
console.log(GreaterY);

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. 
//(e.g. [1,5,10,-2] will become [1,25,100,4])
function square(array){
    for(var i=0; i<array.length; i++){
        array[i] = array[i] * array[i];
    }
    return array;
}
var arraySquare = square([1,5,10,-2]);
console.log(arraySquare);

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
//When the program is done the array should contain no negative values. 
//(e.g. [1,5,10,-2] will become [1,5,10,0])
function negative(array){
    for(var i=0; i<array.length; i++){
        if(array[i]<0){
            array[i] = 0;
        }
    }
    return array;
}
var purgeNeg = negative([1,5,10,-2]);
console.log(purgeNeg);

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
//(e.g. [1,5,10,-2] will return [10,-2,3.5])
function MaxMinAvg(array){
    var max = array[0];
    var min = array[0];
    var sum = 0;
    for(var i=0; i<array.length; i++){
        if(max<array[i]){
            max = array[i];
        }
        if(min>array[i]){
            min = array[i];
        }
        sum = sum + array[i];
    }
    var avg = sum/array.length;
    var newArray = [max, min, avg];
    return newArray;
}
var NewArray = MaxMinAvg([1,5,10,-2]);
console.log(NewArray);

// Swap Values - Write a function that will swap the first and last values of any given array. 
//The default minimum length of the array is 2. 
//(e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swap(array){
    var temp = array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = temp;
    return array;
}
var arraySwap = swap([1,5,10,-2]);
console.log(arraySwap);

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 
//For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function negativeDojo(array){
    for(var i=0; i<array.length; i++){
        if(array[i]<0){
            array[i] = "Dojo";
        }
    }
    return array;
}
var DojoNeg = negativeDojo([-1,-3,2]);
console.log(DojoNeg);