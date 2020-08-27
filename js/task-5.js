/*Задание 5
Пользователь может оформить доставку товара к себе в страну, 
указав ее при посещении страницы в prompt. Учти, пользователь 
может ввести имя страны не только буквами нижнего регистра, 
а к примеру 'кИтАЙ'.
Напиши скрипт который выводит сообщение о стоимости доставки 
в указанную страну. Обязательно используй switch. Формат 
сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
Но доставка есть не везде, если указанной страны нет в списке, 
то выводи в alert сообщение 'В вашей стране доставка не доступна'.
Ниже приведен список стран и стоимость доставки.
•	Китай - 100 кредитов
•	Чили - 250 кредитов
•	Австралия - 170 кредитов
•	Индия - 80 кредитов
•	Ямайка - 120 кредитов
*/
//const countryName = 'ЧИЛИ';

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;

let countryName = prompt('Введите страну доставки?');
console.log(countryName);

if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.toLowerCase().slice(1);
  switch (country) {
    case CHINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;
    case JAMAICA:
      price = 120;
      break;
    default:
      message = NO_DELIVERY;
  }
}
if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message);
