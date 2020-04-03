var activeNotes = require("./db/noteData");

module.exports = function(app){

app.get("/api/notes", function(req, res){
  res.json(activeNotes);
});

app.post("/api/notes", function(req, res){
  activeNotes.push(req.body)

   res.json({ message: "Adding Note!"})
});


};
    
  
    
  
  
  