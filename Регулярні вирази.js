// ДЗ 1 Без Аа. Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містити літери А (великої або малої)

var str = `ffyjyt gvgkkg agugfg fyyAhk khgfvu gggggggggggggggg`
var re = /[^a\W]{6}/gi
console.log(re.test(str))
console.log(str.search(re))
console.log(str.match(re))


/* ДЗ 2 Параноя
В нас є масив об'єктів в яких міститься email.
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
- одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.*/

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];
let newArr = []
function testEmail(array) {
    for (let i in array) {
        let currentobj = array.shift();
        var re = /^[a-z0-9]+\.?[a-z0-9]+(@gmail|@yahoo).com$/
        if (re.test(currentobj.email)) {
            newArr.push(currentobj.email)
        }
    }
    return newArr
}
console.log(testEmail(arr))
