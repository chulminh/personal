//find all the classes "giveup" 
var giveUp = document.querySelectorAll(".giveup");
//create array where all the values will be gathered
const counter = [];

//for every individual tag within the "giveup" class, change from string to number then push to array
for (var gives of giveUp) {
    var num = parseInt(gives.innerText, 10)
    counter.push(num);
}

//reduce individual values in counter to 1 single value
var total = counter.reduce((a, b) => a + b, 0)

//if total is less than 10, concatenate two 0's so it looks like 00X
//if total is less than 100, concatenate one 0 so it looks like 0XX
//display total value in "counter" id


//0 as a string to concatenate or something
const zero = "0";

//if total is less than 10, add two 0s, if its less than 100, add one 0, otherwise display as it is
if (total = 0) {
    document.getElementById("counter").innerText = zero + zero + zero;
} else if (total < 10) {
    document.getElementById("counter").innerText = zero + zero + total;
} else if (total < 100) {
    document.getElementById("counter").innerText = zero + total;
} else {
    document.getElementById("counter").innerText = total;
}


