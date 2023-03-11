import pool from "../databases/connect/connect.db.js";
import NoticiasQuerys from "../databases/queries/noticias.querys.js"



export default class NoticiasRepository{

    static async getNoticias (){
        const errorMessage = (error) => { console.log(`[!] Error (Crew repository: getNoticias):`, error.message); throw new Error(error.message) };
        const data = await pool.query(NoticiasQuerys.getNoticias());
        console.log (data)
        return data?.rows;
    }

    static async getNoticiasById (id){
        const errorMessage = (error) => { console.log(`[!] Error (Crew repository: getNoticiasById):`, error.message); throw new Error(error.message) };
        const data = await pool.query(NoticiasQuerys.getNoticiasById(id));
        console.log (data)
        return data?.rows;
    }
    static async postNoticias (body){
        const errorMessage = (error) => { console.log(`[!] Error (Crew repository: postNoticias):`, error.message); throw new Error(error.message) };
        const data = await pool.query(NoticiasQuerys.postNoticias(body));
        console.log (data)
        return data?.rows;
    }

    static async putNoticiasById (id, body){
        const errorMessage = (error) => { console.log(`[!] Error (Crew repository: putNoticiasById):`, error.message); throw new Error(error.message) };
        const data = await pool.query(NoticiasQuerys.putNoticiasById(id, body));
        console.log (data)
        return data?.rows;
    }
    static async deleteNoticiasById (id){
        const errorMessage = (error) => { console.log(`[!] Error (Crew repository: deleteNoticiasById):`, error.message); throw new Error(error.message) };
        const data = await pool.query(NoticiasQuerys.deleteNoticiasById(id));
        console.log (data)
        return data?.rows;
    }
}