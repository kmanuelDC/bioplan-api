import { Router } from "express";
import Colaboradores from "../controllers/colaboradores.controller.js";


const routes = Router();

const colaboradores = new Colaboradores();


//----------------------------------------------------------------//
// ╔═╗╔═╗╔╦╗
// ║ ╦║╣  ║
// ╚═╝╚═╝ ╩
//----------------------------------------------------------------//

routes.get(`/bioplan/colaboradores/get/all`,colaboradores.getColaboradores);









routes.post(`/bioplan/colaboradores/new/colaborador`,colaboradores.postColaborador);


export default routes;