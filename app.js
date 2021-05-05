const express = require("express");
const hbs = require("hbs");

const app = express();
app.use(express.static("./public"));
app.use(express.urlencoded({extended: false}));
app.set("views", "./views");
app.set("view engine", "hbs");
//app.set("day-1", __dirname + "day-1");

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/works", (req, res) => {
    res.render("works");
});

app.listen(3000);

