const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send({ success: "Tout est ok !" })
})

module.exports = app
