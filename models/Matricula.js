const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const conn = require("../database/dbConnection")

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const MatriculaSchema = new mongoose.Schema(
    {
        codigo: {
            type: Number,
            required: true,
            unique: true,
        },    
        nome: {
            type: String,
            required: true,
        },
        professor: {
            type: String,
            required: true,
        },
        departamento: {
            type: String,
            required: false,
        },
        creditos: {
            type: Number,
            required: false,
        },    
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

MatriculaSchema.plugin(autoIncrement.plugin, {
    model: "Matricula",
    field: "id",
    startAt: 1,
    incrementBy: 1,
});

module.exports = mongoose.model("Matricula", MatriculaSchema);