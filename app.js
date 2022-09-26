const express = require('express');
const app = express();

// Express Definition Api

app.get('/express/api/v1/definition', (req,res) => {
    res.send("Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.");
})

app.listen(3000, function(){
    console.log("App is Running");
})