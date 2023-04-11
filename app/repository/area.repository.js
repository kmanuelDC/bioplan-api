import pool from "../databases/connect/connect.db.js";
import AreaQuerys from "../databases/queries/area.querys.js";

export default class AreaRepository {
  static async getArea() {
    try {
      const data = await pool.query(AreaQuerys.getCargo());
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
  static async getAreaById(id) {
    try {
      const data = await pool.query(AreaQuerys.getAreaById(id));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
  static async postArea(body) {
    try {
      const data = await pool.query(AreaQuerys.postArea(body));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async putArea(id, body) {
    try {
      const data = await pool.query(AreaQuerys.putArea(id, body));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
  static async deleteArea(id) {
    try {
      const data = await pool.query(AreaQuerys.deleteArea(id));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
}
