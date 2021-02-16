
const contentTarget = document.querySelector('.contentContainer')

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
            <option value="Happy">Happy</option>
            <option value="Content">Content</option>
            <option value="Okay">Okay</option>
            <option value="Unsatisfied">Unsatisfied</option>
            <option value="Sad">Sad</option>
        </select>
    </fieldset>
    <button type="submit" value="recordJournalEntry">Record Journal Entry</button>
</form>
</article>
`
}