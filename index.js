const app = require("./src/app")

const port = parseInt(process.env.APP_PORT ?? "8000", 10)

app.listen(port, (err) => {
  if (err) {
    console.log("Error cannot run !")
  } else {
    console.log(`Server is running on port ${port}`)
  }
})
