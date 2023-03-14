import pool from "../databases/connect/connect.db.js";
import ColaboradoresQuerys from "../databases/queries/colaboradores.querys.js"



export default class ColaboradoresRepository{

    static async getColaboradores (){
        const errorMessage = (error) => { console.log(`[!] Error (Colaborador repository: getColaboradores):`, error.message); throw new Error(error.message) };

        const data = await pool.query(ColaboradoresQuerys.getColaboradores());
        console.log (data)
        return data?.rows;
    }

    static async getColaboradoById (id){
        const errorMessage = (error) => { console.log(`[!] Error (Crew repository: getColaboradores):`, error.message); throw new Error(error.message) };
        const data = await pool.query(ColaboradoresQuerys.getColaboradoById(id));
        console.log (data)
        return data?.rows;
    }
    static async postColaborador (body){
        const errorMessage = (error) => { console.log(`[!] Error (Crew repository: postColaborador):`, error.message); throw new Error(error.message) };
        const data = await pool.query(ColaboradoresQuerys.postColaborador(body));
        console.log (data)
        return data?.rows;
    }

    static async putColaboradorById (id, body){
        const errorMessage = (error) => { console.log(`[!] Error (Crew repository: postColaborador):`, error.message); throw new Error(error.message) };
        const data = await pool.query(ColaboradoresQuerys.putColaboradorById(id, body));
        console.log (data)
        return data?.rows;
    }
    static async deleteColaboradorById (id){
        const errorMessage = (error) => { console.log(`[!] Error (Crew repository: postColaborador):`, error.message); throw new Error(error.message) };
        const data = await pool.query(ColaboradoresQuerys.deleteColaboradorById(id));
        console.log (data)
        return data?.rows;
    }

    static async postColaborador (body){
        const errorMessage = (error) => { console.log(`[!] Error (Crew repository: postColaborador):`, error.message); throw new Error(error.message) };
        const data = await pool.query(ColaboradoresQuerys.postColaborador(body));
        console.log(data)
        return data?.rows;
    }
}