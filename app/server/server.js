import express from "express"
import bodyParser from "body-parser";
import { ENV } from "../../config.js";
import cors from 'cors';


class Server {
    constructor() {
        this.serverName = 'Server BIO PLAN';
        this.hostname = 'localhost';
        this.port = ENV.PORT;

    }
    listen() {
        this.server = express();
        this.server.use(bodyParser.json()); // for parsing application/json
        this.server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
        this.server.use(cors({ origin: true, credentials: true }))
        this.server.listen(this.port, () => {
            console.log(`${this.serverName} Started at http://${this.hostname}:${this.port}/`);
        });
    }

    routes(routes){
        this.server.use('/',routes);
    }




}

export default Server;