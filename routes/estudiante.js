const express = require("express")
const controllerEstudiante = require("../controllers/estudiantes")

const router = express.Router()

//Tenemos que contruir las rutas del CRUD

router.get("/", (req,res)=>{
    console.log("get")
    res.send("Ruta get")
})
router.get("/:id",()=>console.log("leer estudiante usando el id"))
router.post("/",controllerEstudiante.create)//("crear estudiante")
router.patch("/",()=>console.log("editar estudiante"))
router.delete("/",()=>console.log("eliminar estudiante"))

module.exports = router