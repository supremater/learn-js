var carName = 'Ford'
var carYear = 2009 
var personYear = 2018


function calculateAge(year) {
  var carrentYear = 2018
  var result = carrentYear - year
  return result
}

function chekAndLogAge(year) {
  if (calculateAge(year) < 10) {
    console.log('Возраст больше 10 лет')
  } else {
    console.log('Возраст меньше 10 лет')
  }
}

chekAndLogAge(carYear + 'Возраст Машины')
chekAndLogAge(personYear + 'Возраст Человека')
