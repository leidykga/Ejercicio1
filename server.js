//console.log("Hola mundo")
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const route = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexion base de datos.

mongoose.connect("mongodb+srv://leidykga:39715718Ll@clusterc4w.yrdqm.mongodb.net/Ejegrupo6db?retryWrites=true&w=majority");

//Operaciones crud

app.use(route);
app.listen(3000, ()=> {
    console.log("Servidor corriendo en el puerto 3000")
});