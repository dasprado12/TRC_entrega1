const app = require("./app")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.listen(3000);