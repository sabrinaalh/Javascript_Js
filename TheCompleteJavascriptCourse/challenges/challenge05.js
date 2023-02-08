//Team 1
const pointOfDophins = 85;
const pointOfDophins1 = 54;
const pointOfDophins2 = 41;

//Team 2
const pointOfKoalas = 23;
const pointOfKoalas1= 34;
const pointOfKoalas2= 27;



const calcAvarage= (value1, value2, value3)=>{
  
    return Number.parseInt((value1+value2+value3)/3);

}

const totalOfPointDophins = calcAvarage(pointOfDophins,pointOfDophins1,pointOfDophins2);
const totalOfPointKoalas = calcAvarage(pointOfKoalas,pointOfKoalas,pointOfKoalas2);

//console.log(totalOfPointDophins,totalOfPointKoalas);

const checkWinner= (avgDophins, avgKoalas)=>{


    if(avgDophins >= avgKoalas*2){
        console.log(`Dophins win!!!(${avgDophins} vs. ${avgKoalas})`);
    }else if(avgKoalas >= avgDophins*2 ){
        console.log(`Koalas win!!!(${avgKoalas} vs. ${avgDophins})`);
    }else{
        console.log(`All failed...what a shame :(`);
    }
}

console.log(checkWinner(totalOfPointDophins,totalOfPointKoalas));


