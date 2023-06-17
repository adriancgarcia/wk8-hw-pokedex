const express = require("express");
const app = express();

const pokemon = require('./models/pokemon.js');


// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', { data: pokemon });
    });
    
    
// SHOW
app.get('/pokemon/:id', (req, res) => {
res.render('show.ejs', { data: pokemon[req.params.id] });
});





app.listen(3000, () => {
    console.log("Listening");
})