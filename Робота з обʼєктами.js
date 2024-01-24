/* ДЗ 1 Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). 
Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. */

// метод в середині обєкта
var obj = {
    brand: `Toyota`,
    model: `Corolla`,
    year: 2010,
    getInfo() {
        for (let key in obj) {
            if (typeof obj[key] != `function`) {
                console.log(key + `:` + obj[key])
            }
        }
    }
}
obj.class = `c`
obj.getInfo()

// метод поза об'єктом - в обєкті ключ, який посилається на метод (функцію) за межами
var obj = {
    brand: `Toyota`,
    model: `Corolla`,
    year: 2010,
    getInfo: getInfo
}
function getInfo(object) {
    for (let key in obj) {
        if (typeof obj[key] != `function`) {
            console.log(key + `:` + obj[key])
        }
    }
}
obj.class = `c`
obj.getInfo()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*ДЗ 2 Сума вартості послуг. Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість. "Послуги" можуть додаватися по ходу роботи.
створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price  */

// методи прописані у середині обєкта, робила, щоб функція повернула тільки значення розрахунку (а не ключ-значення), щоб можна було використовувати далі 
var service = {
    "стрижка": `100 грн`,
    "гоління": `60 грн`,
    "миття голови": `80 грн`,
    price: function () {
        let serviceSumm = 0
        for (let key in service) {
            if (typeof service[key] != `function`) {
                serviceSumm += Number.parseInt(service[key])
            }
        }
        return serviceSumm
    },
    minPrice: function () {
        let min = Infinity
        let minSumm
        for (let key in service) {
            if (Number.parseInt(service[key]) < min) {
                min = Number.parseInt(service[key])   // повертає тільки значення
                //minSumm = key + ` ` + service[key]  // повертає ключ-значення
            }
        }
        return min   //minSumm
    },
    maxPrice: function () {
        let max = -Infinity
        let maxSumm
        for (let key in service) {
            if (Number.parseInt(service[key]) > max) {
                max = Number.parseInt(service[key])  // повертає тільки значення
                //maxSumm = key + ` ` + service[key] // повертає ключ-значення
            }
        }
        return max   // maxSumm
    }
}
//service.price()
//service.minPrice()
//service.maxPrice()
service["фарбування"] = `150 грн`
console.log(`Послуги надані на загальну суму: ` + service.price() + ` грн`)
console.log(`Послуга з мінімальною ціною: ` + service.minPrice() + ` грн`)
console.log(`Послуга з максимальною ціною: ` + service.maxPrice() + ` грн`)



// спробувала винести функції за межи об'єкта - робила, щоб функції повертали console.log
function price(object) {
    let serviceSumm = 0
    for (let key in object) {
        if (typeof object[key] != `function`) {
            serviceSumm += Number.parseInt(object[key])
        }
    }
    console.log(`Послуги надані на загальну суму: ${serviceSumm} грн`)
}

function minPrice(object) {
    let a = Infinity
    let minSumm
    for (let key in object) {
        if (Number.parseInt(object[key]) < a) {
            a = Number.parseInt(object[key])
            minSumm = key + ` ` + object[key]
        }
    }
    console.log (`Послуга з мінімальною ціною: ${minSumm}`)
}

function maxPrice(object) {
    let b = -Infinity
    let maxSumm
    for (let key in object) {
        if (Number.parseInt(object[key]) > b) {
            b = Number.parseInt(object[key])
            maxSumm = key + ` ` + object[key]
        }
    }
    console.log (`Послуга з максимальною ціною: ${maxSumm}`)
}

var service = {
    "стрижка": `100 грн`,
    "гоління": `60 грн`,
    "миття голови": `80 грн`,
    price: price,
    minPrice: minPrice,
    maxPrice: maxPrice
}
price(service)
minPrice(service)
maxPrice(service)