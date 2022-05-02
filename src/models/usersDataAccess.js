const db = require("./db")

exports.findOne = (userId) => {
  return db
    .promise()
    .query("SELECT * FROM `users` WHERE id = ?", [userId])
    .then(([result]) => result)
}

exports.findOneByEmail = (userEmail) => {
  return db
    .promise()
    .query("SELECT * FROM `users` WHERE email = ?", [userEmail])
    .then(([result]) => result)
}

exports.addOne = (user) => {
  const { name, email, password } = user
  return db
    .promise()
    .query("INSERT INTO `users` (name, email, password) VALUES (?, ?, ?)", [
      name,
      email,
      password,
    ])
    .then(([result]) => {
      return { id: result.insertId, name, email }
    })
}
