import pool from "../databases/connect/connect.db.js";
import ProyectosQuerys from "../databases/queries/proyectos.querys.js";

export default class ProyectosRepository {
  static async getProyectos() {
    try {
      const data = await pool.query(ProyectosQuerys.getProyectos());
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async getProyectosById(id) {
    try {
      const data = await pool.query(ProyectosQuerys.getProyectosById(id));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async postProyectos(body) {
    try {
      const data = await pool.query(ProyectosQuerys.postProyectos(body));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async putProyectos(id, body) {
    try {
      const data = await pool.query(ProyectosQuerys.putProyectos(id, body));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async deleteProyectos(id) {
    try {
      const data = await pool.query(ProyectosQuerys.deleteProyectos(id));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
}
