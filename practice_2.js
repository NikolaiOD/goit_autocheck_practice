// -----------------------------------------TASK 1------------------------------------------
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.
const students = [{
    name: `Lika`,
    language: `html`
    }, {
        name: `Anton`,
        language: `css`
        }, {
            name: `Andriy`,
            language: `js`
            }, {
                name: `Vova`,
                language: `html`
                }, {
                    name: `Alina`,
                    language: `css`
                    }, {
                        name: `Egor`,
                        language: `js`
                        }, {
                            name: `Aleksandr`,
                            langunage: `html`
                            }, {
                                name: `Taras`,
                                language: `css`
                                }, {
                                    name: `Ivan`,
                                    language: `js`
                                    }, {
                                        name: `Make`,
                                        language: `html`
                                        }, ];

const workers = [{name: 'Alex',salary: 3500,month: 12,},{name: 'Dima',salary: 2500,month: 9,},{name: 'Oleg',salary: 1500,month: 36,},];function userSalary(workers, userName) {const { salary, month } = workers.find(({ name }) => name === userName);console.log({ salary, month });return salary * month}console.log(userSalary(workers, "Dima"))

function totalUserSalary(workers) {return workers.reduce((acc, {salary, month}) => acc + salary * month, 0)// const result = workers.reduce((acc, elem) => {// return acc + elem.salary * elem.month// }, 0)// return result;};console.log(totalUserSalary(workers));

// -----------------------------------------TASK 2------------------------------------------
// Порахувати скільки ззаробив кожен юзер
// // (функція приймає 2 параметри// 
// 1 параметр масив// 
// 2 параметр імя робітника// 
// Функція повертає скільки він заробив (salary*month) )// 
// Порахувати загальну суму заробітку всіх робітників()// 
// (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);// 
// const workers = [{// // name: 'Alex',// // salary: 3500,// // month: 12,// // },// // {// // name: 'Dima',// // salary: 2500,// // month: 9,// // },// // {// // name: 'Oleg',// // salary: 1500,// // month: 36,// // },// // ];

// -----------------------------------------TASK 3------------------------------------------
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати// а ті обє'кти в яких айді співпав видалити з масиву.// (Потрібно мутувати масив, створювати новий не потрібно)// const products = [{// id: 'sku1',// qty: 1,// }, {// id: 'sku2',// qty: 2,// }, {// id: 'sku3',// qty: 3,// }, {// id: 'sku1',// qty: 6,// }, {// id: 'sku1',// qty: 8,// }, {// id: 'sku2',// qty: 19,// }, {// id: 'sku4',// qty: 1,// }]


// -----------------------------------------TASK 4------------------------------------------
// / 1 Створити функцію яка буде приймати 2 параметри// 1 параметр масив// 2 параметр назва книги// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"// 2 Порахувати вік всіх юзерів у яких є ключ age.const friends = [{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },{ name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },{ name: "Alice", books: ["War and peace", "Romeo and Juliet"] },{ name: "Oleksii", books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"], age: 26 },]function getUsersName(friends, bookName) {const users = friends.filter(({ books }) => books.includes(bookName))return users;}function getTotalAge(friends) {const ages = friends.reduce((acc, { age }) => acc += age ? age : 0, 0)console.log(ages);}getTotalAge(friends);console.log(getUsersName(friends, "Harry Potter"));

function deleteDublicateProducts(products) {for (let i = 0; i < products.length; i += 1) {for (let j = i + 1; j < products.length; j += 1) {if (products[i].id === products[j].id) {products[i].qty += products[j].qty;products.splice(j, 1);j -= 1;}}}return products;}console.log(deleteDublicateProducts(products));