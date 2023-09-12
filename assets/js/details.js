import { data } from "./data.js";

const sectionDetailsCard = document.getElementById("section-details-card")

function searchEventById(id){
  const {events} = data
  return events.find(event => event._id == id)
}

function generateCardInfo({name, image, description, price, category, place, capacity, assistance, date}) {
  const card = document.createElement("div")
  card.classList.add("card", "w-75", "p-2", "d-flex", "flex-column", "flex-md-row",  "justify-content-between", "align-items-center", "col-sm-4", "col-lg-3")
  card.innerHTML = 
    `<img class="icardDetail card-img-top d-block border rounded-5" src="${image}" alt="${name}">
    <div class="icardBody card-body text-center">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">${description}</p>
      <p>Category: ${category}</p>
      <p>Place: ${place}</p>
      <p>Capacity: ${capacity}</p>
      <p>Assistance: ${assistance}</p>
      <p>Price: &dollar;${price}</p>
      <p>Date: ${date}</p>
    </div>`
  return card
}

function getIdFromUrl(){
  const url = new URL(window.location)
  return url.searchParams.get("id")
}

const idUrl = getIdFromUrl()
const currentEvent = searchEventById(idUrl)

if (currentEvent){
  const card = generateCardInfo(currentEvent)
  sectionDetailsCard.appendChild(card)
} else{
  sectionDetailsCard.innerHTML = "Event not found"
}

