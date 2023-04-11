import pool from "../databases/connect/connect.db.js";
import CargoQuerys from "../databases/queries/cargo.querys.js";

export default class CargoRepository {
  static async getCargo() {
    try {
      const data = await pool.query(CargoQuerys.getCargo());
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async getCargoById(id) {
    try {
      const data = await pool.query(CargoQuerys.getCargoById(id));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
  static async postCargo(body) {
    try {
      const data = await pool.query(CargoQuerys.postCargo(body));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async putCargo(id, body) {
    try {
      const data = await pool.query(CargoQuerys.putCargo(id, body));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
  static async deleteCargo(id) {
    try {
      const data = await pool.query(CargoQuerys.deleteCargo(id));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
}
