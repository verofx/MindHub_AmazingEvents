import { data } from "./data.js";
function generate_card_info (id, name, image, description, price, place, date){
    const card = document.createElement("div")
    card.classList.add("card", "p-2", "d-flex", "flex-column", "justify-content-between", "align-items-center", "col-sm-4", "col-lg-3")
    card.innerHTML =  `
    <img class="card-img-top w-100 d-block border rounded-5" src="${image}" alt="${name}"/>
    <div class="card-body text-center">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">ID: ${id}</p>
      <p class="card-text">DESC: ${description}</p>
      <p class="card-text">DATE: ${date}</p>
      <p class="card-text">PLACE: ${place}</p>
      <p class="card-text">&dollar;${price}</p>
    </div>`
    return card
}
