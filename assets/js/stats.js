import { data } from "./data.js";
import getPastEvents from "./getPastEvents.js";
import getUpcomingEvents from "./getUpcomingEvents.js";
import getUniqueCategories from "./getUniqueCategories.js";

const currentDate = new Date(data.currentDate);
const tableEventsStatistics = document.getElementById("table-events-statistics");
const tableUpcomingEventsStats = document.getElementById("table-upcoming-events-stats");
const tablePastEventsStats = document.getElementById("table-past-events-stats");

//Events with highest % of assistance
function getHighAssisEvent(events){
    events.sort((a, b) => b.assistance-a.assistance)
    return events[0]
}
//getHighAssisEvent(data.events);

//Events with lowest % of assistance
function getLowAssisEvent(events){
    events.sort((a, b) => a.assistance-b.assistance)
    return events[0]
}

//Events with larger capacity
function getLargerCapEvent(events){
    events.sort((a, b) => a.capacity-b.capacity)
    return events[0]
}

function printResults(){
    tableEventsStatistics.innerHTML =`
    <td class="text-center" title="Assistance: ${getHighAssisEvent(data.events).assistance}%">
        ${getHighAssisEvent(data.events).name}
    </td>
    <td class="text-center" title="Assistance: ${getLowAssisEvent(data.events).assistance}%">
        ${getLowAssisEvent(data.events).name}
    </td>
    <td class="text-center" title="Capacity: ${getLargerCapEvent(data.events).capacity}">
        ${getLargerCapEvent(data.events).name}
    </td>
    `   
}

printResults();

function generateRowStats(category, revenues, assistance){
    const tr = document.createElement("tr")
    tr.innerHTML = `
    <td class="text-center">
        ${category}
    </td>
    <td class="text-center">
        ${revenues}
    </td>
    <td class="text-center">
        ${assistance}%
    </td>
    `
    return tr
}

function generateTable(events, element){
    
    getUniqueCategories(events).forEach(category => {
        let totalRevenues = 0;
        let totalCapacities = 0;
        let totalAssistance = 0;
        let totalEstimate = 0;
        events.forEach(event => {
            if(category.toLowerCase() === event.category.toLowerCase()){
                totalRevenues += event.price
                totalCapacities += event.capacity
                totalAssistance += event.assistance
                totalEstimate += event.estimate
            }
        })
        let percentageAssist = 0
        if (isNaN(totalAssistance)){
            percentageAssist = totalEstimate * 100 / totalCapacities
        }
        else if (isNaN(totalEstimate)){
            percentageAssist = totalAssistance * 100 / totalCapacities
        }

        percentageAssist = percentageAssist.toFixed(2)

        const newRow = generateRowStats(category, totalRevenues, percentageAssist)

        element.appendChild(newRow)
    });
}

generateTable(getUpcomingEvents(data.events), tableUpcomingEventsStats)
generateTable(getPastEvents(data.events), tablePastEventsStats)
