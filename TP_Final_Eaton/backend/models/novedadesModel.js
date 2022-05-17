var pool = require('./bd'); // llamado de BD

// EN ESTE .JS MANEJAMOS LA BASE CREANDO VARIAS FUNCIONES Y USANDO LAS FUNCIONES

async function getNovedades() {
        var query = "select * from novedades order by id desc";
        var rows = await pool.query(query);
        return rows;
}

async function insertNovedades(obj) {
    try{
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function deleteNovedadById(id) {
    var query = "delete from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadById(id) {
    var query = "select * from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedadById(obj, id) {
    try{
        var query = "update novedades set ? where id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    }catch(error){
        throw error;
    }
}

module.exports = { getNovedades, insertNovedades, deleteNovedadById, getNovedadById, modificarNovedadById }