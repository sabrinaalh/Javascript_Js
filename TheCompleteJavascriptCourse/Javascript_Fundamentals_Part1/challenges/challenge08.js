'use strict'

const bills=[ 22,295,176,440,37,105,10,1100, 86,52];
const tips=[];
const totals=[];

    const calcTip = (bill) =>{
    return bill >=50 &&  bill <= 300? bill*0.15: bill *0.20;
    }



for(let i = 0;i<=bills.lenght;i++){
   const tip = calcTip(bills[i]);
   tips.push(tip);
   totals.push(tip+ bills[i]);

   console.log(`Bill: ${bills[i]}, Tip:${tips[i]} and Total: ${totals[i]}`);
};





