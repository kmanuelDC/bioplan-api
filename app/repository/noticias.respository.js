import pool from "../databases/connect/connect.db.js";
import NoticiasQuerys from "../databases/queries/noticias.querys.js";

export default class NoticiasRepository {
  static async getNoticias() {
    try {
      const data = await pool.query(NoticiasQuerys.getNoticias());
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async getNoticiasById(id) {
    try {
      const data = await pool.query(NoticiasQuerys.getNoticiasById(id));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
  static async postNoticias(body) {
    try {
      const data = await pool.query(NoticiasQuerys.postNoticias(body));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async putNoticiasById(id, body) {
    try {
      const data = await pool.query(NoticiasQuerys.putNoticiasById(id, body));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
  static async deleteNoticiasById(id) {
    try {
      const data = await pool.query(NoticiasQuerys.deleteNoticiasById(id));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
}
