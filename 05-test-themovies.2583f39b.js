!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o),o("1VFfL");var i="https://api.themoviedb.org/3/",r="trending/movie/day",a="345007f9ab440e5b86cef51be6397df1",c=document.querySelector(".js-list");document.getElementById("pagination-container");(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("".concat(i).concat(r,"?api_key=").concat(a,"&page=").concat(e,"&limit= 6")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))})().then((function(e){c.insertAdjacentHTML("beforeend",e.results.map((function(e){var n=e.poster_path,t=e.title;return e.id,"<li class='card'>\n    <img class='poster' src='https://image.tmdb.org/t/p/w200".concat(n,"' alt='").concat(t,"'>\n    <div class='overlay'></div>\n    <div class='info'>\n     <div class='info-text'>\n      <p class='text-card'>").concat(t,"</p>\n      <p class='genre'>Genre</p>\n     </div>\n      <div class='raiting'>Stars</div>\n    </div>\n  </li>")})).join("")),console.log(e)})).catch((function(e){return console.log(e)}))}();
//# sourceMappingURL=05-test-themovies.2583f39b.js.map
