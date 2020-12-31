// Menu Component
let starterItems = [
    {
     item: "FOCACCIA MOZZARELLA",
     ingredients: "Flatbread with mozzarella",
     price: "£7",
    },
    {
    item: "TARTARE DI TONNO",
    ingredients: "Yellow fin tuna tartare",
    price: "£8",
    },
    {
    item: "SELEZIONE DI SALUMI TOSCANI",
    ingredients: "Selection of fine Tuscan cured meat",
    price: "£8",
    },
    ];

let mainItems = [
    {
        item: "LINGUINE ALLE VONGOLE",
        ingredients: "Linguine with clams, chilli, garlic and cherry tomatoes",
        price: "£22",
    },
    {
    item: "RISOTTO AI FRUTTI DI MARE",
    ingredients: "Seafood risotto",
    price: "£26",
    },
    {
    item: "BISTECCA DI MANZO SCOZZESE",
    ingredients: "Rib-eye steak with tomato and mushrooms",
    price: "£36",
    },
    ];


function generateMenu(){
    let section = document.createElement("section");
    section.setAttribute("id", "menu");
    section.appendChild(component1());
    section.appendChild(component2());
    // section.appendChild(component2());
    return section;
}
// continue
function component1(){
    let starters = document.createElement("div");
    let h2 = document.createElement("h2");
    let itemGrid = document.createElement("div");
    let item;
    itemGrid.setAttribute("class", "itemGrid");
    starters.setAttribute("id", "starters");
    starters.setAttribute("class", "menu-section");
    h2.textContent = "Starters";
    starters.appendChild(h2);
    starters.appendChild(divider());
    let starterLen = starterItems.length;
    for (let i=0; i<starterLen; i++){
        item = document.createElement("div");
        let h3 = document.createElement("h3");
        let h5 = document.createElement("h5");
        let price = document.createElement("h3");
        h3.textContent = starterItems[i].item;
        h5.textContent = starterItems[i].ingredients;
        price.textContent = starterItems[i].price;
        item.appendChild(h3);
        item.appendChild(h5);
        item.appendChild(price);
        itemGrid.appendChild(item);
    }
    starters.appendChild(itemGrid);
    return starters;
}

function component2(){
    let mains = document.createElement("div");
    let h2 = document.createElement("h2");
    let itemGrid = document.createElement("div");
    let item;
    itemGrid.setAttribute("class", "itemGrid");
    mains.setAttribute("id", "mains");
    mains.setAttribute("class", "menu-section");
    h2.textContent = "Mains";
    mains.appendChild(h2);
    mains.appendChild(divider());
    let mainLen = mainItems.length;
    for (let i=0; i<mainLen; i++){
        item = document.createElement("div");
        let h3 = document.createElement("h3");
        let h5 = document.createElement("h5");
        let price = document.createElement("h3");
        h3.textContent = mainItems[i].item;
        h5.textContent = mainItems[i].ingredients;
        price.textContent = mainItems[i].price;
        item.appendChild(h3);
        item.appendChild(h5);
        item.appendChild(price);
        itemGrid.appendChild(item);
    }
    mains.appendChild(itemGrid);
    return mains;
}

function divider(){
    let divider = document.createElement("div");
    divider.setAttribute("class", "divider");
    return divider;
}

export {generateMenu};