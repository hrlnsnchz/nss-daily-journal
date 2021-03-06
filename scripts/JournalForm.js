import { saveJournalEntry } from "./JournalDataProvider.js"
import { MoodForm } from "./moods/MoodForm.js"
import { getMoods, useMoods } from "./moods/MoodProvider.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.contentContainer')
let moodsArray = []
export const JournalFormComponent = () => {
    contentTarget.innerHTML = `<article class="contentContainer__journalEntry">
    <h2>Daily Journal</h2>
<form action="">
    <fieldset>
        <label for="journalDate">Date of Entry</label>
        <input type="date" name="journalDate" id="journalDate">
    </fieldset>
    <fieldset>
        <label for="conceptsCovered">Concepts Covered</label>
        <input type="text" name="conceptsCovered" id="conceptsCovered">
    </fieldset>
    <fieldset>
        <label for="journalEntry">Journal Entry</label>
        <textarea name="journalEntry" id="journalEntry" cols="30" rows="10"></textarea>
    </fieldset>
    <fieldset>
        <label for="moodForTheDay">Mood for the Day</label>
        <select name="mood" id="mood_box">

        </select>
    </fieldset>
    <button type="submit" value="recordJournalEntry">Record Journal Entry</button>
</form>
</article>
`
getMoods()
.then(moodsArray = useMoods())
.then(MoodForm(moodsArray))
}

eventHub.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.value === 'recordJournalEntry') {
        // const customEvent = new CustomEvent('submitButtonClicked')
        // eventHub.dispatchEvent(customEvent)
        let journalDate = document.getElementById("journalDate").value
        let conceptsCovered = document.getElementById("conceptsCovered").value
        let journalEntry = document.getElementById("journalEntry").value
        let mood = document.getElementById('mood_box').value
    
        const newJournalEntry = {
            "date": journalDate,
            "concept": conceptsCovered,
            "entry": journalEntry,
            "mood": mood
        }
        saveJournalEntry(newJournalEntry)
    }


    })