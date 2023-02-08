'use strict';

function logger(){
    console.log('My name is Sabrina :3');
}

//calling / running / invokin fuction
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    
    return juice;
}

const appleJuice = fruitProcessor(2,3);
console.log(appleJuice);
console.log(fruitProcessor(2,3));

const appleOrangeJuice = fruitProcessor(3,4);
console.log(appleOrangeJuice);

//Function declaration : can be declarated before fuction
const age1 = calcAge1(2005)
function calcAge1(birthYear){
    //const age = 2023 - birthYear;

    return 2023 - birthYear;
}


//Function expression
const calcAge2 = function(birthYear){
    return 2023 - birthYear;
}

 const age2 = calcAge2(2003);
 console.log(age1, age2);

//Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
//var name = parameters => return;

console.log(calcAge3(2016));

const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;

    return retirement;
}
//var name = parameters => {
// ...
// return ...}

console.log(yearsUntilRetirement(1984) + 'years to retirement');

//

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years.`;
}
//var name = (parameters1, parameters2) => {
// ...
// return ...}

console.log(yearsUntilRetirement2(1984, 'Joice'));
console.log(yearsUntilRetirement2(2005, 'Sabrina'))

//Functions calling other functions
function cutFruitPieces (fruit){
    return fruit * 4;
}
function fruitProcessor(apples, oranges){
    const applePieces=cutFruitPieces(apples);
    const orangePieces= cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    
    return juice;
}
console.log(fruitProcessor(2,3));


