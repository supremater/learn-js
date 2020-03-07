let carName = 'Ford'
let carYear = 2008
let personYear = 1990 

function calcAge(year) {
    let currentYear = 2018 
    let result = currentYear - year  
    return result
}

function checkEnd(year) {
    if (calcAge(year) < 10) {
        console.log('Возраст меньше 10 лет');
    } else {
        console.log('Возраст больше 10 лет');
    }
}  

checkEnd(carYear)
checkEnd(personYear)