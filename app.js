!function(t){var e={};function n(s){if(e[s])return e[s].exports;var c=e[s]={i:s,l:!1,exports:{}};return t[s].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(s,c,function(e){return t[e]}.bind(null,c));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}({"./src/js/carousel.js":function(t,e){document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("carousel");let e,n;async function s(){const s=await new Promise(((t,e)=>{fetch("./js/carousel.json").then((t=>t.json())).then((e=>t(e))).catch((t=>e(t)))}));s.slides.forEach(((c,o)=>{newSlide=document.createElement("div"),newSlide.classList.add("carousel__slide"),newSlide.dataset.slide=o;const{title:a,desc:l,path:i,pathTab:d,pathMob:r}=c;newSlide.innerHTML=`\n\t\t\t\t\t\t<div class="carousel__hero">\n\t\t\t\t\t\t\t<div class="carousel__hero-img">\n\t\t\t\t\t\t\t\t<picture class="carousel__picture" >\n\t\t\t\t\t\t\t\t\t\x3c!-- mobile image --\x3e\n\t\t\t\t\t\t\t\t\t<source\n\t\t\t\t\t\t\t\t\tsrcset="${r}"\n\t\t\t\t\t\t\t\t\tmedia="all and (max-width:576px)"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\x3c!-- tablet image --\x3e\n\t\t\t\t\t\t\t\t\t<source\n\t\t\t\t\t\t\t\t\tsrcset="${d}"\n\t\t\t\t\t\t\t\t\tmedia="all and (min-width:991px) and (max-width:1199px)"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\x3c!-- desktop image --\x3e\n\t\t\t\t\t\t\t\t\t<source\n\t\t\t\t\t\t\t\t\tsrcset="${i}"\n\t\t\t\t\t\t\t\t\tmedia="all and (min-width:1200px)"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\x3c!-- default image as a fallback --\x3e\n\t\t\t\t\t\t\t\t\t<img src="${i}"\n\t\t\t\t\t\t\t\t\tclass="carousel__image"\n\t\t\t\t\t\t\t\t\talt="Alt"\n\t\t\t\t\t\t\t\t\tloading="eager">\n\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="carousel__btns">\n\t\t\t\t\t\t\t<button class="carousel__btn btn-left" id="prev">\n\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t<button class="carousel__btn btn-right" id="next">\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="carousel__content">\n\t\t\t\t\t\t\t<p class="carousel__desc">\n\t\t\t\t\t\t\t\t${l}\n\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t<h2 class="carousel__title">\n\t\t\t\t\t\t\t\t${a}\n\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t`,t.appendChild(newSlide),0===o?(e=newSlide,newSlide.classList.add("active")):o+1===s.slides.length&&(n=newSlide)})),document.querySelectorAll(".btn-right").forEach((t=>{t.addEventListener("click",(t=>{const e=document.querySelector(".carousel__slide.active"),n=document.querySelector(".carousel__slide");let s=e.nextElementSibling;null==s&&(s=e),s.classList.contains("carousel__slide")&&!s.classList.contains("active")?(e.classList.remove("active"),s.classList.add("active")):(e.classList.remove("active"),n.classList.add("active"))}))})),c(),function(){const t=document.querySelectorAll(".carousel__dot"),e=document.querySelectorAll(".carousel__slide");t.forEach(((t,n)=>{t.addEventListener("click",(s=>{const c=document.querySelector(".carousel__dot.active"),o=document.querySelector(".carousel__slide.active");t.classList.contains("active")||e.forEach(((e,s)=>{t.classList.contains("active")&&e.classList.contains("active")||(n!==s&&(c.classList.remove("active"),o.classList.remove("active")),n===s&&(e.classList.add("active"),t.classList.add("active")))}))}))}))}()}function c(){const t=document.querySelectorAll(".carousel__dot"),e=document.querySelector(".carousel__slide.active");t.forEach(((t,n)=>{t.dataset.forDot===e.dataset.slide?t.classList.add("active"):t.classList.remove("active")}))}setInterval((function(){document.getElementById("next").click(),c()}),4e3);s()}))},"./src/js/main.js":function(t,e){document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("load",(t=>{document.querySelector(".preload").classList.add("preload-finished")}));const t=document.getElementById("btnScrollToTop");t&&t.addEventListener("click",(t=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}))}))},"./src/js/nav.js":function(t,e){document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("menu-btn"),e=document.getElementById("nav"),n=document.getElementById("nav-container"),s=document.getElementById("logo");window.addEventListener("scroll",(t=>{document.documentElement.scrollTop>0?n.classList.add("sticky"):n.classList.remove("sticky")})),t.addEventListener("click",(c=>{t.classList.toggle("clicked"),e.classList.toggle("show"),n.classList.toggle("overlay"),s.classList.toggle("hide")}))}))},0:function(t,e,n){n("./src/js/carousel.js"),n("./src/js/main.js"),t.exports=n("./src/js/nav.js")}});