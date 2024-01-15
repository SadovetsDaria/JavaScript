let year = prompt(`Скільки тобі років?`, `18`);
let word
if (isNaN(year) || +year == 0 && year !== `0` || +year < 0) {
    console.log(`Віком може бути лише ціле позитивне число`)
} else if (+year % 100 !== 11 && +year % 10 === 1) {
    word = ` рік`
    console.log(+year + word);
}
else if (+year % 100 !== 12 && +year % 10 === 2 || +year % 100 !== 13 && +year % 10 === 3 || +year % 100 !== 14 && +year % 10 === 4) {
    word = ` роки`
    console.log(+year + word)
} else {
    word = ` років`
    console.log(+year + word);
}

  /* без зайвих змінних
   
let year = prompt(`Скільки тобі років?`, `18`);
if (isNaN(year) || +year == 0 && year !== `0` || +year <0) {
    console.log(`Віком може бути лише ціле позитивне число`)
} else if (+year % 100 !== 11 && +year % 10 === 1) {
    console.log(+year + ` рік`);
} else if (+year % 100 !== 12 && +year % 10 === 2 || +year % 100 !== 13 && +year % 10 === 3 || +year % 100 !== 14 && +year % 10 === 4) {
    console.log(+year + ` роки`)
} else {
    console.log(+year + ` років`);
}
*/