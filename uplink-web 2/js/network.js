(function(){
var c=document.getElementById("net");if(!c||!c.getContext)return;
var x=c.getContext("2d"),h=c.parentNode,W=0,H=0,N=[],P=[],D=150,dpr=Math.min(window.devicePixelRatio||1,2),
rm=window.matchMedia("(prefers-reduced-motion: reduce)").matches,vis=true,
col=["#0a2559","#037c82","#ff6444","#fdb12b","#8bd0c4"];
function rnd(a,b){return a+Math.random()*(b-a)}
function near(i){var o=[],a=N[i];for(var j=0;j<N.length;j++){if(j!==i&&Math.hypot(a.x-N[j].x,a.y-N[j].y)<D)o.push(j)}return o}
function pick(o){return o[Math.floor(Math.random()*o.length)]}
function newPulse(){var a=Math.floor(Math.random()*N.length),o=near(a);return{a:a,b:o.length?pick(o):a,t:Math.random(),s:rnd(.004,.009)}}
function size(){
W=h.clientWidth;H=h.clientHeight;if(!W||!H)return;
c.width=Math.round(W*dpr);c.height=Math.round(H*dpr);x.setTransform(dpr,0,0,dpr,0,0);
D=Math.max(90,Math.min(150,W/5));
var n=Math.round(Math.max(14,Math.min(36,W*H/24000)));
N=[];for(var i=0;i<n;i++)N.push({x:rnd(0,W),y:rnd(0,H),vx:rnd(-.18,.18),vy:rnd(-.18,.18),r:rnd(2,5),c:col[i%5]});
P=[];for(i=0;i<5;i++)P.push(newPulse())}
function step(){
N.forEach(function(n){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1});
P.forEach(function(p,k){p.t+=p.s;if(p.t>=1){var o=near(p.b).filter(function(j){return j!==p.a});
p.a=p.b;p.t=0;if(o.length)p.b=pick(o);else P[k]=newPulse()}})}
function dot(px,py,r,a,f){x.fillStyle=f;x.globalAlpha=a;x.beginPath();x.arc(px,py,r,0,6.283);x.fill()}
function draw(){
x.clearRect(0,0,W,H);x.lineWidth=1.2;
for(var i=0;i<N.length;i++)for(var j=i+1;j<N.length;j++){
var d=Math.hypot(N[i].x-N[j].x,N[i].y-N[j].y);
if(d<D){x.strokeStyle="rgba(3,124,130,"+((1-d/D)*.32).toFixed(3)+")";x.beginPath();x.moveTo(N[i].x,N[i].y);x.lineTo(N[j].x,N[j].y);x.stroke()}}
N.forEach(function(n){dot(n.x,n.y,n.r*2.6,.16,n.c);dot(n.x,n.y,n.r,.85,n.c)});
P.forEach(function(p){var a=N[p.a],b=N[p.b];if(!a||!b||p.a===p.b)return;
var px=a.x+(b.x-a.x)*p.t,py=a.y+(b.y-a.y)*p.t;dot(px,py,7,.25,"#fdb12b");dot(px,py,2.6,1,"#fdb12b")});
x.globalAlpha=1}
function loop(){if(vis&&!document.hidden){step();draw()}requestAnimationFrame(loop)}
size();draw();c.classList.add("on");
if(!rm){requestAnimationFrame(loop);
if("IntersectionObserver" in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(h)}
var rt;window.addEventListener("resize",function(){clearTimeout(rt);rt=setTimeout(function(){
if(h.clientWidth===W&&Math.abs(h.clientHeight-H)<80)return;size();draw()},150)});
})();
