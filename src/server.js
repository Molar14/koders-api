const { response } = require("express");

const express = requiere("express");

const app = express();

//middleware
app.use(express.json());

app.get('/',(request, response) =>{
    response.json({
        message : "Koders APIv1",
    })
})

module.exports = app;