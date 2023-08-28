import { data } from "./data.js";
import generate_card from "./generateCard.js";

const events = data.events;
const sectionCard = document.getElementById("section-cards");

for(event of events){
    const id = event._id;
    const name = event.name;
    const image = event.image;
    const description = event.description;
    const price = event.price
    const newCard = generate_card(id, name, image, description, price);

    sectionCard.appendChild(newCard);
   
}

