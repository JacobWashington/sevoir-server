const express = require("express");
const app = express();

/**** MIDDLEWARE ****/
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/**** API ROUTES ****/
app.get('/', (req,res) => {
    res.send('Hellow World!')
})

/**** SERVER ****/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on Port: ${PORT}`)
});