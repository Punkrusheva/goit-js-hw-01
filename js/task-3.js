/*Задание 3
Напиши скрипт имитирующий авторизацию администратора в панели управления.
Есть переменная message в которую будет записано сообщение о результате. 
При загрузке страницы у посетителя запрашивается пароль через prompt:
•	Если нажали Cancel, записать в message строку 'Отменено пользователем!'
•	В протовном случае, если введен пароль который совпадает со значением 
константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
•	В противном случае, то есть если ни одно из предыдущих условий не 
выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
•	После всех проверок вывести в alert значение переменной message.
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
*/

const userPassword = 'jqueryismyjam';
const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let massage;

const password = prompt('пароль?');

if (password === null) {
  massage = CANCELED_BY_USER;
} else if (password === ADMIN_PASSWORD) {
  massage = ACCESS_IS_ALLOWED;
} else {
  massage = ACCESS_DENIED;
}
console.log(massage);

/*if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
} else {
  message = ACCESS_DENIED;
}
console.log(message);

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно*/
