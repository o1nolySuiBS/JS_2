// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let arr1 = 'hello';
let arr2 = 'owu';
let arr3 = 'com';
let arr4 = 'ua';
let arr5 = 1;
let arr6 = 10;
let arr7 = -999;
let arr8 = 123;
let arr9 = 3.14;
let arr0 = 2.7;
let arr11 = 16
let arr12 = true;
let arr13 = false;
console.log(arr1, arr2 ,arr3 ,arr4,arr5, arr6, arr7, arr8, arr9, arr0, arr11, arr12, arr13)
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName ='Igor';
let middleName ='Belyakov';
let age ='16';
let person = `${firstName} + ${middleName} + ${age}`;
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отрим2ати 3 слова які явлletяються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Type your Firstname');
let middle = prompt('Type your Middlename');
let last = prompt('Type your Lastname');
let age1 = prompt('Type your age');
let pop = (name + ' ' + middle + ' ' + last + ' ' + age1);
console.log(pop);
