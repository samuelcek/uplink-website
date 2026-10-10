(function(){var d=document.documentElement,k="ul-lang",l="sk";
d.classList.add("js");
try{var v=localStorage.getItem(k);if(v==="en"||v==="sk")l=v}catch(e){}
function apply(x){d.setAttribute("data-l",x);d.lang=x;document.title=d.dataset["t"+x]||document.title;
document.querySelectorAll("[data-set]").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.set===x)})}
function reveal(){
if(!("IntersectionObserver" in window)||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add("in");io.unobserve(t);setTimeout(function(){t.classList.remove("rv","in");t.style.transitionDelay=""},1300)}})},{threshold:.12});
document.querySelectorAll(".cols>div,.opp,.empty,.facts,.soc-s .wrap").forEach(function(t,i){
if(t.getBoundingClientRect().top<innerHeight*.9)return;
t.classList.add("rv");t.style.transitionDelay=(i%3)*90+"ms";io.observe(t)})}
d.setAttribute("data-l",l);
document.addEventListener("DOMContentLoaded",function(){apply(l);reveal()});
document.addEventListener("click",function(e){var b=e.target.closest("[data-set]");if(b){l=b.dataset.set;apply(l);try{localStorage.setItem(k,l)}catch(x){}}});
})();
