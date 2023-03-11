import pool from "../databases/connect/connect.db.js";
import ConvocatoriasQuerys from "../databases/queries/convocatorias.querys.js";

export default class ConvocatoriasRepository {
  static async getConvocatorias() {
    const errorMessage = (error) => {
      console.log(
        `[!] Error (Crew repository: getConvocatorias):`,
        error.message
      );
      throw new Error(error.message);
    };
    const data = await pool.query(ConvocatoriasQuerys.getConvocatorias());
    return data?.rows;
  }

  static async getConvocatoriasById(id) {
    const errorMessage = (error) => {
      console.log(
        `[!] Error (Crew repository: getConvocatoriasById):`,
        error.message
      );
      throw new Error(error.message);
    };
    const data = await pool.query(ConvocatoriasQuerys.getConvocatoriasById(id));
    return data?.rows;
  }
  static async postConvocatorias(body) {
    const errorMessage = (error) => {
      console.log(
        `[!] Error (Crew repository: getConvocatoriasById):`,
        error.message
      );
      throw new Error(error.message);
    };
    const data = await pool.query(ConvocatoriasQuerys.postConvocatorias(body));
    return data?.rows;
  }

  static async putConvocatorias(id, body) {
    const errorMessage = (error) => {
      console.log(
        `[!] Error (Crew repository: getConvocatoriasById):`,
        error.message
      );
      throw new Error(error.message);
    };
    const data = await pool.query(
      ConvocatoriasQuerys.putConvocatorias(id, body)
    );
    return data?.rows;
  }

  static async deleteConvocatorias(id) {
    const errorMessage = (error) => {
      console.log(
        `[!] Error (Crew repository: getConvocatoriasById):`,
        error.message
      );
      throw new Error(error.message);
    };
    const data = await pool.query(ConvocatoriasQuerys.deleteConvocatorias(id));
    return data?.rows;
  }
}
