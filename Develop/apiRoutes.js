var activeNotes = require("./server");

module.exports = function(app){

app.get("/notes", function(req, res){
  res.json(activeNotes);
})

app.post("/api/notes", function(req, res){
  res.json(req.body);
})
}
// app.post("/notes", function(req, res){
//  activeNotes.push(req.body);
//  console.log(activeNotes);

// })

    
  
    
  
  
  