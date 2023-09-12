import { data } from "./data.js";
import generate_card from "./generateCard.js";

const sectionCheckbox = document.getElementById("section-checkboxs");
const searchInput = document.getElementById("search-input");
const sectionCards = document.getElementById("section-cards");
const events = data.events;
const currentDate = new Date(data.currentDate);
const url = new URL(window.location)
const pathname = url.pathname

//crea lista de categorias
const categories = events.map(event => event.category).filter((category, index, categories) => categories.indexOf(category) === index)

//muestra  las cateogrias
function showCheckbox(list) {
    let checkboxes = "";
    list.forEach((category) => {
        checkboxes +=
            `<p><input type="checkbox" class="checkbox col-md-auto" id="${category}"  value="${category}">
      <label for="${category}">${category}</label>
      </p>`
    });
    sectionCheckbox.innerHTML = checkboxes;
}
showCheckbox(categories);

//filtra por texto en el buscador
function filterByText(events, searchInput) {
    return events.filter(event => event.name
        .toLowerCase().includes(searchInput.value.trim().toLowerCase()) || event.description
            .toLowerCase().includes(searchInput.value.trim().toLowerCase()));
}

//muestra las cards filtradas por tipo de evento en checkbox 
searchInput.addEventListener("input", () => {
    filterAll();
})

//muestra las cards filtradas por buscador
sectionCheckbox.addEventListener("change", () => {
    filterAll();
})

//filtra por Categoria
function filterByCategory(events) {
    const checkboxes = Array.from(document.getElementsByClassName("checkbox"));
    const checkboxesBlue = checkboxes.filter(check => check.checked);
    if (checkboxesBlue.length == 0) {
        return events
    }
    const values = checkboxesBlue.map(checked => checked.value);
    const filterChecked = events.filter(event => values.includes(event.category));
    return filterChecked;
}

function getUpcomingEvents(events){
    const upcomingEvents = [];
    for (event of events) {
        const cardDate = new Date(event.date);
        if (cardDate >= currentDate) {
            upcomingEvents.push(event);
        }
    }
    return upcomingEvents;
}

function getPastEvents(events){
    const pastEvents = [];
    for (event of events) {
        const cardDate = new Date(event.date);
        if (cardDate < currentDate) {
            pastEvents.push(event);
        }
    }
    return pastEvents;
}

//pinta las cards
function printCards(filtered) {
    sectionCards.innerHTML = "";
    if (filtered.length !== 0) {
        filtered.forEach(event => {
            const newCard = generate_card(event);
            sectionCards.appendChild(newCard);
        });
    } else {
        sectionCards.innerHTML = "The searched event doesn't exist"
    }
}

//filtra todas las cards
function filterAll() {
    let filteredEvents = events

    if (pathname === "/upcoming.html"){
        const upcomingEvents = getUpcomingEvents(events);
        filteredEvents = filterByText(upcomingEvents, searchInput);
    } else if (pathname === "/past.html"){
        const pastEvents = getPastEvents(events);
        filteredEvents = filterByText(pastEvents, searchInput);
    }
    
    const filterCategory = filterByCategory(filteredEvents);
    printCards(filterCategory);
}



