import * as dotenv from 'dotenv'
dotenv.config();

export const ENV = {
    PORT: process.env.SERVER_API_PORT,
    DATABASE: {
            USER_DB: process.env.USER_DB,
            HOST_DB: process.env.HOST_DB,
            NAME_DB: process.env.NAME_DB,
            PASS_DB: process.env.PASS_DB,
            PORT_DB: process.env.PORT_DB
    }
};