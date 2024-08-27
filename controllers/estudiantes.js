const estudiante = require("../models/estudiante")
const Estudiante = require("../models/estudiante")

const controllerEstudiante ={
    create: async (req,res) =>{
        try {
            await Estudiante.create({
                nombre : req.body.nombre,
                materias : req.body.materias,
                asistencia : req.body.asistencia,
                tareas : req.body.tareas
            })
            res.status(201).send("Estudiante creado")
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    getEstudiantes : async (req,res) =>{
        try {
            const estudiantes = await Estudiante.find({})
            res.json(estudiantes).status(200)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    getEstudiantePorId : async (req,res) =>{
        try {
            const {id} = req.params
            const estudiante = await Estudiante.findById(id)
            res.json(estudiante).status(200)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}

module.exports = controllerEstudiante