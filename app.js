var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function (req,resp) {
  const welcomePhrase="Hello, World from Express and EJS!"

})

module.exports = app
