'use strict';

const myfriends1 = 'God';
const myfriends2 = 'Mom';
const myfriends3 = 'Cats';

//or

//Array

const myfriends = ['God', 'Mom', 'Cats'];

console.log(myfriends);


//Array for function

const years = new Array (1984, 2003, 2005,2016);


//Search element in index

console.log(myfriends[0]);
console.log(myfriends[1]);
console.log(myfriends[2]);

//Real number of index

console.log(myfriends.length);

//last element of array

console.log(myfriends[myfriends.length - 1]);

//Uptade to array

myfriends[2] = "Cats don't like me :(";
console.log(myfriends);

const firstName = 'Sabrina'
const sabrina = [firstName, 'Almeida', 2023-2005, myfriends];//Array inside a array, var in array, count and string together



//Exercise
const calcAge2 = function(birthYear){
    return 2023 - birthYear;
}

const yearsold = [1984,2003,2005,2016];

const age=(calcAge2(yearsold[0]));
const age1=(calcAge2(yearsold[1]));
const age2=(calcAge2(yearsold[2]));
const age3=(calcAge2(yearsold[3]));
//or
console.log(calcAge2(yearsold[yearsold.length-1]));

console.log(age, age1, age2, age3);

const ages = [age,age1,age2,age3];//or
const ages2 =[calcAge2(yearsold[0]),calcAge2(yearsold[1]),calcAge2(yearsold[2]),calcAge2(yearsold[yearsold.length-1])];

console.log(ages2)

//Methods or Basic Array Operation

const myPets=['Penelope', 'Cherie','Negao'];
//Add a value in the end of array.
const NewLenght = myPets.push('Me, i am a kitty😜💖');
//is a function

console.log(myPets);
console.log(NewLenght);

//Add a value in first position
myPets.unshift('Sinho');
console.log(myPets);

//Remove last elements
myPets.pop()
console.log(myPets);
const popped = myPets.pop();
console.log(popped);

//Remove firt elements
myPets.shift();
console.log(myPets);

//Search elements
console.log(myPets.indexOf('Cherie'));//return a number and if don't exist, return -1

console.log(myPets.includes('Negao')); //return boolean value

if(myPets.includes('Penelope') === true){
    console.log('My old cat is alive!')
}





