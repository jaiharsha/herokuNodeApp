const express = require('express')
const path= require("path")
const bodyParser = require('body-parser')
const app = express()
const PORT =process.env.PORT|| 4000

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))



app.get("/",function(req,res){

res.sendFile(path.join(__dirname +"/index.html"))});





app.post("/",function(req,res){

  var nam=req.body.name
  var eml=req.body.email
var pnum = req.body.psa
var Age = req.body.pswr
  var daffa = "<img src='/j123.png' height='500' width='300'>"
var happy="<img src='/happy.png' height='600' width='400'>"

  

res.send("<h1>Happy birthday </h1>"+"<br>"+"<h2>please check ur your details are below </h2>"+"<br>"+"<h3>" + nam +"</h3>"
+"<br>"+"<h3>" + eml +"</h3>"
+"<br>"+"<h3>" + pnum +"</h3>"
+"<br>"+"<h3>" + Age +"</h3>"+"<br>"+
"<div>"+daffa+"</div>"+
"<br>"+"<div>"+happy+"</div>"

)

})






app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
