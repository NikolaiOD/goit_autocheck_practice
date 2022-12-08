// -----------------------------------------TASK 1------------------------------------------
//Перевірити чи юзер ввів емейл.
// в propmt() юзер вводить емейл якщо ця стрінга містить '@' та '.'ми виводимо меседж що перевірка успішна, якщо ні то виведимо що перевірка не успішна

// const mail = prompt('Введіть свій емейл');
// let message = 'Перевірка не успішна'

// if (mail.includes('@') && mail.includes('.')) message = 'Перевірка успішна';

// console.log(message);

// -----------------------------------------TASK 2------------------------------------------
// Робимо імітацію логіна юзера і визначаємо до якої групи він відноситься// В перший prompt() юзер вводить своє імя, в 2 prompt() вводить свій вік
// Якщо юзер молодший 18 років виводемо стрінгу `User ${name} has been added to the children group
// Якщо юзеу 18 років і більше виводемо стрінгу `User ${name} has been added to the adult group

// const name = prompt('Введіть своє імя');
// const age = Number(prompt('Введіть свій вік'));
// let message = `User ${name} has been added to the children group`;

// if (age >= 18) message = `User ${name} has been added to the adult group`;

// console.log(message);

// -----------------------------------------TASK 3------------------------------------------
//Замінити всі розширення файлів з .css на .js
// const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css'];

const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css'];

// первый вариант
// for (let i = 0; i < files.length; i += 1) {
//     files[i] = files[i].replace(".css", ".js");
// }

// console.log(files);

// второй вариант
// const filesToString = files.join(" ").replaceAll(".css", ".js").split(" ");

// console.log(filesToString);


// -----------------------------------------TASK 4------------------------------------------
//Створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів. (users)
//2 параметр це масив з чоловічими іменами. (mens)
// Функція повина повертати масив з жіночими іменами.
// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];
// function sortUsres(users, men) {// }

// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// function sortUsers(users, men) {
//     const womenName = [];
    
//     for (const user of users) {
//         if (!men.includes(user)) womenName.push(user);
//     }

//     return womenName;
// }

// console.log(sortUsers(users, men));

// -----------------------------------------TASK 6------------------------------------------
//Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
//1 глибина колодязя (depth)
//Функція повертає кількість днів
// Умови:
// вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// використовувати цикл while() function calcDays(depth) {}
// calcDays(42) //виповзе за 8 днів
// calcDays(17) //виповзе за 3 дні
// calcDays(18) //виповзе за 4 дні

// function calcDays(depth) {
//     let days = 0;
//     let total = 0;
//     const totalForDay = 7;
//     const totalForNight = 2;
    
//     while (total < depth) {
//         total = total + totalForDay;
//         days += 1;
//         if (total < depth) {
//             total -= totalForNight;
//         }
//     }
// return days;
// }

// console.log(calcDays(42));
// console.log(calcDays(17));
// console.log(calcDays(18));

// -----------------------------------------TASK 7------------------------------------------
// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.
// const names = ['Anna', 3, 'Roma', 17, 'Kate', 14, 'Oleg'];

// const names = ['Anna', 3, 'Roma', 17, 18, 19, 'Kate', 14, 'Oleg'];

// for (let i = 0; i < names.length; i += 1) {
//     // console.log(typeof names[i]);
//     if (typeof names[i] !== "string") {
//         names.splice(i, 1)
//         i -= 1
//         // console.log(names[i]);
//     }
// }

// console.log(names);