!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequired7c6=i);var r=i("bpxeT"),c=i("2TvXO"),o=i("dIxxU"),s="https://api.themoviedb.org/3",l={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};function u(){return d.apply(this,arguments)}function d(){return d=e(r)(e(c).mark((function n(){var t,a,i=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:4,e.prev=1,e.next=4,o.default.get("".concat(s,"/trending/movie/week?language=en-US&page=").concat(t),l);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),n,null,[[1,8]])}))),d.apply(this,arguments)}function v(){return p.apply(this,arguments)}function p(){return p=e(r)(e(c).mark((function n(){var t,a,i=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,e.prev=1,e.next=4,o.default.get("".concat(s,"/trending/movie/day?language=en-US&page=").concat(t),l);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),n,null,[[1,8]])}))),p.apply(this,arguments)}function m(){return g.apply(this,arguments)}function g(){return g=e(r)(e(c).mark((function n(){var t,a,i=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,e.prev=1,e.next=4,o.default.get("".concat(s,"/movie/upcoming?language=en-US&page=").concat(t),l);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),n,null,[[1,8]])}))),g.apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=e(r)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(),e.prev=1,e.next=4,o.default.get("".concat(s,"/movie/603692?language=en-US"),l);case 4:return e.sent,console.log(data),e.abrupt("return",data);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}var y,w,x={movieDay:document.querySelector(".movie-day"),movieWeek:document.querySelector(".movie-week"),movieUpcoming:document.querySelector(".movie-upcoming"),movieSearch:document.querySelector(".movie-search"),movieDescription:document.querySelector(".movie-description"),movieList:document.querySelector(".list-movie-card")};function S(){getSearchingMovies().then((function(e){console.log(e)}))}function k(e){f(e).then((function(e){console.log(e)}))}function b(e){var n=e.results;console.log({results:n}),x.movieList.innerHTML=n.map((function(e){var n=e.poster_path,t=e.title,a=e.vote_average,i=e.genre_ids,r=e.release_date;return"<li class='item-movie-card'>\n    <img class='poster-movie-card' src='https://image.tmdb.org/t/p/w200".concat(n,"' alt='").concat(t,"'>\n    <div class='overlay-movie-card'></div>\n    <div class='info-movie-card'>\n      <h4 class='title-movie-card'>").concat(t,"</h4>\n      <div class='wrapper-movie-card'>\n        <div class='genre-year-movie-card container'>\n          <p class='genre-movie-card span'>").concat(i,"</p>\n          <span class='divider-movie-card'>|</span>\n          <p class='year-movie-card span'>").concat(r.slice(0,4),'</p>\n        </div>\n\n        <div class="form-item">\n          <div class="rating">\n            <div class="rating-body">\n              <div class="rating-active"></div>\n              <div class="rating-items">\n                <input type="radio" class="rating-item" value="1" name="rating" />\n                <input type="radio" class="rating-item" value="2" name="rating" />\n                <input type="radio" class="rating-item" value="3" name="rating" />\n                <input type="radio" class="rating-item" value="4" name="rating" />\n                <input type="radio" class="rating-item" value="5" name="rating" />\n              </div>\n            </div>\n          <div class="rating-value">').concat(a,"</div>\n        </div>\n      </div>\n    </div>\n  </li>")})).join("")}x.movieDay.addEventListener("click",(function(){v().then((function(e){console.log(e),b(e)}))})),x.movieWeek.addEventListener("click",(function(){u().then((function(e){console.log(e),b(e)}))})),x.movieUpcoming.addEventListener("click",(function(){m().then((function(e){console.log(e),k()}))})),x.movieSearch.addEventListener("input",S),x.movieSearch.addEventListener("click",S),x.movieDescription.addEventListener("click",k),y=document.querySelectorAll(".rating-item"),w=document.querySelectorAll(".stars"),y.forEach((function(e,n){e.addEventListener("change",(function(){var e=document.querySelectorAll('input[name="rating"]:checked').length/y.length*100;w[n].style.width="".concat(e,"%")}))}))}();
//# sourceMappingURL=04-test-api.dd19ab2b.js.map
