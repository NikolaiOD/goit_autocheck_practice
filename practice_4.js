// -----------------------------------------TASK 1------------------------------------------
// -----------------------------------------(Krestiki/Noliki)-------------------------------
// https://github.com/Andriy-Kond/2023.01.14-FSOn-66-Blended-5-6/settings/pages - гра в хрестики-нулики, якщо комусь треба.

// const container = document.querySelector(".content");
// const restsrtBtn = document.querySelector(".button");
// const LOCAL_KEY_X = 'player X';
// const LOCAL_KEY_O = 'player O';
// const LOCAL_KEY_PLAYER = 'current player';
// let markUp = "";
// let player = localStorage.getItem(LOCAL_KEY_PLAYER) || "X";
// let x = JSON.parse(localStorage.getItem(LOCAL_KEY_X)) || [];
// let o = JSON.parse(localStorage.getItem(LOCAL_KEY_O)) || [];

// for (let i = 1; i <= 9; i += 1) {
// 	markUp += `<div class="item" data-id="${i}"></div>`;
// }
// container.insertAdjacentHTML("beforeend", markUp);
// container.addEventListener("click", onClick);
// restsrtBtn.addEventListener("click", restartGame);
// for (const item of container.children) {
// 	const id = Number(item.dataset.id);
// 	if (x.includes(id)) {
// 	  item.textContent = 'X';
// 	} else if (o.includes(id)) {
// 	  item.textContent = 'O';
// 	}
//   }

// function onClick(e) {
// 	if (!e.target.textContent) {
// 		const id = e.target.dataset.id;
// 		let result;
// 		if (player === "X") {
// 			x.push(Number(id));
// 			result = isWinner(x);
// 			localStorage.setItem(LOCAL_KEY_X, JSON.stringify(x));
// 		} else {
// 			o.push(Number(id));
// 			result = isWinner(o);
// 			localStorage.setItem(LOCAL_KEY_O, JSON.stringify(o));
// 		}
// 		e.target.textContent = player;
// 		if (result) {
// 			console.log(`player ${player} winner`);
// 			restartGame();
// 			return;
// 		}
// 		player = player === "X" ? "O" : "X";
// 		localStorage.setItem(LOCAL_KEY_PLAYER, player);
// 	}
// }

// function restartGame() {
// 	container.innerHTML = markUp;
// 	x = [];
// 	o = [];
// 	player = "X";
// 	localStorage.clear();
// }

// function isWinner(arr) {
// 	const result = win.some(element => element.every(item => arr.includes(item)));
// 	return result;
// }

// const win = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[1, 5, 9],
// 	[3, 5, 7],
// ];

// -----------------------------------------TASK 2------------------------------------------
// -----------------------------------------(Korzina pokypok)-------------------------------
// https://developer.mozilla.org/ru/docs/Web/API/Element/closest
// https://github.com/Andriy-Kond/02

// const instruments = [{
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
//     name: 'Молоток',
//     price: 150
// }, {
//     id: 2,
//     img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
//     name: 'Перфоратор',
//     price: 3000
// }, {
//     id: 3,
//     img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
//     name: 'Рівень',
//     price: 2000
// }]

// const cards = document.querySelector(".list");
// const basket = document.querySelector(".basket");
// const arrBasket = [];
// let qty = 0;

// const markUp = instruments.map(({ id, name, price, img }) => {
// 	return `
//   <li class="item" data-id="${id}">
//       <img src="${img}" alt="${name}" width = "300"/>
//       <h2>${name}</h2>
//       <p>${price}</p>
//       <button class = "button">Купити</button>
//     </li>
//   `;
// });

// cards.insertAdjacentHTML("beforeend", markUp);

// cards.addEventListener("click", fnBuy);
// basket.addEventListener("click", fnConsole);

// function fnBuy(e) {
// 	if (!e.target.classList.contains("button")) {
// 		return;
// 	}
// 	const item = e.target.closest(".item");
// 	const id = Number(item.dataset.id);
// 	const currentProduct = {
// 		...instruments.find((product) => product.id === id), //створюємо копію масиву, щоби не змінювати вихідний
// 	};
// 	const inBasket = arrBasket.find((item) => item.id === id);
// 	if (inBasket) {
// 		inBasket.qty += 1;
// 	} else {
// 		currentProduct.qty = 1;
// 		arrBasket.push(currentProduct);
// 	}
// }

// function fnConsole() {
// 	console.log(arrBasket);
// 	// console.log(instruments);
// }
