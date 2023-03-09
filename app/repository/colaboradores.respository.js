import pool from "../databases/connect/connect.db.js";
import ColaboradoresQuerys from "../databases/queries/colaboradores.querys.js"



export default class ColaboradoresRepository{

    static async getColaboradores (){
        const errorMessage = (error) => { console.log(`[!] Error (Colaborador repository: getColaboradores):`, error.message); throw new Error(error.message) };
        const data = await pool.query(ColaboradoresQuerys.getColaboradores());
        return data?.rows;
    }

    static async postColaborador (body){
        const errorMessage = (error) => { console.log(`[!] Error (Crew repository: postColaborador):`, error.message); throw new Error(error.message) };
        const data = await pool.query(ColaboradoresQuerys.postColaborador(body));
        console.log(data)
        return data?.rows;
    }
}