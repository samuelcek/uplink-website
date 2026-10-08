(function(){var d=document.documentElement,k="ul-lang",l="sk";
try{var v=localStorage.getItem(k);if(v==="en"||v==="sk")l=v}catch(e){}
function apply(x){d.setAttribute("data-l",x);d.lang=x;document.title=d.dataset["t"+x]||document.title;
document.querySelectorAll("[data-set]").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.set===x)})}
d.setAttribute("data-l",l);
document.addEventListener("DOMContentLoaded",function(){apply(l)});
document.addEventListener("click",function(e){var b=e.target.closest("[data-set]");if(b){l=b.dataset.set;apply(l);try{localStorage.setItem(k,l)}catch(x){}}});
})();
