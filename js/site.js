(function(){var d=document.documentElement,k="ul-lang",l;
try{l=localStorage.getItem(k)}catch(e){}
if(l!=="en")l="sk";
function set(x){d.setAttribute("data-l",x);d.lang=x;document.title=d.dataset["t"+x];
try{localStorage.setItem(k,x)}catch(e){}
document.querySelectorAll("[data-set]").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.set===x)})}
document.addEventListener("DOMContentLoaded",function(){set(l)});
d.setAttribute("data-l",l);
document.addEventListener("click",function(e){var b=e.target.closest("[data-set]");if(b){l=b.dataset.set;set(l)}});
})();
