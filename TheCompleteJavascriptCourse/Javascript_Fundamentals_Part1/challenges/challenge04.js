let bill= 40;

//const walter = bill >= 50 && bill <= 300 ? tip = bill / 100 * 15: tip = bill 100 * 20 

const tip = bill <= 300 && bill >= 50 ? bill * 0.15: bill * 0.20
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}` )