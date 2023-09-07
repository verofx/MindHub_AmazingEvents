import { data } from "./data.js";
import generate_card from "./generateCard.js";

const events = data.events;
const currentDate = new Date(data.currentDate);
const sectionCard = document.getElementById("section-cards");

for (event of events) {
    const cardDate = new Date(event.date);
    if (cardDate < currentDate) {
        const newCard = generate_card(event);
        sectionCard.appendChild(newCard);
    }
}