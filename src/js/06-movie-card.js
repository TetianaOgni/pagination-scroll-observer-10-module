import axios from 'axios';
import genres from './genres.json';

const KEY = 'd2aad4829db25ed52746f46f8c4574ea';
const API =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc';

const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc',
    accept: 'application/json',
  },
};
async function getTrendingMoviesByWeek(page = 4) {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?language=en-US&page=${page}`,
      options
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const movieList = document.querySelector('.list-movie-card');

const genresObject = {};
genres.genres.forEach(genre => {
  genresObject[genre.id] = genre.name;
});

console.log(3, genresObject[37]);

getTrendingMoviesByWeek()
  .then(data => {
    console.log(data);
    markupMovies(data);
  })
  .catch(err => console.log(err));
// без окрашенных звезд
// function markupMovies({ results }) {
//   console.log({ results });

//   movieList.innerHTML = results
//     .map(
//       ({ poster_path, title, vote_average, genre_ids, release_date }) =>
//         `<li class='item-movie-card'>
//     <img class='poster-movie-card' src='https://image.tmdb.org/t/p/w200${poster_path}' alt='${title}'>
//     <div class='overlay-movie-card'></div>
//     <div class='info-movie-card'>
//       <h4 class='title-movie-card'>${title}</h4>
//       <div class='wrapper-movie-card'>
//         <div class='genre-year-movie-card'>
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
console.log();

// ----с окрашенными но в content: '★★★★★';
function markupMovies({ results }) {
  console.log({ results });

  movieList.innerHTML = results
    .map(({ poster_path, title, vote_average, genre_ids, release_date }) => {
      // Дополнительный параметр genresObject
      let genreNames = '';
      if (genre_ids.length > 0) {
        if (genre_ids.length === 1 || genre_ids.join(', ').length <= 20) {
          genreNames = genresObject[genre_ids[0]];
        } else {
          genreNames = `${genresObject[genre_ids[0]]}, ${
            genresObject[genre_ids[1]]
          }`;
        }
      }
      return `<li class='item-movie-card'>
          <img class='poster-movie-card' src='https://image.tmdb.org/t/p/w200${poster_path}' alt='${title}'>
          <div class='overlay-movie-card'></div>
          <div class='info-movie-card'>
            <h4 class='title-movie-card'>${title}</h4>
            <div class='wrapper-movie-card'>
              <div class='genre-year-movie-card'>
                <p class='genre-movie-card span'>${genreNames}</p> <!-- Используем genreNames -->
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
        </li>`;
    })
    .join('');
  initRatings();
}

function initRatings() {
  const ratings = document.querySelectorAll('.rating');

  ratings.forEach(rating => {
    initRating(rating);
  });
}

function initRating(rating) {
  const ratingActive = rating.querySelector('.rating-active');
  const ratingValue = rating.querySelector('.rating-value');

  setRatingActiveWidth(ratingActive, ratingValue.innerHTML);
}

function setRatingActiveWidth(ratingActive, index) {
  const ratingActiveWidth = (index / 10) * 100;
  ratingActive.style.width = `${ratingActiveWidth}%`;
}

console.log();
// ---- для звезд в svg
// function markupMovies({ results }) {
//   console.log({ results });

//   movieList.innerHTML = results
//     .map(({ poster_path, title, vote_average, genre_ids, release_date }) => {
//       // Дополнительный параметр genresObject
//       let genreNames = '';
//       if (genre_ids.length > 0) {
//         if (genre_ids.length === 1 || genre_ids.join(', ').length <= 20) {
//           genreNames = genresObject[genre_ids[0]];
//         } else {
//           genreNames = `${genresObject[genre_ids[0]]}, ${
//             genresObject[genre_ids[1]]
//           }`;
//         }
//       }
//       return `<li class='item-movie-card'>
//           <img class='poster-movie-card' src='https://image.tmdb.org/t/p/w200${poster_path}' alt='${title}'>
//           <div class='overlay-movie-card'></div>
//           <div class='info-movie-card'>
//             <h4 class='title-movie-card'>${title}</h4>
//             <div class='wrapper-movie-card'>
//               <div class='genre-year-movie-card'>
//                 <p class='genre-movie-card span'>${genreNames}</p> <!-- Используем genreNames -->
//                 <span class='divider-movie-card'>|</span>
//                 <p class='year-movie-card span'>${release_date.slice(0, 4)}</p>
//               </div>

//               <div class="form-item">
//                 <div class="rating">
//                   <div class="rating-body">
//                     <div class="rating-active"></div>
//                     <div class="rating-items">
//                       <input type="radio" class="rating-item" value="1" name="rating" />
//                       <input type="radio" class="rating-item" value="2" name="rating" />
//                       <input type="radio" class="rating-item" value="3" name="rating" />
//                       <input type="radio" class="rating-item" value="4" name="rating" />
//                       <input type="radio" class="rating-item" value="5" name="rating" />
//                     </div>
//                   </div>
//                 <div class="rating-value">${vote_average}</div>
//               </div>
//             </div>
//           </div>
//         </li>`;
//     })
//     .join('');
//   initRatings();
// }
// function initRating(rating) {
//   const ratingActive = rating.querySelector('.rating-active');
//   const ratingValue = rating.querySelector('.rating-value');

//   setRatingActiveWidth(ratingActive, ratingValue.innerHTML);
// }

// function setRatingActiveWidth(ratingActive, index) {
//   const ratingActiveWidth = (index / 10) * 100;
//   ratingActive.style.width = `${ratingActiveWidth}%`;

//   const starSVG = `
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M0 0h24v24H0V0z" fill="none"/>
//       <path d="M12 2l3.09 6.31L22 9.35l-4.42 4.29L18.64 20 12 16.42 5.36 20l1.06-6.36L2 9.35l6.91-1.04L12 2zm0 2.93l-1.76 3.57-3.91.57 2.83 2.75-.67 3.91 3.52-1.85L12 18.13l3.91 1.85-.67-3.91 2.83-2.75-3.91-.57L12 4.93z"/>
//     </svg>
//   `;

//   const starSVGWithSpacing = `
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M0 0h24v24H0V0z" fill="none"/>
//       <path d="M8.73 2.73L7.29 4.17 10.12 7l-2.83 2.83 1.41 1.41L12 9.83l2.83 2.83 1.41-1.41L13.88 7l2.83-2.83L15.83 2.73 12 6.56 8.73 2.73zm0 0"/>
//     </svg>
//   `;

//   const starSpacing = '<span style="margin-right: 4px;"></span>';

//   const starsHTML = starSVGWithSpacing.repeat(5);
//   const filledStarsHTML = starSVG.repeat(Math.floor(index / 2));
//   const halfStarHTML = index % 2 === 1 ? starSVGWithSpacing : '';

//   ratingActive.innerHTML = `${starsHTML}${starSpacing}${filledStarsHTML}${halfStarHTML}`;
// }

console.log();

// -------

// const genresObject = genresArray.reduce((obj, genre) => {
//   obj[genre.id] = genre.name;
//   return obj;
// }, {});

// console.log(3, genresObject);

// const genresObject = {};
// genres.genres.forEach(genre => {
//   genresObject[genre.id] = genre.name;
// });

// console.log(3, genresObject[37]);

// function markupMovies({ results }) {
//   console.log({ results });

//   const genreMap = {
//     // Объект с соответствиями id и name жанров
//     28: 'Action',
//     12: 'Adventure',
//     16: 'Animation',
//     35: 'Comedy',
//     80: 'Crime',
//     // и так далее...
//   };

//   movieList.innerHTML = results
//     .map(
//       ({ poster_path, title, vote_average, genre_ids, release_date }) =>
//         `<li class='item-movie-card'>
//           <img class='poster-movie-card' src='https://image.tmdb.org/t/p/w200${poster_path}' alt='${title}'>
//           <div class='overlay-movie-card'></div>
//           <div class='info-movie-card'>
//             <h4 class='title-movie-card'>${title}</h4>
//             <div class='wrapper-movie-card'>
//               <div class='genre-year-movie-card'>
//                 <p class='genre-movie-card span'>${genre_ids
//                   .map(id => genreMap[id])
//                   .join(', ')}</p>
//                 <span class='divider-movie-card'>|</span>
//                 <p class='year-movie-card span'>${release_date.slice(0, 4)}</p>
//               </div>

//               <div class="form-item">
//                 <div class="rating">
//                   <div class="rating-body">
//                     <div class="rating-active"></div>
//                     <div class="rating-items">
//                       <input type="radio" class="rating-item" value="1" name="rating" />
//                       <input type="radio" class="rating-item" value="2" name="rating" />
//                       <input type="radio" class="rating-item" value="3" name="rating" />
//                       <input type="radio" class="rating-item" value="4" name="rating" />
//                       <input type="radio" class="rating-item" value="5" name="rating" />
//                     </div>
//                   </div>
//                 <div class="rating-value">${vote_average}</div>
//               </div>
//             </div>
//           </div>
//         </li>`
//     )
//     .join('');
// }
