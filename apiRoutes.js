var activeNotes = require("./db/noteData");

module.exports = function(app){


app.get("/api/notes", function(req, res){
  res.json(activeNotes);
});


app.post("/api/notes", function(req, res){
  activeNotes.push(req.body)

   res.json({ message: "Adding Note!"})
});
app.get("/api/notes/:id", function(req, res){
  res.json(activeNotes.filter(note => note.id == req.params.id));
});
app.delete("/api/notes/:id", function(req, res){
  const index = activeNotes.findIndex(note => note.id == req.params.id)
  const target = activeNotes.splice(index, 1)
  res.json(target)
});

};
    
  
    
  
  
  