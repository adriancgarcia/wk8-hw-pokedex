const express = require("express");
const app = express();

const pokemon = require('./models/pokemon.js');


// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon});
    });
    
// NEW - GET 
app.get('/pokemon/new', (req, res) => {
    res.render('pokemon/new.ejs')
})


// CREATE - POST 
// get.post('/', (req, res) => {
// pokemon.create(req.body).then(()=> {
//     res.redirect('/pokemon')
//     })
// })

    
// SHOW
app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const Pokemon = pokemon[id];
res.render('show.ejs', {Pokemon, id});
});

app.listen(3000, () => {
    console.log("Listening");
})