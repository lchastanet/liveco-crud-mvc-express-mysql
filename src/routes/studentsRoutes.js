const express = require("express")

const studentsController = require("../controllers/studentsController")
const auth = require("../middlewares/auth")

const router = express.Router()

router.get("/", auth, studentsController.getAll)
router.get("/:id", auth, studentsController.getOne)
router.post("/", studentsController.createOne)
router.put("/:id", studentsController.updateOne)
router.delete("/:id", studentsController.deleteOne)

module.exports = router
