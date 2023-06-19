const express = require("express");
const morgan = require("morgan");
const app = express();
const pokemon = require('./models/pokemon.js');
const methodOverride = require("method-override");


// MIDDLEWARE
// PARSING URLENCODED
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))  



// ROUTES

// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon});
    });
    
// NEW - GET 
app.get('/pokemon/new', (req, res) => {
    res.render('./new.ejs')
})

// DESTROY - DELETE



// UPDATE - PUT
app.put("/pokemon/:id", (req, res) => {
    const id = req.params.id;
    pokemon[id] = req.body 
    res.redirect("/pokemon")
})





// CREATE - POST 
app.post('/pokemon', (req, res) => { 
    pokemon.push(req.body)
// pokemon.create(req.body).then(()=> {
    res.redirect('/pokemon')
})

// EDIT - GET
app.get("/pokemon/:id/edit", (req, res) => {
    const id = req.params.id;
    const Pokemon = pokemon[id];
    res.render("edit.ejs", {Pokemon, id});
}) 



// SHOW
app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const Pokemon = pokemon[id];
res.render('show.ejs', {Pokemon, id});
});

app.listen(3000, () => {
    console.log("Listening");
})