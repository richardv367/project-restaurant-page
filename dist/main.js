(()=>{"use strict";function e(){let e=document.createElement("section");return e.setAttribute("id","intro"),e.appendChild(function(){let e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("h3");return e.setAttribute("id","welcome-msg"),e.setAttribute("class","intro-1"),t.setAttribute("class","red-text"),t.textContent="¡Bienvenidos amigos!",n.textContent="At El Ristorante, we pride ourselves on delivering quality, affordable mediterranean cuisine made with passion.",e.appendChild(t),e.appendChild(n),e}()),e.appendChild(function(){let e,t=document.createElement("div");t.setAttribute("id","info-box"),t.setAttribute("class","intro-1");let n=document.createElement("div");n.setAttribute("id","info-hours"),e=document.createElement("h3"),e.setAttribute("class","red-text"),e.textContent="OPENING HOURS",n.appendChild(e),e=document.createElement("h4"),e.textContent="Tues - Sunday: 10.30am - 2.30pm (lunch service)",n.appendChild(e),e=document.createElement("h4"),e.textContent="Tues - Sunday: 5.30pm - 10.30pm (dinner service)",n.appendChild(e),e=document.createElement("h4"),e.textContent="Monday: CLOSED",n.appendChild(e),t.appendChild(n);let d=document.createElement("div");return e=document.createElement("h3"),e.setAttribute("class","red-text"),e.textContent="ADDRESS",d.appendChild(e),e=document.createElement("h3"),e.innerHTML="19 Berkeley Street <br> London W1J 8ED <br> England",d.appendChild(e),t.appendChild(d),t}()),e}let t=[{item:"FOCACCIA MOZZARELLA",ingredients:"Flatbread with mozzarella",price:"£7"},{item:"TARTARE DI TONNO",ingredients:"Yellow fin tuna tartare",price:"£8"},{item:"SELEZIONE DI SALUMI TOSCANI",ingredients:"Selection of fine Tuscan cured meat",price:"£8"}],n=[{item:"LINGUINE ALLE VONGOLE",ingredients:"Linguine with clams, chilli, garlic and cherry tomatoes",price:"£22"},{item:"RISOTTO AI FRUTTI DI MARE",ingredients:"Seafood risotto",price:"£26"},{item:"BISTECCA DI MANZO SCOZZESE",ingredients:"Rib-eye steak with tomato and mushrooms",price:"£36"}];function d(){let e=document.createElement("div");return e.setAttribute("class","divider"),e}const i=document.querySelector("#content"),a=["Home","Menu","Contact"],l=a.length;let r=document.createElement("div");r.setAttribute("id","tab-content"),console.log("navArrayLen: ",l),console.log("JS LOADED"),i.appendChild(function(){let e,t,n=document.createElement("header"),d=document.createElement("div"),i=document.createElement("nav"),r=document.createElement("ul");d.setAttribute("id","logo-title"),t=document.createElement("img"),t.setAttribute("src","./icons/chefs-hat.svg"),t.setAttribute("alt","logo"),d.appendChild(t),t=document.createElement("h2"),t.textContent="El Ristorante",d.appendChild(t),n.appendChild(d);for(let n=0;n<l;n++)t=document.createElement("a"),e=document.createElement("li"),t.setAttribute("href","#"),t.textContent=a[n],console.log("component a:",t),e.appendChild(t),console.log("navLI:",e),r.appendChild(e);return i.appendChild(r),n.appendChild(i),n}()),i.appendChild(r),document.querySelectorAll("nav a").forEach((i=>{i.addEventListener("mouseover",(()=>{i.classList.add("active")})),i.addEventListener("mouseout",(()=>{i.classList.remove("active")})),i.addEventListener("click",(()=>{r.innerHTML="","Home"===i.textContent&&(r.innerHTML="",r.appendChild(e()),console.log("Generate Homepage")),"Menu"===i.textContent&&(r.innerHTML="",r.appendChild(function(){let e=document.createElement("section");return e.setAttribute("id","menu"),e.appendChild(function(){let e,n=document.createElement("div"),i=document.createElement("h2"),a=document.createElement("div");a.setAttribute("class","itemGrid"),n.setAttribute("id","starters"),n.setAttribute("class","menu-section"),i.textContent="Starters",n.appendChild(i),n.appendChild(d());let l=t.length;for(let n=0;n<l;n++){e=document.createElement("div");let d=document.createElement("h3"),i=document.createElement("h5"),l=document.createElement("h3");d.textContent=t[n].item,i.textContent=t[n].ingredients,l.textContent=t[n].price,e.appendChild(d),e.appendChild(i),e.appendChild(l),a.appendChild(e)}return n.appendChild(a),n}()),e.appendChild(function(){let e,t=document.createElement("div"),i=document.createElement("h2"),a=document.createElement("div");a.setAttribute("class","itemGrid"),t.setAttribute("id","mains"),t.setAttribute("class","menu-section"),i.textContent="Mains",t.appendChild(i),t.appendChild(d());let l=n.length;for(let t=0;t<l;t++){e=document.createElement("div");let d=document.createElement("h3"),i=document.createElement("h5"),l=document.createElement("h3");d.textContent=n[t].item,i.textContent=n[t].ingredients,l.textContent=n[t].price,e.appendChild(d),e.appendChild(i),e.appendChild(l),a.appendChild(e)}return t.appendChild(a),t}()),e}()),console.log("Generate Menu")),"Contact"===i.textContent&&(r.appendChild(function(){let e=document.createElement("section");return e.setAttribute("id","contact"),e.appendChild(function(){let e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("div");return n.setAttribute("class","divider"),t.textContent="Contact us",e.appendChild(t),e.appendChild(n),e}()),e.appendChild(function(){let e=document.createElement("div");return e.setAttribute("id","contact-container"),e.appendChild(function(){let e=document.createElement("div"),t=document.createElement("h3"),n=document.createElement("h4");return t.textContent="ADDRESS",n.textContent="19 Berkeley Street",e.appendChild(t),e.appendChild(n),n=document.createElement("h4"),n.textContent="London W1J 8ED",e.appendChild(n),n=document.createElement("h4"),n.textContent="England",e.appendChild(n),e}()),e.appendChild(function(){let e=document.createElement("div"),t=document.createElement("h3"),n=document.createElement("h4");return t.textContent="OPENING HOURS",n.textContent="Monday: CLOSED",e.appendChild(t),e.appendChild(n),n=document.createElement("h4"),n.textContent="Tues - Sun: 10.30am - 2.30pm",e.appendChild(n),n=document.createElement("h4"),n.textContent="Tues - Sun: 5.30pm - 10.30pm",e.appendChild(n),e}()),e.appendChild(function(){let e=document.createElement("div"),t=document.createElement("h3"),n=document.createElement("h4");return t.textContent="CONTACT DETAILS",n.textContent="Tel: 111-2222-3333",e.appendChild(t),e.appendChild(n),n=document.createElement("h4"),n.textContent="Email: restaurant@foodnetwork.net",e.appendChild(n),e}()),e}()),e.appendChild(function(){let e=document.createElement("div");return e.setAttribute("id","map"),e.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2352640503914!2d-0.14559514228673118!3d51.50889967156435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605299c6fffeb%3A0xadb4b7ade7bee67f!2sMayfair%2C%20London%20W1J%208ED!5e0!3m2!1sen!2suk!4v1609297378804!5m2!1sen!2suk" width="660" height="380" frameborder="0" style="border:2px solid black;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',e}()),e}()),console.log("Generate Contact"))}))})),r.appendChild(e()),i.appendChild(function(){let e,t,n,d,i,a=document.createElement("footer");const l=[["fb-social","facebook-svgrepo-com.svg"],["twitter-social","twitter 1.svg"],["instagram-social","instagram 1.svg"]],r=l.length;i=document.createElement("h4"),i.innerHTML="Made by VoongWebDesign &copy; 2020",a.appendChild(i),e=document.createElement("ul");for(let i=0;i<r;i++)t=document.createElement("li"),n=document.createElement("a"),d=document.createElement("img"),n.setAttribute("href","#"),d.setAttribute("src",`./icons/${l[i][1]}`),d.setAttribute("alt",`${l[i][0]}`),n.appendChild(d),t.appendChild(n),e.appendChild(t);return a.appendChild(e),a}())})();