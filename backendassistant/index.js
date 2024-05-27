/*
    * Index principal Random Star Assistant.
*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// ----> modulo de usuarios = [RUTAS]
const usuariosRouter = require('./src/routers/mod_usuarios_r/r_mod_usaurios')

// ----> Uses
const app = express();
const PORT = process.env.PORT || 3001;

// Cors Configuraion --
const optionsCors = {
    origin: `http://localhost:3000`,
    methods: 'GET, POST, PUT, DELETE',
    optionSuccessStatus: 200,
}

// ----> Uses
app.use(cors(optionsCors));

// Modulo de Usuarios
app.use('/asistente', usuariosRouter)

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));



// ---- Puertos Listen
app.listen(PORT, ()=>{
    console.log(`\n\n     El servidor funcionando en el puerto: \x1b[33m[${PORT}]\x1b[33m.`);
    console.log(`\n     Local:                  http://localhost:${PORT}\x1b[0m\n`);
})
