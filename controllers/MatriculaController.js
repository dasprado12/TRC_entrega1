const Matricula = require("../models/Matricula")

class MatriculaController {
    async index(req, res) {
        try {
            const matriculas = await Matricula.find();
            return res.status(200).json(matriculas);
        } catch (error){
            return res.status(500).json({ message: `Erro no servidor! ${error}` });
        }
    }

    async indexPk(req, res){
        const { id } = req.params;
        const matricula = await Matricula.findOne({
            'id': id
        })

        return res.status(200).json(matricula)
    }

    async store(req, res) {
        const { codigo } = req.body

        if(!codigo){
            return res.status(422).json({message: "Código é um campo obrigatório"})
        }

        try {
            const exist = await Matricula.find({
                "codigo": codigo
            })
            if(exist.length){
                return res.status(200).json({message: "Curso já matriculado"})
            }
        } catch(error){
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }

        try {
            const matricula = await Matricula.create(req.body)
            return res.status(200).json(matricula)
        } catch (error){
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }
    }

    async modify(req, res) {
        const { id } = req.params;
        const body_request = req.body; 

        
        delete body_request.id
        delete body_request.createdAt
        delete body_request.updatedAt

        if(!body_request.codigo){
            return res.status(400).json({message: "Código não informado"})
        }

        try {
            const disciplina = await Matricula.find({
                "id": id
            })
            if(!disciplina.length){
                return res.status(400).json({message: "Disciplina não existe"})
            }
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }

        try {
            const codigo = await Matricula.find({
                "codigo": body_request.codigo
            })
            console.log(codigo)
            if(codigo.length == 0){
                return res.status(400).json({message: "Código da disciplina não existe"})
            }
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }

        try {
            const alter = await Matricula.updateOne( 
                { "id": id },
                body_request
            )
            return res.status(200).json(alter)
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const matricula = await Matricula.deleteMany({
                'id': id 
            })
            if(matricula.n > 0){
                return res.status(200).json({message: "Deletado com Sucesso"})
            }if(matricula.n == 0){
                return res.status(200).json({message: `Disciplina ${id} não existe`})
            }
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }
    }
}

module.exports = new MatriculaController();