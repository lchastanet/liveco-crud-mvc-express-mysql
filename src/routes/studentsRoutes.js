const express = require("express")

const studentsController = require("../controllers/studentsController")

const router = express.Router()

router.get("/", studentsController.getAll)
router.post("/", studentsController.createOne)
router.put("/:id", studentsController.updateOne)
router.delete("/:id", studentsController.deleteOne)

module.exports = router
