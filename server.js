var express = require("express")
var app = express();
var PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"))

var htmlroutes = require("./routes/hmtlroutes")
htmlroutes(app)

var apiroutes = require("./routes/apiroutes")
apiroutes(app)



app.listen(PORT ,function(){
  console.log("App is listening" + PORT)
})
 