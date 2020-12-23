var giveUp = document.querySelectorAll(".giveup");
console.log(giveUp);

const counter = [];

for (var gives of giveUp) {
    var num = parseInt(gives.innerText, 10)
    counter.push(num);

    console.log(num);
    
}

var total = counter.reduce((a, b) => a + b, 0)

console.log(total);

document.getElementById("counter").innerText = total;
//var testtest = document.getElementById("test").innerText;
//console.log(testtest);
//var test2 = parseInt(testtest, 10)
//console.log(test2);



//add up all instances of give up and display it elsewhere

//find every instance of a specific class
//push those values to an array
//all add the values in the array
//display that value elsewhere
