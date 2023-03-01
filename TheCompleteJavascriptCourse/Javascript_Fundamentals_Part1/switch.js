const day = 'sunday';

switch(day){
    case 'monday'://day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup')
        break;
    case 'tuesday':
        console.log('Prepare teory videos');
        break;
    case 'wednesday':
        console.log('X')
        break;
    case 'thursday':
        console.log('Write code exemples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
        console.log('X')
        break;
    case 'sunday':
        console.log('Enjoy the weekend :)')
        break;
    default:
        console.log('Not a valid day');
        break;
}

//Or

if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup')
}else if( day === 'tuesday'){
    console.log('Prepare teory videos');
}else if(day === 'wednesday'){
    console.log('X')
}else if(day === 'thursday'){
    console.log('Write code exemples');
}else if(day === 'friday'){
    console.log('Record videos');
}else if(day === 'saturday'){
    console.log('X')  
}else if(day === 'sunday'){
    console.log('Enjoy the weekend :)') 
}else{
    console.log('Not a valid day');
}