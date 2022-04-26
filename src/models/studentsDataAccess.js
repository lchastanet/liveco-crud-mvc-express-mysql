const db = require("./db")

exports.findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM `students`")
    .then((result) => result[0])
}

exports.addOne = (student) => {
  const { firstname, lastname, age, campus, remote } = student
  return db
    .promise()
    .query(
      "INSERT INTO `students` (firstname, lastname, age, campus, Remote) VALUES (?, ?, ?, ?, ?)",
      [firstname, lastname, age, campus, remote]
    )
    .then(([result]) => {
      return { id: result.insertId, firstname, lastname, age, campus, remote }
    })
}
