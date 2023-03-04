import pool from "../databases/connect/connect.db.js";
import ColaboradoresQuerys from "../databases/queries/colaboradores.querys.js"



export default class ColaboradoresRepository{

    static async getColaboradores (){
        const errorMessage = (error) => { console.log(`[!] Error (Crew repository: getDrop):`, error.message); throw new Error(error.message) };
        const data = await pool.query(ColaboradoresQuerys.getColaboradores());
        return data?.rows;
    }
}