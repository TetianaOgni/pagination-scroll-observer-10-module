var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i),i("fb9GJ");const o=document.querySelector(".js-list");document.getElementById("pagination-container");(function(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=345007f9ab440e5b86cef51be6397df1&page=${e}&limit= 6`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))})().then((e=>{o.insertAdjacentHTML("beforeend",e.results.map((({poster_path:e,title:n,id:t})=>`<li class='card'>\n    <img class='poster' src='https://image.tmdb.org/t/p/w200${e}' alt='${n}'>\n    <div class='overlay'></div>\n    <div class='info'>\n     <div class='info-text'>\n      <p class='text-card'>${n}</p>\n      <p class='genre'>Genre</p>\n     </div>\n      <div class='raiting'>Stars</div>\n    </div>\n  </li>`)).join("")),console.log(e)})).catch((e=>console.log(e)));
//# sourceMappingURL=05-test-themovies.27279ce8.js.map
