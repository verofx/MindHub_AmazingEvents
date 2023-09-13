import { data } from "./data.js";
import generate_card from "./generateCard.js";

const events = await data.events
const sectionCard = document.getElementById("section-cards");

for(event of events){
    const newCard = generate_card(event);

    sectionCard.appendChild(newCard); 
}
