const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const { TOKEN_SECRET } = process.env

  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, TOKEN_SECRET)
    const userId = decodedToken.userId
    if (req.body.userId && req.body.userId !== userId) {
      throw "User ID non valable !"
    } else {
      req.body.userId = userId
      next()
    }
  } catch (error) {
    res.status(401).json({ error: "Requête non authentifiée !" })
  }
}
