const age = '18';
if(age === 18)console.log('You just became an adult :D (strinc)');

if(age == 18)console.log('You just became an adult :D (loose)');

const favourite = prompt("What's your favorite number? ");

console.log(favourite);
console.log(typeof favourite);

//22 === '22' -> FALSE
if(favourite === 2)
{
    console.log('Cool! 2 is an amaizing number!');
}else if(favourite == 6){
    console.log("That's number is not cool for me :( ")
}else(
    console.log("That's number is not 2 or 6...wharever.")
)

if(favourite !== 2)console.log('Why not 2? :V')
