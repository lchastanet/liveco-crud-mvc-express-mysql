const express = require("express")

const studentsController = require("../controllers/studentsController")

const router = express.Router()

router.get("/", studentsController.getAll)

module.exports = router
