//5 False values: 0, '', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sabrina'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money){
    console.log("Don't spend it all :)")
}else(
    console.log('You should get a job.')
)

//

let height;
if (height){
    console.log('Yay! Height is defined');
}else{
    console.log('Height is undefined.')
}