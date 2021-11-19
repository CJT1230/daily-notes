const notes = [
    {
        id: 1,
        subject: "July 4th",
        date: "July 4th, 2081",
        feeling: "patriotic",
        timeSpent: "30 minutes",
    },
    {
        id: 2,
        subject: "Halloween",
        date: "October 31st, 2081",
        feeling: "spooky",
        timeSpent: "5 hours"
    },
]

const noteAboutToday = {
    id: 3,
    subject: "Thanksgiving",
    date: "November 26th, 2081",
    feeling: "warm",
    timeSpent: "4 hours"
}

notes.push(noteAboutToday)

console.log(notes)