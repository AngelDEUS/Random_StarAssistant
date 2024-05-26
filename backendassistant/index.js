/*
    * Index principal Random Star Assistant.
*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// ----> modulo de usuarios = [RUTAS]


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

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

const fechaActual = new Date().toISOString().split('T')[0];
const horaActual = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;


// ---- Puertos Listen
app.listen(PORT, ()=>{
    console.log(`\n\n     El servidor funcionando en el puerto: \x1b[33m[${PORT}]\x1b[33m.`);
    console.log(`\n     Local:                  http://localhost:${PORT}\x1b[0m\n`);
    console.log('\x1b[95m%s\x1b[0m',`     Fecha actual: [${fechaActual}], Hora actual: [${horaActual}].\n`);
})
