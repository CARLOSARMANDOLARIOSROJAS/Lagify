const { connectMysql } = require('../dbconnection');
class HistorialModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('HistorialDiagnostico');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('HistorialDiagnostico').where('id', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('HistorialDiagnostico').insert(datos).returning('id');
        return result[0];
    }

    static async eliminar(id) {
        let db = await connectMysql();
        return await db('HistorialDiagnostico').where('id', id).del();
    }
}

module.exports = HistorialModel;