const contentTarget = document.querySelector("#mood_box")


export const MoodForm = (allMoods) => {
    contentTarget.innerHTML += `
        ${
            allMoods.map(
                (mood) => {
                    return `<option value="${ mood.id }">${ mood.label }</option>`
                }
            ).join("")
        }
        ${
            allMoods.map(
                (mood) => {
                    return `<option value="${ mood.id }">${ mood.label }</option>`
                }
            ).join("")
        }
        ${
            allMoods.map(
                (mood) => {
                    return `<option value="${ mood.id }">${ mood.label }</option>`
                }
            ).join("")
        }
        ${
            allMoods.map(
                (mood) => {
                    return `<option value="${ mood.id }">${ mood.label }</option>`
                }
            ).join("")
        }
        ${
            allMoods.map(
                (mood) => {
                    return `<option value="${ mood.id }">${ mood.label }</option>`
                }
            ).join("")
        }
        `
    }


    // <option value="Happy">Happy</option>
    // <option value="Content">Content</option>
    // <option value="Okay">Okay</option>
    // <option value="Unsatisfied">Unsatisfied</option>
    // <option value="Sad">Sad</option>