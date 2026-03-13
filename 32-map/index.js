const dates = ["2025-1-10", "2025-2-20", "2026-3-30"];
const formatedDates = dates.map(formatDates);

console.log(formatedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
}