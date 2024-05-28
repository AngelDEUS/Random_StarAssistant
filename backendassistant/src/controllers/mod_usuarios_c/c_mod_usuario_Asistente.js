/*
    * Controlador del modulo de Usuarios para los asistentes.
*/

const db = require('../../model/model_AssitantDB').promise();

// ---> Consultar todos los Usuarios.
const td_asistentes = async (req, res) => {
    try {
        console.log("\n-----> Obteniendo datos de Asistentes...");
        const [result] = await db.query(`
        SELECT 
            ID_Asistente_PK AS 'ID_Asistente',
            Nombres_Asistente AS 'Nombres',
            Apellidos_Asistente AS 'Apellidos',
            Correo_Asistente AS 'Correo',
            Telefono_Asistente AS 'Telefono'
        FROM 
            Asistente;
        `);
        res.status(200).json(result);
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ error: '\n\x1b[31m  ---> Error al obtener usuarios. \x1b[0m\n' });
    }
}

// ---> Consultar Asistente por ID o Nombre.
const asistentesGetID = async (req, res) => {
    const { id, nombre } = req.query; // Obtiene los parámetros del query string

    try {
        console.log("\n-----> Obteniendo datos de Asistentes...");
        let query = `
        SELECT 
            ID_Asistente_PK AS 'ID_Asistente',
            Nombres_Asistente AS 'Nombres',
            Apellidos_Asistente AS 'Apellidos',
            Correo_Asistente AS 'Correo',
            Telefono_Asistente AS 'Telefono'
        FROM 
            Asistente
        WHERE 
            1 = 1
        `;
        const params = [];
        
        if (id) {
            query += ` AND ID_Asistente_PK = ?`;
            params.push(id);
        }
        
        if (nombre) {
            query += ` AND Nombres_Asistente LIKE ?`;
            params.push(`%${nombre}%`);
        }
        
        const [result] = await db.query(query, params);
        res.status(200).json(result);
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ error: '\n\x1b[31m  ---> Error al obtener usuarios. \x1b[0m\n' });
    }
}

// Generar equipos aleatorios
// Controlador en el backend para generar equipos aleatorios
const generarEquiposAleatorios = async (req, res) => {
    const { numAsistentes } = req.query;

    try {
        // Consultar todos los asistentes de la base de datos
        const [asistentes] = await db.query(`
            SELECT 
                ID_Asistente_PK AS 'ID_Asistente',
                Nombres_Asistente AS 'Nombres',
                Apellidos_Asistente AS 'Apellidos',
                Correo_Asistente AS 'Correo',
                Telefono_Asistente AS 'Telefono'
            FROM 
                Asistente;
        `);

        // Verificar que hay suficientes asistentes en la base de datos
        if (asistentes.length < numAsistentes) {
            return res.status(400).json({ error: 'No hay suficientes asistentes en la base de datos.' });
        }

        // Obtener índices aleatorios para seleccionar asistentes únicos
        const indicesAleatorios = [];
        while (indicesAleatorios.length < numAsistentes) {
            const indice = Math.floor(Math.random() * asistentes.length);
            if (!indicesAleatorios.includes(indice)) {
                indicesAleatorios.push(indice);
            }
        }

        // Construir equipos con los asistentes seleccionados aleatoriamente
        const equiposGenerados = indicesAleatorios.map(indice => asistentes[indice]);

        res.status(200).json(equiposGenerados);
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ error: 'Error al generar equipos aleatorios.' });
    }
}



module.exports = {
    td_asistentes,
    asistentesGetID,
    generarEquiposAleatorios,
}
