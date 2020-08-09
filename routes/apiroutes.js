var db = require("../db/db.json")
var fs = require("fs");
//  const { notStrictEqual } = require("assert");
function apiroutes(app){
  app.get("/api/notes", function(req, res){
    res.json(db)
  })
  app.post("/api/notes",function(req,res){
    let newNote= req.body
    newNote.id = Math.floor(Math.random() * Math.floor(10000));
    db.push(newNote)
    console.log(req.body)
    fs.writeFile("./db/db.json",JSON.stringify(db),function(){
      res.json(db)
  })
})
  app.delete("/api/notes/:id",function(req,res){
    let noteId =parseInt(req.params.id)
    console.log(noteId)
    res.json(true);
    const result = db.filter(item => item.id !== noteId);
    console.log(result)
    db= result
    fs.writeFile("./db/db.json",JSON.stringify(db),function(){
      res.json(db)
    })


  });
}



module.exports = apiroutes
