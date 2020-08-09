var db = require("../db/db.json")
var fs = require("fs")
function apiroutes(app){
  app.get("/api/notes", function(req, res){
    res.json(db)
  })
  app.post("/api/notes",function(req,res){
    db.push(req.body)
    console.log(req.body)
    fs.writeFile("./db/db.json",JSON.stringify(db),function(){
      res.json(db)
    })

  })
}

module.exports = apiroutes
