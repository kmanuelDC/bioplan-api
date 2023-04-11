import pool from "../databases/connect/connect.db.js";
import ConvocatoriasQuerys from "../databases/queries/convocatorias.querys.js";

export default class ConvocatoriasRepository {
  static async getConvocatorias() {
    try {
      const data = await pool.query(ConvocatoriasQuerys.getConvocatorias());
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async getConvocatoriasById(id) {
    try {
      const data = await pool.query(
        ConvocatoriasQuerys.getConvocatoriasById(id)
      );
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
  static async postConvocatorias(body) {
    try {
      const data = await pool.query(
        ConvocatoriasQuerys.postConvocatorias(body)
      );
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async putConvocatorias(id, body) {
    try {
      const data = await pool.query(
        ConvocatoriasQuerys.putConvocatorias(id, body)
      );
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async deleteConvocatorias(id) {
    try {
      const data = await pool.query(
        ConvocatoriasQuerys.deleteConvocatorias(id)
      );
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
}
