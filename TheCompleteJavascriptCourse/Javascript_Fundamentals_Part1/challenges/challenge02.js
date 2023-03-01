const markheight = 1.70;
const markweight = 60;

const johnheight= 1.60;
const johnweight = 70;

let markresults = Number.parseInt(markweight/(markheight * markheight));
let johnresults = Number.parseInt(johnweight/(johnheight * johnheight));

if(markresults > johnresults){
    console.log(`Mark's BMI is higher than John's: ${markresults}`)
}else if( markresults === johnresults){
    console.log(`Mark's BMI is same as John's: ${markresults} `)
}else{
    console.log(`Mark's BMI is less than John's: ${johnresults}`)
}
