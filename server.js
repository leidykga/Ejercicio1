//console.log("Hola mundo")
const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const UsuarioSchema = require("./Modelos/Usuario.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexion base de datos.

mongoose.connect("mongodb+srv://leidykga:39715718Ll@clusterc4w.yrdqm.mongodb.net/Ejegrupo6db?retryWrites=true&w=majority");

//Operaciones crud

router.get('/', (req, res) => {
    res.send("Este es el inicio de mi primer API")
});

//Insertar
router.post('/Usuario', (req, res) =>{
    let nuevoUsuario = new UsuarioSchema({
    idUsuario: req.body.id,
    nombreUsuario: req.body.nombre,
    telefonoUsuario: req.body.telefono,
    ciudadUsuario: req.body.ciudad
    });
    nuevoUsuario.save(function(err, datos){
        if(err){
            cconsole.log(err);
        }
        res.send("Usuario Almacenado")
    })
})

app.use(router);
app.listen(3000, ()=> {
    console.log("Servidor corriendo en el puerto 3000")
});