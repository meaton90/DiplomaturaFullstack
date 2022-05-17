var pool = require('./bd'); // llamado de BD
var md5 = require('md5'); // dependencia de encriptacion

// EN ESTE .JS MANEJAMOS LA BASE CREANDO VARIAS FUNCIONES Y USANDO LAS FUNCIONES

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserByUsernameAndPassword }