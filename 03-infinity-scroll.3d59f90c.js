const e=document.querySelector(".js-guard");let t=998,o=new IntersectionObserver((function(o,c){o.forEach((o=>{o.isIntersecting&&(t+=1,r(t).then((t=>{n.insertAdjacentHTML("beforeend",s(t.results)),console.log(2),t.page===t.total_pages&&(console.log(t.page,t.total_pages),c.unobserve(e))})).catch((e=>console.log(e))))}))}),{root:null,rootMargin:"200px"});const n=document.querySelector(".js-list");function r(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=345007f9ab440e5b86cef51be6397df1&page=${e}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}function s(e){return e.map((({poster_path:e,title:t})=>`<li>\n    <img src='https://image.tmdb.org/t/p/w200${e}' alt='${t}'>\n    <h2>${t}</hi>\n  </li>`)).join("")}r().then((t=>{n.insertAdjacentHTML("beforeend",s(t.results)),console.log(t),o.observe(e)})).catch((e=>console.log(e)));
//# sourceMappingURL=03-infinity-scroll.3d59f90c.js.map