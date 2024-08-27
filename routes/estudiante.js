const express = require("express")
const controllerEstudiante = require("../controllers/estudiantes")

const router = express.Router()

//Tenemos que contruir las rutas del CRUD

router.get("/", controllerEstudiante.getEstudiantes)
router.get("/:id",controllerEstudiante.getEstudiantePorId)
router.post("/",controllerEstudiante.create)
router.patch("/",()=>console.log("editar estudiante"))
router.delete("/",()=>console.log("eliminar estudiante"))

module.exports = router