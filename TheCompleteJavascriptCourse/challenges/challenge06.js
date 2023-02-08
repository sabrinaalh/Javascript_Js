const calcTips = dollar =>{
    if(dollar >= 50 && dollar < 300){
        const tip = dollar/100*15;
    }else{
        const tip = dollar/100*20;
    }
    return tip;
}

console.log(calcTips(bill[0]));

const bill = [125, 555, 44];