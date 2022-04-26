const express = require("express")

require("dotenv").config()

const app = express()

const studentsRoutes = require("./routes/studentsRoutes")

app.use("/students", studentsRoutes)

app.get("/*", (req, res) => {
  res.status(404).send({ message: "Not found !" })
})

module.exports = app
