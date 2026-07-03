//server
//app.js

let notes=[];
let nextId=1;

//now the get method fetches a new note in the req body

app.get('/app/notes', (req,res) => {
    res.json(notes);
});

app.get('/app/notes/:id', (req,res) => {
    const id=Number(req.params.id);
    reqnote=notes.filter(note=>note.id===id);
    res.json(reqnote);
});

app.post('/app/notes', (req,res) => {
    const note= {
        id: nextId++,
        text: req.body.text,
        createdAt: new Date().toISOString
    };
    notes.push(note);
    res.status(201).json(note); //send back the full note with id
});

app.delete('/app/notes/:id', (req,res) => {
    const id=Number(req.params.id);
    notes=notes.filter(note=>note.params.id!==id);
    res.status(204).json(message:"Note was successfully deleted");
})