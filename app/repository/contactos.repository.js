import pool from "../databases/connect/connect.db.js";
import ContactosQuerys from "../databases/queries/contactos.query.js";
export default class ContactosRepository {
  static async getContactos() {
    try {
      const data = await pool.query(ContactosQuerys.getContactos());
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async getContactosById(id) {
    try {
      const data = await pool.query(ContactosQuerys.getContactosById(id));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async postContactos(body) {
    try {
      const data = await pool.query(ContactosQuerys.postContactos(body));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async putContactos(id, body) {
    try {
      const data = await pool.query(ContactosQuerys.putContactos(id, body));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }

  static async deleteContactos(id) {
    try {
      const data = await pool.query(ContactosQuerys.deleteContactos(id));
      return data?.rows;
    } catch (error) {
      return error.message;
    }
  }
}
