const express = require("express");
const app = express();
const pokemon = require('./models/pokemon.js');


// MIDDLEWARE

// PARSING URLENCODED
app.use(express.urlencoded({extended: false}))



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



// CREATE - POST 
app.post('/pokemon', (req, res) => { 
    pokemon.push(req.body)
// pokemon.create(req.body).then(()=> {
    res.redirect('/pokemon')
})



// EDIT - GET
    
// SHOW
app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const Pokemon = pokemon[id];
res.render('show.ejs', {Pokemon, id});
});

app.listen(3000, () => {
    console.log("Listening");
})