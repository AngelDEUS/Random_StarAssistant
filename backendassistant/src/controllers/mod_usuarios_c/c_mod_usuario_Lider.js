/*
    * Controlador del modulo de Usuarios para los líderes.
*/

const db = require('../../model/model_AssitantDB').promise();

// ---> Consultar todos los Líderes.
const td_lideres = async (req, res) => {
    try {
        console.log("\n-----> Obteniendo datos de Líderes...");
        const [result] = await db.query(`
        SELECT 
            ID_Lider_PK AS 'ID',
            Nombres_Lider AS 'Nombre',
            Apellidos_Lider AS 'Apellido'
        FROM 
            Lider;
        `);
        res.status(200).json(result);
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ error: '\n\x1b[31m  ---> Error al obtener líderes. \x1b[0m\n' });
    }
}


// ---> Consultar Líder por ID o Nombre.
const lideresGetID = async (req, res) => {
    const { id, nombre } = req.query; // Obtiene los parámetros del query string

    try {
        console.log("\n-----> Obteniendo datos de Líderes...");
        let query = `
        SELECT 
            ID_Lider_PK AS 'ID_Lider',
            Nombres_Lider AS 'Nombres',
            Apellidos_Lider AS 'Apellidos',
            Correo_Lider AS 'Correo',
            Telefono_Lider AS 'Telefono'
        FROM 
            Lider
        WHERE 
            1 = 1
        `;
        const params = [];
        
        if (id) {
            query += ` AND ID_Lider_PK = ?`;
            params.push(id);
        }
        
        if (nombre) {
            query += ` AND Nombres_Lider LIKE ?`;
            params.push(`%${nombre}%`);
        }
        
        const [result] = await db.query(query, params);
        res.status(200).json(result);
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ error: '\n\x1b[31m  ---> Error al obtener líderes. \x1b[0m\n' });
    }
}

module.exports = {
    td_lideres,
    lideresGetID,
}
