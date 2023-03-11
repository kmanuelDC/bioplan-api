import pool from "../databases/connect/connect.db.js";
import ProyectosQuerys from "../databases/queries/proyectos.querys.js";

export default class ProyectosRepository {
  static async getProyectos() {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: getProyectos):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(ProyectosQuerys.getProyectos());
    return data?.rows;
  }

  static async getProyectosById(id) {
    const errorMessage = (error) => {
      console.log(
        `[!] Error (Crew repository: getNoticiasById):`,
        error.message
      );
      throw new Error(error.message);
    };
    const data = await pool.query(ProyectosQuerys.getProyectosById(id));
    return data?.rows;
  }

  static async postProyectos(body) {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: postProyectos):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(ProyectosQuerys.postProyectos(body));
    return data?.rows;
  }
  static async putProyectos(id, body) {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: postProyectos):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(ProyectosQuerys.putProyectos(id, body));
    return data?.rows;
  }

  static async deleteProyectos(id) {
    const errorMessage = (error) => {
      console.log(
        `[!] Error (Crew repository: deleteProyectos):`,
        error.message
      );
      throw new Error(error.message);
    };
    const data = await pool.query(ProyectosQuerys.deleteProyectos(id));
    return data?.rows;
  }
}
