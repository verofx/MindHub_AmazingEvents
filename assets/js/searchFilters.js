import { data } from "./data.js";
import generate_card from "./generateCard.js";

const sectionCheckbox = document.getElementById("section-checkboxs");
const searchInput = document.getElementById("search-input");
const sectionCards = document.getElementById("section-cards");
const events = data.events;

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
        return events;
    }
    const values = checkboxesBlue.map(checked => checked.value);
    const filterChecked = events.filter(event => values.includes(event.category));
    return filterChecked;
}

//pinta las cards
function printCards(filtered) {
    console.log(filtered)
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
    const filteredEvents = filterByText(events, searchInput);
    const filterCategory = filterByCategory(filteredEvents);
    printCards(filterCategory);
}



