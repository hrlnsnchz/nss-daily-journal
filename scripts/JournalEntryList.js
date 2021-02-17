/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const eventHub = document.querySelector(".container")
// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".contentContainer__entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        const entries = useJournalEntries()
        for (const entry of entries) {
            /*
                Invoke the component that returns an
                HTML representation of a single entry
            */
            entryLog.innerHTML += JournalEntryComponent(entry)
        }
    })
}

eventHub.addEventListener("journalStateChanged", event => {
    EntryListComponent()
})