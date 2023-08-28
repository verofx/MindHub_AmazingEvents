function generate_card (id, name, image, description, price){
    const card = document.createElement("div")
    card.classList.add("card", "p-2", "d-flex", "flex-column", "justify-content-between", "align-items-center", "col-sm-4", "col-lg-3")
    card.innerHTML =  `
    <img class="card-img-top w-100 d-block border rounded-5" src="${image}" alt="${name}"/>
    <div class="card-body text-center">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">${description}</p>
    </div>
    <div class="card-footer d-flex justify-content-evenly w-100 align-items-center p-3">
      <span>&dollar;${price}</span>
      <button onclick="location.href='details.html?id=${id}'" class="btn btn-outline-dark" type="button">Details</button>
    </div>`
    return card
}

export default generate_card;