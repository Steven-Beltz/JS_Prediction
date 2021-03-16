// Print Odds 1-20
for(var i=1; i<20; i++){
    if(i%2 != 0){
        console.log(i);
    }
}

// Sum and Print 1-5
var num = 0
var sum = 0
for(var i=0; i<5; i++){
    num++;
    var sum = sum + num;
    console.log("Num:",num,"Sum:",sum);
}