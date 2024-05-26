/*
    * Adaptador de la base de Datos AssitantDB
 */

const mysql  =require('mysql2');
const myDatabaseName = 'AssitantDB';

// Mi conexión de la base de datos.
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: myDatabaseName,
})

db.connect((err) =>{
    if (err) {
        console.error('\n\x1b[31m',"Errorr al conectar en la base de datos ",myDatabaseName,'.\n\n', err, '\x1b[0m\n');
        return        
    }
    console.log(`\x1b[36m     Conexion Existosa a la base de datos. "${nomDatabase}"`, '\x1b[0m\n');
})

process.on("SIGINT", ()=> {
    db.end();
    process.exit();
})

module.exports = db;