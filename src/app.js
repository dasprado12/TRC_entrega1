const express = require('express');
const disciplina = require("./routes");

require("../database/index.js");


class App {
    constructor() {
        this.app = express();
        this.app.use(express.json())
        this.routes();
    }

    routes() {
        this.app.use(disciplina);
    }
}

module.exports = new App().app