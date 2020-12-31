// INTRO COMPONENT

function generateIntro(){
    let section = document.createElement("section");
    section.setAttribute("id", "intro");
    section.appendChild(component1());
    section.appendChild(component2());
    return section;
}
function component1(){
    let welcomeMsg = document.createElement("div");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    welcomeMsg.setAttribute("id", "welcome-msg");
    welcomeMsg.setAttribute("class", "intro-1");
    h2.setAttribute("class", "red-text");
    h2.textContent = "¡Bienvenidos amigos!";
    h3.textContent = "At El Ristorante, we pride ourselves on delivering quality, affordable mediterranean cuisine made with passion.";

    welcomeMsg.appendChild(h2);
    welcomeMsg.appendChild(h3);
    return welcomeMsg;
}

function component2(){
    let component;
    let infoBox = document.createElement("div");
    infoBox.setAttribute("id", "info-box");
    infoBox.setAttribute("class", "intro-1");

    let infoHours = document.createElement("div");
    infoHours.setAttribute("id", "info-hours");
    component = document.createElement("h3");
    component.setAttribute("class", "red-text");
    component.textContent = "OPENING HOURS";
    infoHours.appendChild(component);
    component = document.createElement("h4");
    component.textContent = "Tues - Sunday: 10.30am - 2.30pm (lunch service)";
    infoHours.appendChild(component);
    component = document.createElement("h4");
    component.textContent = "Tues - Sunday: 5.30pm - 10.30pm (dinner service)";
    infoHours.appendChild(component);
    // Monday: CLOSED
    component = document.createElement("h4");
    component.textContent = "Monday: CLOSED";
    infoHours.appendChild(component);
    infoBox.appendChild(infoHours);

    let infoAddress = document.createElement("div");
    component = document.createElement("h3");
    component.setAttribute("class", "red-text");
    component.textContent = "ADDRESS";
    infoAddress.appendChild(component);
    component=document.createElement("h3");
    component.innerHTML = "19 Berkeley Street <br> London W1J 8ED <br> England";
    infoAddress.appendChild(component);
    infoBox.appendChild(infoAddress);

    return infoBox;
}

export {generateIntro, component1};