import bodyParser from 'body-parser';
import Server from './app/server/server.js';
import express from 'express';
import pool from './app/databases/connect/connect.db.js';
import routes from './app/routes/routes.js';

const server =  new Server();

server.listen();
server.routes(routes);
