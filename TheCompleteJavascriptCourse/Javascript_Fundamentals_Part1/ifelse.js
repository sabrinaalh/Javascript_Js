const age = 16;
/*const isOldenough = age >= 18;*/

if(age >= 18){
 console.log('Can start driving licenses in Brazil🚗')
}else{
    const yearsLeft = 18 - age;

    console.log(`Oh..too young. Wait another ${yearsLeft} years.`);
    /*Grow up and we can talk about😘*/
}

const birthYear = 2005

let century = 0;

if(birthYear <= 2000){
     century = 20;
}else{
     century = 21;
}

console.log(`Well, the century where you born is ${century}!`);