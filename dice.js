# Dice-probability-of-2-Node.js
How many times you can get 2 if you roll a dice 1 000 000 times (or how many times you want) 

//Dice probability

var firstDie
var array = [];

function testT (firstDie) {
    firstDie = Math.ceil(Math.random() * 6),
    array.push(firstDie)
   
    //console.log(firstDie);
  return firstDie;

}

for ( let i = 0 ; i<1000000 ; i++) {
    testT(i)
}


function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}

countInArray(array, 2); // returns 2

var p2 = (countInArray(array, 2) )/1000000*100 + " %"

console.log(p2)
