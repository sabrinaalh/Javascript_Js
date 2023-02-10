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
    age: 2023-2005,//key: 'value',
    job: 'junior developer',//key: 'value',
    myPets: ['Cherie', 'Penelope', 'Negao']//key: 'value',
};

/* Object:

const/let nameObject = {
    category: object,
    category: object
};
*/
//Calling the object: 
console.log(sabrina.firstName);
console.log(sabrina.middleName);
console.log(sabrina.age);
console.log(sabrina.job);
console.log(sabrina.myPets[0]);
console.log(sabrina.myPets[1]);
console.log(sabrina.myPets[2]);
console.log('//');
//or
console.log(sabrina['firstName']);
console.log(sabrina['middleName']);
console.log(sabrina['age']);
console.log(sabrina['job']);

