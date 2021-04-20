/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let journal = []

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
const eventHub = document.querySelector(".container")

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

// Removed the expand function like the one in line 41 bc there was an error when fetching.
export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entries => {
            // What should happen when we finally have the array?
            journal = entries
        })
}

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const saveJournalEntry = (entryObject) => {
    return fetch('http://localhost:8088/entries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(entryObject)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}