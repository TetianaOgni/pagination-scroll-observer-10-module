import Pagination from 'tui-pagination';

const BASE_URL = 'https://api.themoviedb.org/3/';
const END_POINT = 'trending/movie/day';
const API_KEY = '345007f9ab440e5b86cef51be6397df1';

let currentPage = 1;

const list = document.querySelector('.js-list');
const container = document.getElementById('pagination-container');

// const loadMore = document.querySelector('.js-load');

// loadMore.addEventListener('click', onLoad);

// function onLoad() {
//   currentPage += 1;
//   getTrending(currentPage)
//     .then(data => {
//       list.insertAdjacentHTML('beforeend', createMarkup(data.results));
//       if (data.page === data.total_pages) {
//         loadMore.hidden = true;
//       }
//     })
//     .catch(err => console.log(err));
// }
// ----------запрос
function getTrending(page = 1) {
  return fetch(
    `${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}&limit= 6`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
// ---------------
getTrending()
  .then(data => {
    list.insertAdjacentHTML('beforeend', createMarkup(data.results));
    // if (data.page !== data.total_pagees) {
    //   loadMore.hidden = false;
    // }
    console.log(data);
  })
  .catch(err => console.log(err));

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title, id }) =>
        `<li class='card'>
    <img class='poster' src='https://image.tmdb.org/t/p/w200${poster_path}' alt='${title}'>
    <div class='overlay'></div>
    <div class='info'>
     <div class='info-text'>
      <p class='text-card'>${title}</p>
      <p class='genre'>Genre</p>
     </div>
      <div class='raiting'>Stars</div>
    </div>
  </li>`
    )
    .join('');
}
