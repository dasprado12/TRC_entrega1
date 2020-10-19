const Router = require('express')
const MatriculaController = require("../controllers/MatriculaController.js");

const disciplina = new Router()


disciplina.get("/", (req, res) => {
    return res.json("A aplicação está rodando")
})

disciplina.get("/disciplinas", MatriculaController.index)

disciplina.get("/disciplinas/:id", MatriculaController.indexPk)
disciplina.post("/disciplinas", MatriculaController.store)
disciplina.delete("/disciplinas/:id", MatriculaController.delete)
disciplina.put("/disciplinas/:id", MatriculaController.modify)

module.exports = disciplina