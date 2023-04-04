const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workListItem = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  // res.send("server is working");
  let d = new Date();
  let currentDay = d.getDay();
  //date formating
  let option = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  var day = d.toLocaleString("en-US", option);

  res.render("list", { listTitle: day, newListItem: items });
});

app.post("/", function (req, res) {
    
  let listItem = req.body.newItem;
  item = listItem;

  if(req.body.list === "work"){
    workListItem.push(item);
    res.redirect("/work");

  }
  else{
    items.push(item);
    res.redirect("/");

  }

});

app.get("/work",function(req,res){
    res.render("list",{ listTitle: "work list", newListItem: workListItem })
});

app.get("/about",function(req,res){

    res.render("about");
})

app.listen(8080, function () {
  console.log("The current server is running on 8080.... ");
});
