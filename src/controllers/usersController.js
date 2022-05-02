const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const usersDataAccess = require("../models/usersDataAccess")

exports.signUp = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: hash,
      }
      usersDataAccess
        .addOne(user)
        .then((info) => res.status(201).json(info))
        .catch((err) => res.status(500).send({ err }))
    })
    .catch((error) => res.status(500).json({ error }))
}

exports.signIn = (req, res) => {
  usersDataAccess
    .findOneByEmail(req.body.email)
    .then(([user]) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" })
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" })
          }
          res.status(200).json({
            userUuid: user.id,
            token: jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, {
              expiresIn: "24h",
            }),
          })
        })
        .catch((error) =>
          res.status(500).json({ err: "Impossible de parser le token !" })
        )
    })
    .catch((error) => res.status(500).json({ err: "Erreur dans la requête !" }))
}
