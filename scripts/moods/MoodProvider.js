let moods = []

export const useMoods = () => moods.slice()

export const getMoods = () => {
    return fetch('http://localhost:8088/entries?_expand=mood')
    .then(response => response.json())
    .then(parsedMoods => {
        moods = parsedMoods})
    .then(console.log(moods))
}