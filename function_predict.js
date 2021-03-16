function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);
// Predict: World Hello
// Ran: Hello (not sure why world wasnt also shown)

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);
// Predict: 8, 11
// Ran:    Summing Numbers!
//         num1 is: 3
//         num2 is: 5
//         Summing Numbers!
//         num1 is: 4
//         num2 is: 7
//         8
//         11
// I understand now why world wasnt shown previously, 
// the return statement came first and ended the function befor world could be stated. 

function highFive(num){
        for(var i=0; i<num; i++){
            if(i == 5){
                console.log("High Five!");
            }
            else{
                console.log(i);
            }
        }
    }
//Predict:  nothing happens, function is never called.
//Ran:      nada