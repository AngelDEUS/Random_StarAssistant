/*
    * Router del modulo de Usuarios.
*/

const express = require('express');
const controladorUsuarios_Asistentes = require('../../controllers/mod_usuarios_c/c_mod_usuario_Asistente.js');
const controladorUsuarios_Lideres = require('../../controllers/mod_usuarios_c/c_mod_usuario_Lider.js');
const rutaUsuarios = express.Router();

rutaUsuarios.get("/td_asistentes", controladorUsuarios_Asistentes.td_asistentes);
rutaUsuarios.get("/buscarAsistente", controladorUsuarios_Asistentes.asistentesGetID);

rutaUsuarios.get("/td_lideres", controladorUsuarios_Lideres.td_lideres);
rutaUsuarios.get("/buscarLider", controladorUsuarios_Lideres.lideresGetID);

rutaUsuarios.get('/generar_equipos', controladorUsuarios_Asistentes.generarEquiposAleatorios);


module.exports = rutaUsuarios;
