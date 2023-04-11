import pool from "../databases/connect/connect.db.js";
import ColaboradoresQuerys from "../databases/queries/colaboradores.querys.js";

export default class ColaboradoresRepository {
  static async getColaboradores() {
    try {
      const data = await pool.query(ColaboradoresQuerys.getColaboradores());
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async getColaboradorById(id) {
    try {
      const data = await pool.query(ColaboradoresQuerys.getColaboradorById(id));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
  static async postColaborador(body) {
    try {
      const data = await pool.query(ColaboradoresQuerys.postColaborador(body));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async putColaboradorById(id, body) {
    try {
      const data = await pool.query(
        ColaboradoresQuerys.putColaboradorById(id, body)
      );
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
  static async deleteColaboradorById(id) {
    try {
      const data = await pool.query(
        ColaboradoresQuerys.deleteColaboradorById(id)
      );
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
}
