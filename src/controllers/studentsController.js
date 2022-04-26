const Joi = require("joi")

const studentsDataAccess = require("../models/studentsDataAccess")

exports.getAll = (req, res) => {
  studentsDataAccess
    .findAll()
    .then((students) => res.send(students))
    .catch((err) => res.status(500).send(err))
}

exports.createOne = (req, res) => {
  const { firstname, lastname, age, campus, remote } = req.body

  const { error: validationErrors } = Joi.object({
    firstname: Joi.string().max(255).required(),
    lastname: Joi.string().max(255).required(),
    age: Joi.number().min(0).required(),
    campus: Joi.string().max(255).required(),
    remote: Joi.boolean().required(),
  }).validate(
    { firstname, lastname, age, campus, remote },
    { abortEarly: false }
  )

  if (validationErrors) {
    res.status(400).json({ errors: validationErrors.details })
  } else {
    studentsDataAccess
      .addOne(req.body)
      .then((info) => res.status(201).json(info))
      .catch((err) => res.status(500).send({ err }))
  }
}
