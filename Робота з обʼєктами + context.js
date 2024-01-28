/* ДЗ 1 Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). 
Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. */

// метод в середині обєкта
var obj = {
    brand: `Toyota`,
    model: `Corolla`,
    year: 2010,
    getInfo() {
        for (let key in this) {
            if (typeof this[key] != `function`) {
                console.log(key + `:` + this[key])
            }
        }
    }
}
obj.class = `c`
obj.getInfo()

var car2 = {
    brand: `Nissan`,
    model: `Micra`,
    year: 2012,
    getInfo: obj.getInfo
}
car2.getInfo()

// метод поза об'єктом - в обєкті ключ, який посилається на метод (функцію) за межами

var obj = {
    brand: `Toyota`,
    model: `Corolla`,
    year: 2010,
    getInfo: getInfo
}
function getInfo(object) {
    for (let key in this) {
        if (typeof this[key] != `function`) {
            console.log(key + `:` + this[key])
        }
    }
}
//obj.class = `c`
//obj.getInfo()

var car2 = {
    brand: `Nissan`,
    model: `Micra`,
    year: 2012,
    getInfo: getInfo
}
//car2.getInfo()
getInfo.call(car2)  // спробувала використати call
getInfo.call(obj)

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
        for (let key in this) {
            if (typeof this[key] != `function`) {
                serviceSumm += Number.parseInt(this[key])
            }
        }
        return serviceSumm
    },
    minPrice: function () {
        let min = Infinity
        let minSumm
        for (let key in this) {
            if (Number.parseInt(this[key]) < min) {
                min = Number.parseInt(this[key])  
            }
        }
        return min 
    },
    maxPrice: function () {
        let max = -Infinity
        let maxSumm
        for (let key in this) {
            if (Number.parseInt(this[key]) > max) {
                max = Number.parseInt(this[key])
            }
        }
        return max   
    }
}
service["фарбування"] = `150 грн`
console.log(`Послуги надані на загальну суму: ` + service.price() + ` грн`)
console.log(`Послуга з мінімальною ціною: ` + service.minPrice() + ` грн`)
console.log(`Послуга з максимальною ціною: ` + service.maxPrice() + ` грн`)

var service2 = {
    "стрижка": `100 грн`,
    "гоління": `6040 грн`,
    "миття голови": `8100 грн`,
    price: service.price,
    minPrice: service.minPrice,
    maxPrice: service.maxPrice
}
console.log(`Послуги надані на загальну суму: ` + service2.price() + ` грн`)
console.log(`Послуга з мінімальною ціною: ` + service2.minPrice() + ` грн`)
console.log(`Послуга з максимальною ціною: ` + service2.maxPrice() + ` грн`)



// спробувала винести функції за межи об'єкта - робила, щоб функції повертали console.log
function price(object) {
    let serviceSumm = 0
    for (let key in this) {
        if (typeof this[key] != `function`) {
            serviceSumm += Number.parseInt(this[key])
        }
    }
    console.log(`Послуги надані на загальну суму: ${serviceSumm} грн`)
}

function minPrice(object) {
    let a = Infinity
    let minSumm
    for (let key in this) {
        if (Number.parseInt(this[key]) < a) {
            a = Number.parseInt(this[key])
            minSumm = key + ` ` + this[key]
        }
    }
    console.log (`Послуга з мінімальною ціною: ${minSumm}`)
}

function maxPrice(object) {
    let b = -Infinity
    let maxSumm
    for (let key in this) {
        if (Number.parseInt(this[key]) > b) {
            b = Number.parseInt(this[key])
            maxSumm = key + ` ` + this[key]
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
//service.price()
//service.minPrice()
//service.maxPrice()

var service2 = {
    "стрижка": `10 грн`,
    "гоління": `600 грн`,
    "миття голови": `800 грн`,
    price: price,
    minPrice: minPrice,
    maxPrice: maxPrice
}
//service2.price()
//service2.minPrice()
//service2.maxPrice()

price.call(service);
minPrice.call(service);
maxPrice.call(service);
price.call(service2);
minPrice.call(service2);
maxPrice.call(service2);