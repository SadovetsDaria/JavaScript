let year = prompt(`Скільки тобі років?`, `18`);
let word
if (isNaN(year) || +year == 0 && year !== `0` || +year <0) {
    console.log(`Віком може бути лише ціле число`)
} else if (+year !== 11 && +year % 10 === 1 || +year === 1 && +year !== 11) {
    word = ` рік`
    console.log(+year + word);
}
else if (+year !== 12 && +year % 10 === 2 || +year !== 13 && +year % 10 === 3 || +year !== 14 && +year % 10 === 4) {
    word = ` роки`
    console.log(+year + word)
} else {
    word = ` років`
    console.log(+year + word);
}

/* на занятті ви казали, що правильніе обгортати у змінну такі значення як рік, роки, років
   хоча мені здалося, що в даному випадку текстом може бути коротше, бо код не великий і далі ми ці значення ніде не використовуємо
   
let year = prompt(`Скільки тобі років?`, `18`);
if (isNaN(year) || +year == 0 && year !== `0` || +year <0) {
    console.log(`Віком може бути лише ціле число`)
} else if (+year !== 11 && +year % 10 === 1 || +year === 1 && +year !== 11) {
    console.log(+year + ` рік`);
}
else if (+year !== 12 && +year % 10 === 2 || +year !== 13 && +year % 10 === 3 || +year !== 14 && +year % 10 === 4) {
    console.log(+year + ` роки`)
} else {
    console.log(+year + ` років`);
}
*/