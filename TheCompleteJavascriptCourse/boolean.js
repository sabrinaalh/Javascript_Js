const hasDrivesLincense = true;
const hasGoodVision = true;

console.log(hasDrivesLincense && hasGoodVision);//&&-> And
console.log(!hasDrivesLincense && hasGoodVision);
console.log(hasDrivesLincense && !hasGoodVision);
console.log(!hasDrivesLincense && !hasGoodVision);


console.log(hasDrivesLincense || hasGoodVision);//|| -> Or
console.log(!hasDrivesLincense || hasGoodVision);
console.log(hasDrivesLincense || !hasGoodVision);
console.log(!hasDrivesLincense || !hasGoodVision);

//const shouldDrive = hasDrivesLincense && hasGoodVision;

//if(hasDrivesLincense && !hasGoodVision){
  //  console.log("Sara is able to drive.")
//}else{
 //   console.log("Someone else should drive...");
//}

const isTired = true;
console.log(hasDrivesLincense && hasGoodVision && isTired);

if(hasDrivesLincense && hasGoodVision && !isTired){
 console.log("Sara is able to drive.")
}else{
  console.log("Someone else should drive...");
}