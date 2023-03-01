const DolphinsScore = 150;
const DolphinsScore1 = 108;
const DolphinsScore2 = 89;

const AvarageofDolphins = Number.parseInt((DolphinsScore + DolphinsScore1 + DolphinsScore2) / 3);

console.log(AvarageofDolphins);

const KoalasScore = 100;
const KoalasScore1 = 91;
const KoalasScore2 = 110;

const AvarageofKoalas = Number.parseInt((KoalasScore + KoalasScore1 + KoalasScore2) / 3);

console.log(AvarageofKoalas);

if(AvarageofDolphins > AvarageofKoalas && AvarageofDolphins >= 100){
    console.log('Team Dolphins won!!!');
}else if(AvarageofDolphins === AvarageofKoalas && AvarageofDolphins >= 100 && AvarageofKoalas >= 100){
    console.log('You are losers!!!');
}else if(AvarageofKoalas > AvarageofDolphins && AvarageofKoalas >= 100){
    console.log('Team Koalas won!!!');
}else{
    console.log("a")
}

