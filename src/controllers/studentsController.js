const studentsDataAccess = require("../models/studentsDataAccess")

exports.getAll = (req, res) => {
  studentsDataAccess
    .findAll()
    .then((students) => res.send(students))
    .catch((err) => res.status(500).send(err))
}
