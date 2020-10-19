const mongoose = require('mongoose')

const conn = require("../database/dbConnection")

class Database {
    constructor() {
        this.mongo();
    }

    mongo() {
        this.mongoConnection = mongoose.connect(conn.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
        });
    }
}

module.exports = new Database();