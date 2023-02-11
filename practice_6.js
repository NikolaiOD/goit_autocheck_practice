// -----------------------------------------"Rick and Morty"--------------------------------
// https://rickandmortyapi.com/
// https://github.com/userzahar/js-test
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// let options = {
//   root: null,
//   rootMargin: "300px",
//   threshold: 0,
// };
// let callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       page += 1;
//       getSearch(page).then((res) => {
//         renderCard(res.results);
//         if (res.info.pages === page) {
//           buttonLoadMore.hidden = true;
//           observer.unobserve(target);
//           return;
//         }
//       });
//     }
//   });
// };
// let observer = new IntersectionObserver(callback, options);
// let target = document.querySelector(".js-guard");

// const gallery = document.querySelector(".gallery");
// const buttonLoadMore = document.querySelector(".load-more");
// let page = 1;
// buttonLoadMore.addEventListener("click", onLoadMoreClick);

// async function getSearch(page = 1) {
//   const response = await fetch(
//     `https://rickandmortyapi.com/api/character/?page=${page}`
//   );
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return response.json();
// }

// getSearch().then((res) => {
//   renderCard(res.results);
//   buttonLoadMore.hidden = false;
// });

// function renderCard(arrObj) {
//   console.log(arrObj);
//   const card = arrObj
//     .map(({ name, image }) => {
//       return `<div>
//     <h2>${name}
//     </h2>
//     <img src="${image}" alt="${name}"></img>
// </div>`;
//     })
//     .join("");
//   gallery.insertAdjacentHTML("beforeend", card);
//   observer.observe(target);
// }

// function onLoadMoreClick() {
//   page += 1;
//   getSearch(page).then((res) => {
//     if (res.info.pages === page) {
//       buttonLoadMore.hidden = true;
//     }
//     renderCard(res.results);
//   });
// }
