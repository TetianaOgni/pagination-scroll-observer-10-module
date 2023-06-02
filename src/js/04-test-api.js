const KEY = 'd2aad4829db25ed52746f46f8c4574ea';
const API =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc';

import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc',
    accept: 'application/json',
  },
};

export async function getTrendingMoviesByWeek(page = 4) {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?language=en-US&page=${page}`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTrendingMoviesByDay(page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?language=en-US&page=${page}`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUpcomingMovies(page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/upcoming?language=en-US&page=${page}`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSearchingMovies(page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?include_adult=false&language=en-US&page=${page}`,
      options
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesDescription() {
  console.log();

  try {
    const response = await axios.get(
      // `${BASE_URL}/genre/movie/list?language=en`,

      `${BASE_URL}/movie/603692?language=en-US`,
      options
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// 603692;
// import {
//   getTrendingMoviesByDay,
//   getTrendingMoviesByWeek,
//   getUpcomingMovies,
// } from './js/api';
// const refs = {
//   movieDay: document.querySelector('.movie-day'),
//   movieWeek: document.querySelector('.movie-week'),
//   movieUpcoming: document.querySelector('.movie-upcoming'),
//   movieList: document.querySelector('.list'),
// };
// refs.movieDay.addEventListener('click', handlerMoviesDay);
// refs.movieWeek.addEventListener('click', handlerMoviesWeek);
// refs.movieUpcoming.addEventListener('click', handlerMoviesUpcoming);
// function handlerMoviesWeek() {
//   getTrendingMoviesByWeek().then(data => {
//     console.log(data);
//     markupMovies(data);
//   });
// }
// function handlerMoviesDay() {
//   getTrendingMoviesByDay().then(data => {
//     console.log(data);
//     markupMovies(data);
//   });
// }
// function handlerMoviesUpcoming() {
//   getUpcomingMovies().then(data => {
//     console.log(data);
//     markupMovies(data);
//   });
// }
// function markupMovies({ results }) {
//   refs.movieList.innerHTML = results
//     .map(({ id, title }) => {
//       return `
//         <li>
//           <div>id: ${id}</div>
//           <div>id: ${title}</div>
//         </li>`;
//     })
//     .join('');
// }
