import { data } from "./data.js";
import generate_card from "./generateCard.js";

const events = data.events;
const currentDate = new Date(data.currentDate);
const sectionCard = document.getElementById("section-cards");

for(event of events){
    const cardDate = new Date(event.date);
    if(cardDate < currentDate)
    {
        const id = event._id;
        const name = event.name;
        const image = event.image;
        const description = event.description;
        const price = event.price
        const newCard = generate_card(id, name, image, description, price);
        sectionCard.appendChild(newCard);
    }
}