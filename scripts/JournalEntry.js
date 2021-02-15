export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <h4>Concept Covered: ${entry.concept}</h4>
           <p>Date : ${entry.date}</p>
           <p>Entry: ${entry.entry}</p>
           <p>Mood: ${entry.mood}</p>
        </section>
    `
}
