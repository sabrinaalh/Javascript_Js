'use strict';

//GYM
// console.log('Lifting weights repeticion 1');
// console.log('Lifting weights repeticion 2');
// console.log('Lifting weights repeticion 3');
// console.log('Lifting weights repeticion 4');
// console.log('Lifting weights repeticion 5');
// console.log('Lifting weights repeticion 6');
// console.log('Lifting weights repeticion 7');
// console.log('Lifting weights repeticion 8');
// console.log('Lifting weights repeticion 9');
// console.log('Lifting weights repeticion 10');

//for loops keeps running while condicion is TRUE
console.log('Using the for Loops')
for(let rep = 1; rep <= 10; rep++){
    console.log('Lifting weights repeticions ' + rep);
}

const sabrina = [
    'Sabrina',
     18,
    'student'
]

// for(let x = 0; x< 3; x++){
//     console.log(sabrina[x]);
// }
const types = [];
for(let x = 0; x< sabrina.length; x++){
    console.log(sabrina[x]);

    //Filling types array
    // types[x] = typeof sabrina[x];
    types.push(typeof sabrina[x]);
    
}

console.log(types);

const years = [1984, 2003, 2005, 2016];
const ages = [];

for(let i = 0; i < years.length; i++ ){
    ages.push(2023 - years[i]);
}
console.log(ages);

//continue and break
console.log('___ONLY STRINGS___')
for(let x = 0; x< sabrina.length; x++){
    if(typeof sabrina[x] !== 'string') continue;
    console.log(sabrina[x]);
    
}


console.log('___BREAK WITH NUMBER___')
for(let x = 0; x< sabrina.length; x++){
    if(typeof sabrina[x] === 'number') break;
    console.log(sabrina[x]);
    
}
//in descending order...2...1...0
for (let i = sabrina.length -1; i >= 0; i--) {
    console.log(i, sabrina[i]);
}

for(let exercises = 1; exercises < 4; exercises++){
    console.log(`STARTING EXERCISE ${exercises}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`lifting weight repetion ${rep}`);   
    }
}

//the while loop
let rep = 1;
while(rep <= 10){
    console.log(`lifting weight repetion ${rep}`);
    rep++;
}

let dice =  Math.trunc(Math.random() * 6) + 1;
while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice =  Math.trunc(Math.random() * 6) + 1;
    if(dice === 6)console.log('Loop is about to end...');
}











