// INDEX.JS 
// alert("I AM WORKING");
// Nav links hover event listener
const content = document.querySelector("#content");
const navArray = ["Home", "Menu", "Contact"];
const navArrayLen = navArray.length;
let tabContent = document.createElement("div");
tabContent.setAttribute("id", "tab-content");
console.log("navArrayLen: ", navArrayLen);
console.log("JS LOADED");

content.appendChild(generateHeader());
content.appendChild(tabContent);

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(nav => {
    nav.addEventListener("mouseover", ()=>{
    nav.classList.add("active");
    // console.log("ADD ACTIVE");
    });
    nav.addEventListener("mouseout", ()=>{
        nav.classList.remove("active");
        // console.log("REMOVE ACTIVE");
        });
    nav.addEventListener("click", ()=>{
        tabContent.innerHTML = "";
        if (nav.textContent === "Home"){
            tabContent.innerHTML = "";
            tabContent.appendChild(generateIntro());
            console.log("Generate Homepage");
        }
        if (nav.textContent === "Menu"){
            tabContent.innerHTML = "";
            tabContent.appendChild(generateMenu());
            console.log("Generate Menu");
        }
        if (nav.textContent === "Contact"){
            tabContent.appendChild(generateContact());
            console.log("Generate Contact");
        }
        });
    });

// Module load
import {generateIntro} from "./intro";
import {generateMenu} from "./menu";
import {generateContact} from "./contact";
// tabContent.appendChild(generateIntro());
tabContent.appendChild(generateIntro());
content.appendChild(generateFooter());



// functions hoist
function generateHeader(){
    let header = document.createElement("header");
    let logo = document.createElement("div");
    let nav = document.createElement("nav");
    let navUL = document.createElement("ul");
    let navLI;
    let component;

    logo.setAttribute("id", "logo-title");
    component = document.createElement("img");
    component.setAttribute("src", "./icons/chefs-hat.svg");
    component.setAttribute("alt", "logo");
    logo.appendChild(component);
    component = document.createElement("h2");
    component.textContent = "El Ristorante";
    logo.appendChild(component);
    header.appendChild(logo);

    for(let i=0; i<navArrayLen; i++){
        component = document.createElement("a");
        navLI = document.createElement("li");
        component.setAttribute("href", "#");
        component.textContent = navArray[i];
        console.log("component a:", component);
        navLI.appendChild(component);
        console.log("navLI:", navLI);
        navUL.appendChild(navLI);
    }

    nav.appendChild(navUL);
    header.appendChild(nav);
    return header;
}
function generateFooter(){
    let footer = document.createElement("footer");
    let ul, li, a, img;
    let component;
    const footerArray = [["fb-social", "facebook-svgrepo-com.svg"], ["twitter-social", "twitter 1.svg"], ["instagram-social", "instagram 1.svg"]];
    const footerArrayLen = footerArray.length;
    component = document.createElement("h4");
    component.innerHTML = "Made by VoongWebDesign &copy; 2020";
    footer.appendChild(component);
    ul = document.createElement("ul");
    for (let i = 0; i<footerArrayLen; i++){
        li = document.createElement("li");
        a = document.createElement("a");
        img = document.createElement("img");
        a.setAttribute("href", "#");
        img.setAttribute("src", `./icons/${footerArray[i][1]}`);
        img.setAttribute("alt", `${footerArray[i][0]}`);
        a.appendChild(img);
        li.appendChild(a);
        ul.appendChild(li);
    }
    footer.appendChild(ul);
    return footer;
}

