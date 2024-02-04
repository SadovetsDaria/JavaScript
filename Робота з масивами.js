/* ДЗ1 Тасувати масив 
Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!
Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив. Зверніть увагу: не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали.*/

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr2 = [10, 12, 13, 14]
function myBlend(array) {
    for (let i = array.length - 1; i > 0; i--) {
        var rndIndex = Math.floor(Math.random() * (i + 1));
        var value = array[i]
        array[i] = array[rndIndex]
        array[rndIndex] = value
    }
    return array;
}
console.log(myBlend(arr1))

/* ДЗ2 BigBoss
Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків. Окрім того, наша компанія продає рішення для організації продажу цих квитків. 
Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО). 
По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), які вже використовують наше ПО для продажу квитків. 
Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення, і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі
Вам необхідно написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.*/

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        },

                         {
                            name: 'Клієнт 1.2.4',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        },
                         
                          {
                            name: 'Клієнт 1.2.5',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        },
                          
                           {
                            name: 'Клієнт 1.2.6',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName) {
    
    let companyClients = company.clients;

    for (let i = companyClients.length; i >= 0; i--) {
        let currentClient = companyClients.shift();

        if (currentClient.name === companyName) {
            console.log(currentClient)
            return currentClient;
        }

        if (currentClient.partners && Array.isArray(currentClient.partners)) {
            companyClients.push(...currentClient.partners);
            i += currentClient.partners.length
        }
        //console.log(companyClients.length)
    }

    console.log(`Компанію з назвою '${companyName}' не знайдено`)
}

findValueByKey('Клієнт 1.2.6')