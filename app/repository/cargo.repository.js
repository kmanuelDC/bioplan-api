import pool from "../databases/connect/connect.db.js";
import CargoQuerys from "../databases/queries/cargo.querys.js";

export default class CargoRepository {
  static async getCargo() {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: getCargo):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(CargoQuerys.getCargo());
    console.log(data);
    return data?.rows;
  }

  static async getCargoById(id) {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: getCargo):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(CargoQuerys.getCargoById(id));
    console.log(data);
    return data?.rows;
  }
  static async postCargo(body) {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: postCargo):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(CargoQuerys.postCargo(body));
    console.log(data);
    return data?.rows;
  }

  static async putCargo(id, body) {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: putCargo):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(CargoQuerys.putCargo(id, body));
    console.log(data);
    return data?.rows;
  }
  static async deleteCargo(id) {
    const errorMessage = (error) => {
      console.log(`[!] Error (Crew repository: deleteCargo):`, error.message);
      throw new Error(error.message);
    };
    const data = await pool.query(CargoQuerys.deleteCargo(id));
    console.log(data);
    return data?.rows;
  }
}
