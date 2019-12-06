// Переменная имя = 'Значение'  
var message = 'Robot'          

// Урок 2 (Типы Данных)

var number = 42 
var string = 'Message'
var isTrue = true // false 
var obj = { a: 1 }
var isNull = null
var indef = undefined

console.log(typeof number)

// Урок 3 

var num1 = 12
var num2 = 8

console.log(num1 + num2)
console.log(num1 - num2)

var srt1 = 'Hello'
var srt2 = 'Worold'

console.log(srt1 + ' ' + srt2)

// 


/* ОПЕРАТОРЫ - Каждый оператор имеет свой приоритет.
----
Допустим "=" Имеет функцию присвоения(Его приоритет это 3), последовательность приоритета зависит от его числа от самого большего к самому меньшему.  
----я
Оператор "()" - Имеет приоритет 20(Самое большое среди операторов!) 

*/

// Урок 4 

var result = 12 - 6 / 3
var isGreater = 20 - 6 * 3 >= 4
var isGreater2 = 20 - 6 * 3 >= 2


console.log(isGreater)
console.log(isGreater2)

// 5 Урок Постфиксный инкремент(Сначала идет) и Префиксный инекремент(После идет) 
    //(Дикремент это -)
console.log(8 % 3)

var i = 1

// i = i + 1
i++
console.log(i)
// i = i - 1
i--
console.log(i)

//i = i + 3
i += 3
console.log(i)

console.log(++i)
// 6 Урок Операторы сравнения 

console.log('5 > 3', 5 > 3)
console.log('5 > 3', 3 < 2)

console.log('8 =< 7', 8 <= 7)

console.log('4 != 5', 4 != 5)

console.log('4 === 4', 4 === '4')

// Урок 7 Логические операторы 

/* 
      &&  | true  | false
    true  | true  | false
    false | false | false

      ||  | true | false
    true  | true | true
    false | true | false

    && (и) - true если все значения true 
    || (или) - true если хоть одно значение true 
    ! (нет) - инвертирует true или false
*/

console.log(true || true)
console.log(true && false)

console.log(true || false)
console.log(false || false)

console.log(!false)
console.log(!!true) // !!!true => !!false => !true => false (Логика как работает)

console.log((false && true) || (true || false) || !true)

// 8 Урок услочные Операторы


var carrentYear = 2018
var carName = 'Ford'
var carYear = 2008
var carAge = carrentYear - carYear

if (carAge < 5) {
  console.log(carName + ' Если в.з младше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
  console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам ')
} else {
  console.log('Возраст ' + carName + ' ' + carAge + ' Годам')
}

//(Значение false) 0 , null , undefiend , '' , NaN

if (NaN) {
  console.log('Значение true')
} else {
  console.log('Значение false')
}

// Урок 9 Тернарные операторы

/* if (4) {
  console.log('Значение true')
} else {
  console.log('Значение false')
} */


// Тернарные операторы аналогичтны тому что выше
!((false || true) || !false) ? console.log('Значение true') : console.log('Значение false')


//-------------------------

var personAge = 55

/* if (personAge < 18) {
  message = 'Человек не совершеннолетний'
} else {
  message = 'Человек совершеннолетний'
} */

var message = personAge < 18
  ? 'Человек не совершеннолетний'
  : 'Человек совершеннолетний'

console.log(message)

// Операторы Switch Case Урок 10

var carColor = 'green'

/* if (carColor === 'green') {
  console.log('Цвет машины зелёный')
} else if (carColor === 'yellow') {
  console.log('Цвет машины жёлтый')
} else if (carColor === 'red') {
  console.log('Цвет машины красный')
} else {
  console.log('Цвет машины неизвестен')
} */


switch (carColor) {
  case 'green':
    console.log('Цвет машины зелёный')
    break
  case 'red':
    console.log('Цвет машины красный')
    break
  case 'yellow':
    console.log('Цвет машины жёлтый')
    break
  default:
    console.log('Цвет машины неизвестен')
}

// Урок 11 Функции


