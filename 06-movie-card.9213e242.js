function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},t=n.parcelRequired7c6;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return i[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequired7c6=t);var r,o=t("2shzp");r=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');const s={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};const l=document.querySelector(".list-movie-card"),c={};e(r).genres.forEach((e=>{c[e.id]=e.name})),console.log(3,c[37]),async function(e=4){try{const n=await o.default.get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,s);return console.log(n.data),n.data}catch(e){console.log(e)}}().then((e=>{console.log(e),function({results:e}){console.log({results:e}),l.innerHTML=e.map((({poster_path:e,title:n,vote_average:i,genre_ids:a,release_date:t})=>{let r="";return a.length>0&&(r=1===a.length||a.join(", ").length<=20?c[a[0]]:`${c[a[0]]}, ${c[a[1]]}`),`<li class='item-movie-card'>\n          <img class='poster-movie-card' src='https://image.tmdb.org/t/p/w200${e}' alt='${n}'>\n          <div class='overlay-movie-card'></div>\n          <div class='info-movie-card'>\n            <h4 class='title-movie-card'>${n}</h4>\n            <div class='wrapper-movie-card'>\n              <div class='genre-year-movie-card'>\n                <p class='genre-movie-card span'>${r}</p> \x3c!-- Используем genreNames --\x3e\n                <span class='divider-movie-card'>|</span>\n                <p class='year-movie-card span'>${t.slice(0,4)}</p>\n              </div>\n\n              <div class="form-item">\n                <div class="rating">\n                  <div class="rating-body">\n                    <div class="rating-active"></div>\n                    <div class="rating-items">\n                      <input type="radio" class="rating-item" value="1" name="rating" />\n                      <input type="radio" class="rating-item" value="2" name="rating" />\n                      <input type="radio" class="rating-item" value="3" name="rating" />\n                      <input type="radio" class="rating-item" value="4" name="rating" />\n                      <input type="radio" class="rating-item" value="5" name="rating" />\n                    </div>\n                  </div>\n                <div class="rating-value">${i}</div>\n              </div>\n            </div>\n          </div>\n        </li>`})).join(""),document.querySelectorAll(".rating").forEach((e=>{!function(e){const n=e.querySelector(".rating-active"),i=e.querySelector(".rating-value");!function(e,n){const i=n/10*100;e.style.width=`${i}%`}(n,i.innerHTML)}(e)}))}(e)})).catch((e=>console.log(e))),console.log(),console.log(),console.log();
//# sourceMappingURL=06-movie-card.9213e242.js.map