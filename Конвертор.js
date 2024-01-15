// 1й варіант без валідації, тільки по одиницям виміру

// одиниці виміру для вводу: кг, г, км
let unitUser = `кг`;
let unitValueUser = `e`;
let unit 
let unitValue
    switch (unitUser) {
        case `кг`:
            unit = `гр`
            unitValue = unitValueUser * 1000
            console.log(unitValueUser + ` ` + unitUser + ` це ` + unitValue + ` ` + unit)
            break;
        case `г`:
            unit = `хв`
            unitValue = unitValueUser * 60
            console.log(unitValueUser + ` ` + unitUser + ` це ` + unitValue + ` ` + unit)
            break;
        case `км`:
            unit = `м`
            unitValue = unitValueUser * 1000
            console.log(unitValueUser + ` ` + unitUser + ` це ` + unitValue + ` ` + unit)
            break;
        default:
            console.log(`Для конвертації ви можете ввести: кілограм, година або кілометр`)
    }

/* 2й варіант - мені стало цікаво зробиту валідацію і я спробувала загорнути switch-case y if-else. 
Мінус у тому, що валідація поступова і якщо ввести 2 хибних значення (одиниця виміру та її значення) - то помилка буде тільки по значенню одиниці виміру, але не по самій одиниці виміру,
хоча можна погратися з if, але тоді default буде зайвим 
// одиниці виміру для вводу: кг, г, км
let unitUser = `г`;
let unitValueUser = 5;
let unit 
let unitValue
if (unitValueUser >= 0 && typeof unitValueUser == `number`) {
    switch (unitUser) {
        case `кг`:
            unit = `гр`
            unitValue = unitValueUser * 1000
            console.log(unitValueUser + ` ` + unitUser + ` це ` + unitValue + ` ` + unit)
            break;
        case `г`:
            unit = `хв`
            unitValue = unitValueUser * 60
            console.log(unitValueUser + ` ` + unitUser + ` це ` + unitValue + ` ` + unit)
            break;
        case `км`:
            unit = `м`
            unitValue = unitValueUser * 1000
            console.log(unitValueUser + ` ` + unitUser + ` це ` + unitValue + ` ` + unit)
            break;
        default:
            console.log(`Для конвертації ви можете ввести: кілограм, година або кілометр`)
    }
} else {
    console.log(`Розміром одиниці виміру може бути лише позитивне число`)
} 
*/