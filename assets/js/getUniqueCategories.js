
export default function getUniqueCategories(events) {
    return events.map(event => event.category).filter((category, index, categories) => categories.indexOf(category) === index)
}