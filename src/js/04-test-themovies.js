import {
  getMoviesDescription,
  getTrendingMoviesByDay,
  getTrendingMoviesByWeek,
  getUpcomingMovies,
} from './04-test-api.js';
const refs = {
  movieDay: document.querySelector('.movie-day'),
  movieWeek: document.querySelector('.movie-week'),
  movieUpcoming: document.querySelector('.movie-upcoming'),
  movieSearch: document.querySelector('.movie-search'),
  movieDescription: document.querySelector('.movie-description'),

  movieList: document.querySelector('.list-movie-card'),
};
refs.movieDay.addEventListener('click', handlerMoviesDay);
refs.movieWeek.addEventListener('click', handlerMoviesWeek);
refs.movieUpcoming.addEventListener('click', handlerMoviesUpcoming);
refs.movieSearch.addEventListener('input', handlerMoviesSearch);
refs.movieSearch.addEventListener('click', handlerMoviesSearch);
refs.movieDescription.addEventListener('click', handlerMoviesDescription);
// ---
function calculateStarsWidth() {
  const ratingItems = document.querySelectorAll('.rating-item');
  const stars = document.querySelectorAll('.stars');

  ratingItems.forEach((item, index) => {
    item.addEventListener('change', () => {
      const checkedItems = document.querySelectorAll(
        'input[name="rating"]:checked'
      );
      const percentage = (checkedItems.length / ratingItems.length) * 100;

      stars[index].style.width = `${percentage}%`;
    });
  });
}

calculateStarsWidth();

// ---

function handlerMoviesWeek() {
  getTrendingMoviesByWeek().then(data => {
    console.log(data);
    markupMovies(data);
  });
}

function handlerMoviesDay() {
  getTrendingMoviesByDay().then(data => {
    console.log(data);
    markupMovies(data);
  });
}
function handlerMoviesUpcoming() {
  getUpcomingMovies().then(data => {
    console.log(data);
    // markupMovies(data);
    handlerMoviesDescription();
  });
}

function handlerMoviesSearch() {
  getSearchingMovies().then(data => {
    console.log(data);
    // markup(data);
  });
}

function handlerMoviesDescription(id) {
  getMoviesDescription(id).then(data => {
    console.log(data);

    // renderMoviesInfo(data);
    // markup(data);
  });
}

function markupMovies({ results }) {
  console.log({ results });

  refs.movieList.innerHTML = results
    .map(
      ({ poster_path, title, vote_average, genre_ids, release_date }) =>
        `<li class='item-movie-card'>
    <img class='poster-movie-card' src='https://image.tmdb.org/t/p/w200${poster_path}' alt='${title}'>
    <div class='overlay-movie-card'></div>
    <div class='info-movie-card'>
      <h4 class='title-movie-card'>${title}</h4>
      <div class='wrapper-movie-card'>
        <div class='genre-year-movie-card container'>
          <p class='genre-movie-card span'>${genre_ids}</p>
          <span class='divider-movie-card'>|</span>
          <p class='year-movie-card span'>${release_date.slice(0, 4)}</p>
        </div>

        <div class="form-item">
          <div class="rating">
            <div class="rating-body">
              <div class="rating-active"></div>
              <div class="rating-items">
                <input type="radio" class="rating-item" value="1" name="rating" />
                <input type="radio" class="rating-item" value="2" name="rating" />
                <input type="radio" class="rating-item" value="3" name="rating" />
                <input type="radio" class="rating-item" value="4" name="rating" />
                <input type="radio" class="rating-item" value="5" name="rating" />
              </div>
            </div>
          <div class="rating-value">${vote_average}</div>
        </div>
      </div>
    </div>
  </li>`
    )
    .join('');
}
// ------------

// handlerMoviesDescription(${ id })
// function renderMoviesInfo({ genres }) {
//   сonst movieGenreEl = document.querySelector('.genres')
//   movieGenreEl.textContent = `${genres.name}`
// }

// function markup({ genres }) {
//   refs.movieList.innerHTML = genres
//     .map(({ id, name }) => {
//       return `
//         <li>
//           <div>id: ${id}</div>
//           <div>id: ${name}</div>
//         </li>`;
//     })
//     .join('');
// }

// // ------из видео
// function markupMovies({ results }) {
//   console.log({ results });

//   refs.movieList.innerHTML = results
//     .map(
//       ({ poster_path, title, vote_average, genre_ids, release_date }) =>
//         `<li class='item-movie-card'>
//     <img class='poster-movie-card' src='https://image.tmdb.org/t/p/w200${poster_path}' alt='${title}'>
//     <div class='overlay-movie-card'></div>
//     <div class='info-movie-card'>
//       <h4 class='title-movie-card'>${title}</h4>
//       <div class='wrapper-movie-card'>
//         <div class='genre-year-movie-card container'>
//           <p class='genre-movie-card span'>${genre_ids}</p>
//           <span class='divider-movie-card'>|</span>
//           <p class='year-movie-card span'>${release_date.slice(0, 4)}</p>
//         </div>

//         <div class="form-item">
//           <div class="rating">
//             <div class="rating-body">
//               <div class="rating-active"></div>
//               <div class="rating-items">
//                 <input type="radio" class="rating-item" value="1" name="rating" />
//                 <input type="radio" class="rating-item" value="2" name="rating" />
//                 <input type="radio" class="rating-item" value="3" name="rating" />
//                 <input type="radio" class="rating-item" value="4" name="rating" />
//                 <input type="radio" class="rating-item" value="5" name="rating" />
//               </div>
//             </div>
//           <div class="rating-value">${vote_average}</div>
//         </div>
//       </div>
//     </div>
//   </li>`
//     )
//     .join('');
// }
// -----last
// function markupMovies({ results }) {
//   console.log({ results });

//   refs.movieList.innerHTML = results
//     .map(
//       ({ poster_path, title, vote_average, genre_ids, release_date }) =>
//         `<li class='item-movie-card'>
//     <img class='poster-movie-card' src='https://image.tmdb.org/t/p/w200${poster_path}' alt='${title}'>
//     <div class='overlay-movie-card'></div>
//     <div class='info-movie-card'>
//       <h4 class='title-movie-card'>${title}</h4>
//       <div class='wrapper-movie-card'>
//         <div class='genre-year-movie-card container'>
//           <p class='genre-movie-card span'>${genre_ids}</p>
//           <span class='divider-movie-card'>|</span>
//           <p class='year-movie-card span'>${release_date.slice(0, 4)}</p>
//         </div>
//         <div class='vote-movie-card'>${vote_average}</div>
//       </div>
//     </div>
//   </li>`
//     )
//     .join('');
// }
// ---
// refs.movieList.innerHTML = results
//   .map(
//     ({ poster_path, title, vote_average, genre_ids, release_date }) =>
//       `<li class='movie-card'>
//   <img class='poster-movie-card' src='https://image.tmdb.org/t/p/w200${poster_path}' alt='${title}'>
//   <div class='overlay-movie-card'></div>
//   <div class='info-movie-card'>
//     <h4 class='title-movie-card'>${title}</h4>
//     <div class='wrapper-movie-card'>
//       <div class='genre-year-movie-card>
//         <p class='genre-movie-card'>${genre_ids}</p>
//         <p class='year-movie-card'>${release_date.slice(0, 4)}</p>
//       </div>
//       <div class='vote-movie-card'>${vote_average}</div>
//     </div>
//   </div>
// </li>`
//   )
//   .join('');
