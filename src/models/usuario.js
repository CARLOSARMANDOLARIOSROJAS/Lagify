const { connectMysql } = require('../dbconnection');
class UsuarioModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('Usuarios');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Usuarios').where('id_usuario', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Usuarios').insert(datos).returning('id_usuario');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Usuarios').where('id_usuario', id).update(campos);
    }

    static async eliminar(id) {
        let db = await connectMysql();
        return await db('Usuarios').where('id_usuario', id).del();
    }
}

module.exports = UsuarioModel;