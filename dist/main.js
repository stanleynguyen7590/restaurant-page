(()=>{"use strict";const e=document.createElement("div");e.id="top-bar";const n=document.createElement("ul");n.classList.add("top-bar__container"),e.append(n),['<i class="fas fa-mobile-alt"></i> <span> +1 5589 55488 55</span>','<i class="far fa-clock"></i> <span> Mon-Sat: 11AM - 23PM</span>',"EN/DE"].forEach((e=>n.insertAdjacentHTML("beforeend",`<li>${e}</li>`)));const t=document.createElement("div");t.id="nav-bar",t.append((e=>{const n=document.createElement("div");return n.className="nav-bar__name",n.textContent="RESTAURANTLY",n})()),t.append(((e,n)=>{const t=document.createElement("ul");for(const e of["Home","About","Menu","Specials","Events","Chefs","Gallery","Contact"])t.insertAdjacentHTML("beforeend",`<li><a href="#">${e}</a></li>`);return t.className="nav-bar__container",t})()),t.append((e=>{const n=document.createElement("div"),t=document.createElement("div");return n.className="nav-bar__bookingBtn",t.textContent="BOOK A TABLE",n.append(t),n})());const a=document.createElement("div");a.id="hero";const o=e=>{const n=document.createElement("div");return n.className="hero__button",n.textContent=e,n};a.append((()=>{const e=document.createElement("div");return e.className="hero__container",e.insertAdjacentHTML("beforeend","<h1>Welcome to</h1> <span> Restaurantly</span> <br/> <h2>Delivering great food for more than 18 years!</h2>"),e.append(o("OUR MENU")),e.append(o("BOOK A TABLE")),e})()),document.getElementById("content").append(e),document.getElementById("content").append(t),document.getElementById("content").append(a)})();