const db = require("./db")

exports.findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM `studts`")
    .then((result) => result[0])
}
