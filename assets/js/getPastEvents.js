import { data } from "./data.js";

const currentDate = new Date(data.currentDate);

export default function getPastEvents(events){
    const pastEvents = [];
    for (event of events) {
        const cardDate = new Date(event.date);
        if (cardDate < currentDate) {
            pastEvents.push(event);
        }
    }
    return pastEvents;
}