'use strict';

const sabrinaArray = [
    'Sabrina',
    'Almeida',
    2023 - 2005,
    'junior developer',
    ['Cherie', 'Penelope', 'Negao']
];

//Reference by name: Objects

const sabrina = {
    firstName: 'Sabrina',//key: 'value',
    middleName: 'Almeida',//key: 'value',
    //age: 2023-2005,//key: 'value',
    birthYear : 2005,
    job: 'junior developer',//key: 'value',
    myPets: ['Cherie', 'Penelope', 'Negao'],//key: 'value',
    //new
    hasDriversLicense: true,

   // calcAge: function(birthYear){
   //     return 2023 - birthYear;
   // }

   // calcAge: function (){
   //     return 2023 - this.birthYear;
   // }

   calcAge: function (){
    this.age = 2023 - this.birthYear;
    return this.age;
   },
   //Challenge
   getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and she ${this.hasDriversLicense ? 'a' : 'no'} has a driver licenses.`  ;
   }

};

//methods in objects
console.log(sabrina.calcAge());
console.log(sabrina['calcAge']());
//comand D, select all
console.log(sabrina.calcAge
());
console.log(sabrina['calcAge']());

console.log(sabrina['getSummary']());




//inside 
//const calcAge = function (birtYear) {
// return 2023 - 2005;}


/* Object:

const/let nameObject = {
    category: object,
    category: object
};
*/
//Calling the object for dot: 
console.log(sabrina.firstName);
console.log(sabrina.middleName);
//console.log(sabrina.age);
console.log(sabrina.job);
console.log(sabrina.myPets[0]);
console.log(sabrina.myPets[1]);
console.log(sabrina.myPets[2]);
console.log('//');
//or bracket notation:
console.log(sabrina['firstName']);
console.log(sabrina['middleName']);
console.log(sabrina['age']);
console.log(sabrina['job']);

const nameKey = 'Name';
console.log(sabrina['first'+nameKey]);
console.log(sabrina['middle'+nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firts name, middle name, age, job and pets.');


if(sabrina[interestedIn]){
    console.log(sabrina[interestedIn]);
}else{
    console.log('Wrong request! Choose between firts name, middle name, age, job and pets.');
}

//Add in object
sabrina.location = 'Sao Paulo';
sabrina['instagram'] = '@sabrinaalh';
console.log(sabrina);

//Challenge
console.log(`${sabrina['first' + nameKey]} has a ${sabrina.myPets.length} pets. Your first pet is 
${sabrina.myPets[1]}, a old cat.`);

//Challenge
