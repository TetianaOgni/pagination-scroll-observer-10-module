const target = document.querySelector('.js-guard');

const BASE_URL = 'https://api.themoviedb.org/3/';
const END_POINT = 'trending/movie/day';
const API_KEY = '345007f9ab440e5b86cef51be6397df1';
let currentPage = 998;
let options = {
  root: null,
  rootMargin: '200px',
};
let observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      getTrending(currentPage)
        .then(data => {
          list.insertAdjacentHTML('beforeend', createMarkup(data.results));
          console.log(2);
          if (data.page === data.total_pages) {
            console.log(data.page, data.total_pages);
            observer.unobserve(target);
          }
        })
        .catch(err => console.log(err));
    }
  });
}

const list = document.querySelector('.js-list');

function getTrending(page = 1) {
  return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    }
  );
}

getTrending()
  .then(data => {
    list.insertAdjacentHTML('beforeend', createMarkup(data.results));
    console.log(data);
    observer.observe(target);
  })
  .catch(err => console.log(err));

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title }) =>
        `<li>
    <img src='https://image.tmdb.org/t/p/w200${poster_path}' alt='${title}'>
    <h2>${title}</hi>
  </li>`
    )
    .join('');
}
