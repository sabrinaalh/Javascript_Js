'use strict';

const jonas = {
    fullName: 'Jonas Smith',
    mass: 75,
    height: 1.69,

    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const mark = {
    fullName: 'Mark Miller',
    mass: 89,
    height:1.80,

    calcBMI: function(){
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
}

console.log(jonas.calcBMI());
console.log(mark.calcBMI());

console.log(`John's BMI (${parseInt(jonas.bmi)}) is ${jonas.bmi > mark.bmi ? 'higher': 'short'} than Mark's BMI (${parseInt(mark.bmi)})`);
