import pool from "../databases/connect/connect.db.js";
import ContactosQuerys from "../databases/queries/contactos.querys.js";

export default class ContactosRepository {
    static async getContactos() {
        const errorMessage = (error) => {
            console.log(
                `[!] Error (Crew repository: getContactos):`,
                error.message
            );
            throw new Error(error.message);
        };
        const data = await pool.query(ContactosQuerys.getContactos());
        return data?.rows;
    }

    static async getContactosById(id) {
        const errorMessage = (error) => {
            console.log(
                `[!] Error (Crew repository: getContactosById):`,
                error.message
            );
            throw new Error(error.message);
        };
        const data = await pool.query(ContactosQuerys.getContactosById(id));
        return data?.rows;
    }

    static async postContactos(body) {
        const errorMessage = (error) => {
            console.log(
                `[!] Error (Crew repository: getContactosById):`,
                error.message
            );
            throw new Error(error.message);
        };
        const data = await pool.query(ContactosQuerys.postContactos(body));
        return data?.rows;
    }

    static async putContactos(id, body) {
        const errorMessage = (error) => {
            console.log(
                `[!] Error (Crew repository: getContactosById):`,
                error.message
            );
            throw new Error(error.message);
        };
        const data = await pool.query(
            ContactosQuerys.putContactos(id, body)
        );
        return data?.rows;
    }

    static async deleteContactos(id) {
        const errorMessage = (error) => {
            console.log(
                `[!] Error (Crew repository: getContactosById):`,
                error.message
            );
            throw new Error(error.message);
        };
        const data = await pool.query(ContactosQuerys.deleteContactos(id));
        return data?.rows;
    }
}
    