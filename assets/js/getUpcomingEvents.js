import { data } from "./data.js";

const currentDate = new Date(data.currentDate);

export default function getUpcomingEvents(events){
    const upcomingEvents = [];
    for (event of events) {
        const cardDate = new Date(event.date);
        if (cardDate >= currentDate) {
            upcomingEvents.push(event);
        }
    }
    return upcomingEvents;
}