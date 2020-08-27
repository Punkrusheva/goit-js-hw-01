/*Задание 4
На счету пользователя есть 23580 кредитов, значение хранится в 
переменной credits (создай и присвой). Пользователь решает купить
 ремонтных дроидов, которые стоят по 3000 кредитов за штуку. 
 Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).
При посещении страницы, используя prompt, необходимо спросить 
количество дроидов которые пользователь хочет купить и сохранить в переменную.
Напиши скрипт который:
•	Если в prompt была нажата кнопка Cancel, выводит в консоль 
сообщение 'Отменено пользователем!'.
•	В противном случае, рассчитывает общую цену заказа и сохраняет 
в переменной totalPrice.
•	Проверяет сможет ли пользователь оплатить заказ:
o	если сумма к оплате превышает количество кредитов на счету, 
выводи в консоль сообщение 'Недостаточно средств на счету!'.
o	в противном случае необходимо посчитать остаток кредитов на 
счету и вывести сообщение 'Вы купили [число] дроидов, на счету 
осталось [число] кредитов.'.
*/
//const orderPieces = 1;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice;
let balanceCredit;
let message;

const orderPieces = prompt('Какое количество дроидов Вы хочите купить?');
totalPrice = Number(orderPieces) * pricePerDroid;
balanceCredit = credits - totalPrice;
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (orderPieces !== null && credits > totalPrice) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов.`;
} else {
  message = ACCESS_DENIED;
}

console.log(message);

/*const orderPieces = null;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

// Write code under this line
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (orderPieces >=0 && balanceCredit >=0) {
  message=`Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else {
  message = ACCESS_DENIED;
}
*/
