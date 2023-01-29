// -----------------------------------------TASK 1------------------------------------------
// -----------------------------------------"The Lord of the Rings"-------------------------
// const loadBtn = document.querySelector('.load-button');
// const characterList = document.querySelector('.js-list');

// let page = 1;

// loadBtn.addEventListener('click', changePage);

// function lordAPI(page = 1) {
// 	const options = {
// 		headers: {
// 			Authorization: 'Bearer 0g3cjSkeaH6vD8cpJFzP',
// 		},
// 	};
// 	return fetch(`https://the-one-api.dev/v2/character?limit=150&page=${page}`, options).then(res => {
// 		if (!res.ok) {
// 			throw new Error(res.statusText);
// 		}
// 		console.log(res);
// 		return res.json();
// 	});
// }

// lordAPI()
// 	.then(res => {
// 		renderCharacterList(res.docs);
// 		loadBtn.hidden = false;
// 	})
// 	.catch(console.log);

// function renderCharacterList(arrObj) {
// 	const list = arrObj
// 		.map(({ name, race }) => {
// 			return `<li class="">
//         <h2>${name}</h2>
//         <p>${race}</p>
//         </li>`;
// 		})
// 		.join('');
// 	characterList.insertAdjacentHTML('beforeend', list);
// }

// function changePage() {
// 	page += 1;
// 	lordAPI(page)
// 		.then(res => {
// 			renderCharacterList(res.docs);
// 			if (res.page === res.pages) {
// 				loadBtn.hidden = true;
// 			}
// 		})
// 		.catch(console.log);
// }

// -----------------------------------------TASK 2------------------------------------------
// -----------------------------------------"Pogoda"----------------------------------------
// const form = document.querySelector('form');
// const renderAdd = document.querySelector('.js-list');

// form.addEventListener('submit', getWeather);

// function getWeather(e) {
// 	e.preventDefault();
// 	const input = e.currentTarget.elements.city.value;
// 	const select = e.currentTarget.elements.days.value;

// 	getFetch(input, select).then(value => {
// 		console.log('getFetch --> value', value);
// 		render(value.forecast.forecastday);
// 	});
// }

// function getFetch(city, days) {
// 	return fetch(
// 		`http://api.weatherapi.com/v1/forecast.json?key=86378e0ee6c34cc8825184832232801&q=${city}&days=${days}`,
// 	).then(res => {
// 		if (!res.ok) {
// 			throw new Error(res.statusText);
// 		}
// 		return res.json();
// 	});
// }

// function render(array) {
// 	const markup = array
// 		.map(
// 			({
// 				date,
// 				day: {
// 					avgtemp_c,
// 					condition: { icon },
// 				},
// 			}) => {
// 				return `
//           <li>
//             <p>${date}</p>
//             <p>${avgtemp_c}</p>
//             <img src="${icon}"></img>
//           </li>`;
// 			},
// 		)
// 		.join('');
// 	renderAdd.innerHTML = markup;
// }
