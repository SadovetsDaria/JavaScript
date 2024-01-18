/* ДЗ 1
Вам необхідно намалювати в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу): на першому рядку - одна зірочка, на другій дві, і так далі. 
Рішення оформіть у вигляді функції, куди передаються два параметри: висота трикутника та символ, яким його потрібно "малювати". */
       
// додала дефолтні значення та додала перетворення символу малювання до стрінги, щоб можна було малювати цифрами
function drawTriangle(height = 5, symbol = `*`) {
    let string = String(symbol)
    for (let i = 1; i <= height; i++) {
        console.log(string)
        string += symbol;
    }
}
drawTriangle(3, 3)

//попередній варіант, але з циклом while
function drawTriangle(height = 5, symbol = `*`) {
    let string = String(symbol)
    let i = 1;
    while (i <= height) {
        console.log(string)
        string += symbol;
        i++
    }
}
drawTriangle(5, `+`)

// спробувала обгорнути у умову, щоб не приймало від'ємну, чи нульову висоту
function drawTriangle(height = 5, symbol = `*`) {
    if (height <= 0) {
        return console.log(`Error`)
    }
    let string = String(symbol)
    for (let i = 1; i <= height; i++) {
        console.log(string)
        string += symbol;
    }
}
drawTriangle(-5, 5)

// інший варіант малювання
function drawTriangle(height = 5, symbol = `*`) {
    let string = ''
    for (let i = 1; i <= height; i++) {
        for (let n = 1; n <= i; n++) { 
            string += symbol;
        }
        console.log(string)
        string=''
    }
}
drawTriangle(6, `+`)

// попередній варіант, але з 2а функціями

function drawTriangle(height = 5, symbol = `*`) {
    for (let i = 1; i <= height; i++) {
        console.log(makeString(i, symbol))
    }
}

function makeString(i, symbol) { 
    let string =''
    for (let n = 1; n <= i; n++) { 
        string += symbol
    }
    return string
}
drawTriangle(3, `*`)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ДЗ 2
Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3 */
let summ = 0;
for (let x = 0; x <= 100; x++) {
    if (x % 3 === 0) continue;
    summ += x;
    //console.log(`число, яке не кратне 3 ` + x) - виводила для себе, щоб перевірити числа
}
console.log(`Сума чисел від 1 до 100 включно, які не кратні 3 = ` + summ);

// OR

let summ = 0;
for (let x = 0; x <= 100; x++) {
    if (x % 3 !== 0) {
        summ += x;
        //console.log(`число, яке не кратне 3 ` + x) - виводила для себе, щоб перевірити числа
    }
}
console.log(`Сума чисел від 1 до 100 включно, які не кратні 3 = ` + summ);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ДЗ 3
Написати функцію pow(x,y) яка буде приймати 2 числа, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.
Наприклад pow(2,3) функція поверне значення 8 */

// тільки ящо ступінь має позитивне значення
function pow(number = 3, degree = 4) {
    let numberInDegree = 1
    for (let i = 1; i <= degree; i++) {
        numberInDegree *= number
       // console.log(numberInDegree) виводила для себе
    }
    console.log(numberInDegree)
}
pow(2, 5)

// зробила логіку для зведення числа в позитивну ступінь, негативну ступінь та у нульову ступінь
function pow(number = 3, degree = 4) {
    let numberInDegree = 1
   if (degree >= 0) {
        for (let i = 1; i <= degree; i++) {
            numberInDegree *= number
            // console.log(numberInDegree) виводила для себе
        }
        console.log(number + ` в ступені ` + degree + ` = ` + numberInDegree)
    } else if (degree < 0) {
        for (let i = 1; i <= -degree; i++) {
            numberInDegree *= number
            // console.log(numberInDegree) виводила для себе
        }
        console.log(number + ` в ступені ` + degree + ` = ` + (1 / numberInDegree))
    }
}
pow(2, 3)

// за допомогою 2х функцій
function inDegree(number, degree) {
    let numberInDegree = 1
    for (let i = 1; i <= degree; i++) {
        numberInDegree *= number
    }
    return numberInDegree
}
function pow(number = 3, degree = 4) {
   if (degree >= 0) {
        console.log(inDegree(number, degree))
    } else if (degree < 0) {
        console.log(1/inDegree(number, -degree))
    }
}
pow(2, -2)

// запис за допомогою тернарного оператора
function inDegree(number, degree) {
    let numberInDegree = 1
    for (let i = 1; i <= degree; i++) {
        numberInDegree *= number
    }
    return numberInDegree
}
function pow(number = 3, degree = 4) {
    let result = degree >= 0 ? inDegree(number, degree) : 1 / inDegree(number, -degree)
    console.log(result)
}
pow(2, 3)


// спробувала із function expression, але виходить що спочатку потрібно присвоїти значення змінним та з заданими аргументами щось не виходить, тільки pow()
let pow;
let degree = 3;
let number = -5;
if (degree >= 0) {
    pow = function() {
        let numberInDegree = 1
        for (let i = 1; i <= degree; i++) {
            numberInDegree *= number
        }
        console.log(numberInDegree)
    }
}  else  if (degree < 0) {
    pow = function () {
        let numberInDegree = 1
        for (let i = 1; i <= -degree; i++) {
            numberInDegree *= number
        }
        console.log(1 / numberInDegree)
    }
}
pow()