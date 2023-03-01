const calcTips = dollar =>{
    let tip = 0;
    if(dollar >= 50 && dollar <= 300){
        tip = dollar*0.15;
    }else{
         tip = dollar*0.20;
    }
    return tip;
}

const bill = [125, 555, 44];
const tips = [calcTips(bill[0]),calcTips(bill[1]),calcTips(bill[2])];
console.log(tips);

const total = [bill[0] + calcTips(bill[0]), bill[1]+ calcTips(bill[1]), bill[2] + calcTips(bill[2])];



for(let i = 0; i < 3; i++){
    switch(i){
        case 0:
            console.log("Primeira conta: ");
            break;
        case 1:
            console.log("Segunda conta: ");
            break;
        case 2:
            console.log("Terceira conta: ");
            break;
    }
    console.log(`Valor da compra: R$${bill[i]}  + Valor da gorjeta: R$${calcTips(bill[i])}. TOTAL: R$${total[i]}`);
}