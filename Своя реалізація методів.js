// ДЗ 1 Написати свою реалізацію функції isNaN. 

let userData = 0 // робила змінну щоб було удобніше порівнювати з оригінальною функцією isNaN, також у функцію можна напряму передавати аргумент
function nan(c) {
    if (+c || +c == 0) {
        console.log(`is NaN false`)
    } else {
        console.log(`is NaN true`)
    }
}
nan(userData)
//console.log(isNaN(userData)) //цю строку зробила для перевірки роботи своєї функції у порівнянні з оригінальною

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ДЗ 2 Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
 Порахувати кількість парних та непарних серед них.Обчислити відсоткове співвідношення - чи буде воно близьке до 50 % 50 ? 
 Приклад функції checkProbabilityTheory(count).Параметр count буде вказувати скільки разів буде генеруватися випадкове число.
 Функція виводить інформацію
     Кількість згенерованих чисел: кількість чисел
     Парних чисел: кількість парних чисел
     Не парних чисел: кількість не парних чисел
     Відсоток парних до не парних: */

function randomOneNumber() {
        let rnd = Math.random();
        rnd = 100 + rnd * (1000-100 + 1);
        rnd = Math.floor(rnd);
    return rnd
}
function checkProbabilityTheory(count) {
    let odd = 0;
    let even = 0;
    for (let i = 1; i <= count; i++) {
        let randomNumber = randomOneNumber()
        if (randomNumber % 2) {
            odd += 1
            //console.log(randomNumber + ` is odd`)   // виводила для перевірки
        } else {
            even += 1
            //console.log(randomNumber + ` is even`)  // виводила для перевірки
        }
    }
    console.log(`Всього згенеровано чисел - ` + count)
    console.log(`Парних чисел - ` + even)
    console.log(`Не парних чисел - ` + odd)
    console.log(`Відсоток парних до непарних - ` + Math.round((even/count)*100) + `%` + ` / ` + Math.round((odd/count)*100) + `%`)
}
checkProbabilityTheory(1000)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ДЗ 3 **
 Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, 8, true), яка приймає чотири аргументи:
     рядок, до якого буде додаватися символ.
     символ, який буде додаватися.
     cкільки додавати символів
     булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
     Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте значення 6, то додаєте тільки один символ */

// варіант з присвоєнням змінної 
// String(text) / textUser = String(text) - робила перетворення до стрінги, щоб підстрахуватись, бо інакше, якщо в перші 3 параметри ввести цифри - то будуть проблеми
function symbolString(text, symbol, symbolValue) {
    let string = ``
    let textUser = String(text)
    for (i = 1; i <= (symbolValue - textUser.length); i++) {
        string += symbol
    }
    return string
}    
function pad(text, symbol, symbolValue, booleanValue) {
    let newString
    if (booleanValue) {
        newString = symbolString(text, symbol, symbolValue) + String(text)
    } else {
        newString = String(text) + symbolString(text, symbol, symbolValue)
    }
    console.log(newString)
    //console.log(typeof newString) // для перевірки типу
}
pad(`QA`, `*`, 3, false)
//pad(20, 1, 5, false) 

// варіант без присвоєння зміної та без перетворення введеного тексту до стрінги
function symbolString(text, symbol, symbolValue) {
    let string = ``
    for (i = 1; i <= (symbolValue - text.length); i++) {
        string += symbol
    }
    return string
}
function pad(text, symbol, symbolValue, booleanValue) {
    if (booleanValue) {
        console.log(symbolString(text, symbol, symbolValue) + text)
    } else {
        console.log(text + symbolString(text, symbol, symbolValue))
    }
}
pad(`QA`, `+`, 15, true)