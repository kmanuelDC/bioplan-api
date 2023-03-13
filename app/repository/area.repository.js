import pool from "../databases/connect/connect.db.js";
import AreaQuerys from "../databases/queries/area.querys.js";

export default class AreaRepository {
  static async getArea() {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: getCargo):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(AreaQuerys.getCargo());
    return data?.rows;
  }
  static async getAreaById(id) {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: getArea):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(AreaQuerys.getAreaById(id));
    console.log(data);
    return data?.rows;
  }
  static async postArea(body) {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: postArea):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(AreaQuerys.postArea(body));
    console.log(data);
    return data?.rows;
  }

  static async putArea(id, body) {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: putArea):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(AreaQuerys.putArea(id, body));
    console.log(data);
    return data?.rows;
  }
  static async deleteArea(id) {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: deleteArea):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(AreaQuerys.deleteArea(id));
    console.log(data);
    return data?.rows;
  }
}
