import Pool from "pg-pool";
import { ENV } from "../../../config.js";
import moment from 'moment';
let pool;

const connect = () => {
    console.log(`[${moment().format(`YYYY-MM-DD HH:mm:ss`)}] - Database connected.`);
    pool = new Pool({
        user: ENV.DATABASE.USER_DB,
        password: ENV.DATABASE.PASS_DB,
        host: ENV.DATABASE.HOST_DB,
        port: ENV.DATABASE.PORT_DB,
        database: ENV.DATABASE.NAME_DB
    })
}


connect();

const validate = () =>{
setInterval(async () => {
    const reply = await pool.query('SELECT 1;');
    if (typeof reply === 'undefined') {
        console.log(`[!] Database is disconnected, reconnecting...`);
        connect();
    }
}, 1000 * 30)}

validate();

export default pool;