// CONTACT JS
function generateContact(){
    let section = document.createElement("section");
    section.setAttribute("id", "contact");
    section.appendChild(header());
    section.appendChild(contactContainer());
    section.appendChild(googleMaps());
    return section;
}

function header(){
    let contact = document.createElement("div");
    let heading = document.createElement("h2");
    let divider = document.createElement("div");
    divider.setAttribute("class", "divider");
    heading.textContent = "Contact us";
    contact.appendChild(heading);
    contact.appendChild(divider);
    return contact;
}
function contactContainer(){
    let container = document.createElement("div");
    container.setAttribute("id", "contact-container");
    container.appendChild(address());
    container.appendChild(openingHrs());
    container.appendChild(contactDetails());
    return container;
}
function address(){
    let div = document.createElement("div");
    let title = document.createElement("h3");
    let line = document.createElement("h4");
    title.textContent = "ADDRESS";
    line.textContent = "19 Berkeley Street";
    div.appendChild(title);
    div.appendChild(line);
    line = document.createElement("h4");
    line.textContent = "London W1J 8ED";
    div.appendChild(line);
    line = document.createElement("h4");
    line.textContent = "England";
    div.appendChild(line);
    return div;
}
function openingHrs(){
    let div = document.createElement("div");
    let title = document.createElement("h3");
    let line = document.createElement("h4");
    title.textContent = "OPENING HOURS";
    line.textContent = "Monday: CLOSED";
    div.appendChild(title);
    div.appendChild(line);
    line = document.createElement("h4");
    line.textContent = "Tues - Sun: 10.30am - 2.30pm";
    div.appendChild(line);
    line = document.createElement("h4");
    line.textContent = "Tues - Sun: 5.30pm - 10.30pm";
    div.appendChild(line);
    return div;
}
function contactDetails(){
    let div = document.createElement("div");
    let title = document.createElement("h3");
    let line = document.createElement("h4");
    title.textContent = "CONTACT DETAILS";
    line.textContent = "Tel: 111-2222-3333";
    div.appendChild(title);
    div.appendChild(line);
    line = document.createElement("h4");
    line.textContent = "Email: restaurant@foodnetwork.net";
    div.appendChild(line);
    // line = document.createElement("h4");
    // line.textContent = "Tuesday - Sunday: 5.30pm - 10.30pm";
    // div.appendChild(line);
    return div;
}
function googleMaps(){
    let div = document.createElement("div");
    div.setAttribute("id", "map");
    div.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2352640503914!2d-0.14559514228673118!3d51.50889967156435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605299c6fffeb%3A0xadb4b7ade7bee67f!2sMayfair%2C%20London%20W1J%208ED!5e0!3m2!1sen!2suk!4v1609297378804!5m2!1sen!2suk" width="660" height="380" frameborder="0" style="border:2px solid black;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
    return div;
}


export {generateContact};