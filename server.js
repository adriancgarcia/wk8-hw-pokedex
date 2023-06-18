const express = require("express");
const app = express();

const pokemon = require('./models/pokemon.js');


// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon});
    });
    
    
// SHOW
app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const Pokemon = pokemon[id];
    
res.render('show.ejs', {Pokemon, id});

});





app.listen(3000, () => {
    console.log("Listening");
})