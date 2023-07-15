let notes = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

const express = require("express")
const app = express()

app.get('/' , (req,res) =>{
    res.send("Hello")
})

app.get('/api/persons',(req,res)=>{
    res.send(notes)
})

app.get('/', (req, res) => {
    res.send("Hello")
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const note = notes.filter(n => n.id === id);
    // if (note){
    if (note.length === 0) {
        res.status(404).end()
    } else {
        res.json(note);
    }

})

app.listen(3001)