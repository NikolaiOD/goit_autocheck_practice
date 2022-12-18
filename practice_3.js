// -----------------------------------------TASK 1------------------------------------------
// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).
// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5 курс виводити що студент являєтсья випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);
// student.getFullName(); //поверне 'Петрик Пяточкин'
// student.getCourse(); //поверне 3 (третій курс)

// class User {
//     #name
//     #surname
//     constructor(name, surname) {
//         this.#name = name;
//         this.#surname = surname;
//     }
//     getFullName() {
//         return `${this.#name} ${this.#surname}`
//     }
// }
// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     getCourse() {
//         let today = new Date();
//         let currentYear = today.getFullYear();
//         let course = currentYear - this.year;
//         if (course >= 5) {
//             return `Cтудент ${this.getFullName()} являєтmся випускником`
//         }
//         return course;
//     }
// }

// const student = new Student('Петрик', 'Пяточкин', 2019);
// console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student.getCourse()); //поверне 3 (третій курс)

// -----------------------------------------TASK 2------------------------------------------
// Считает сколько раз создается класс

// class User {
//     static counter = 0;
//     static addUser() {
//         this.counter += 1;
//         console.log(this.counter);
//     }
//     #name;
//     #surname;
//     constructor(name, surname) {
//         this.#name = name;
//         this.#surname = surname;
//         User.addUser();
//     }
//     getFullName() {
//         return `${this.#name} ${this.#surname}`;
//     }
// }
// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     getCourse() {
//         const course = new Date().getFullYear() - this.year;
//         if (course > 5) {
//             return `Студент ${this.getFullName()} є випускником`;
//         }
//         return course;
//     }
// }

// const student = new Student('Петрик', 'Пяточаппкин', 2019);
// const student1 = new Student('Петрик', 'Пятппоаачкин', 2019);
// const user = new User('ывы', 'Пяточкипааан', 2019);
// const user1 = new User('Петрывывик', 'Пятппочкин', 2019);
// const user2 = new User('ыыыыы', 'Пятыввввочкин', 2019);

// -----------------------------------------TASK 3------------------------------------------
// Самый дешевый автомобиль
//Вывести список авто, который содеожит введенную букву

// const cars = [
//     {
//         car: "Honda",
//         type: "Civic",
//         price: 12000,
//     },
//     {
//         car: "Audi",
//         type: "Q7",
//         price: 40000,
//     },
//     {
//         car: "BMW",
//         type: "5 siries",
//         price: 9000,
//     },
//     {
//         car: "Honda",
//         type: "Accord",
//         price: 20000,
//     },
//     {
//         car: "Volvo",
//         type: "XC60",
//         price: 7000,
//     },
// ];

// function getCheapestCar(Arr) {
//     Arr.sort((a, b) => a.price - b.price);
//     console.log(Arr);
//     return Arr[0];
// }
// console.log(getCheapestCar(cars));

// const nameCar = prompt().toLowerCase();
// function searchCars(Arr, nameCar) {
//     const result = Arr.filter((car) => car.car.toLowerCase().includes(nameCar)).map(({ car }) => car);
//     return result;
// }
// console.log(searchCars(cars, nameCar));

// -----------------------------------------TASK 4------------------------------------------
// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість раз яку вона дублюється буде значенням ключа
// const str = 'absdabsrgbadgtdswwbetflg';
// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 2,
//     ...
// }

// const str = 'absdabsrgbadgtdswwbetflg';
// const letters = str.split('').reduce((acc, item) => {
//     if (!acc.hasOwnProperty(item)) {
//         acc[item] = 1;
//     } else {
//         acc[item] += 1
//     };
//     return acc;
// },{});

// console.log(letters);

// -----------------------------------------TASK 5------------------------------------------
// Через .reduce подсчетать общую сумму очков
// Массив всех имен с помощью .reduce

// const students = [
//     {
//         name: "Манго",
//         score: 83
//     },
//     {
//         name: "Полі",
//         score: 59
//     },
//     {
//         name: "Аякс",
//         score: 37
//     },
//     {
//         name: "Ківі",
//         score: 94
//     },
// ];

// const totalScores = students.reduce((acc, student) => {
//     return acc += student.score;
// }, 0)
// console.log(totalScores);

// const arrNames = students.reduce((acc, student) => {
//     acc.push(student.name);
//     return acc
// }, [])
// console.log(arrNames);

// -----------------------------------------TASK 6------------------------------------------
// Массив с средней продолжительностью игры каждого пользователя

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const getNameTime = players.reduce((acc, player) => {
//     const time = player.playtime / player.gamesPlayed;
//     const object = {
//         time,
//         name: player.name
//     }
//     // console.log(object);
//     acc.push(object);
//     return acc;
// }, []);

// console.log(getNameTime);