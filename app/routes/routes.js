import { Router } from "express";
import Colaboradores from "../controllers/colaboradores.controller.js";

const routes = Router();

const colaboradores = new Colaboradores();

//----------------------------------------------------------------//
// ╔═╗╔═╗╔╦╗
// ║ ╦║╣  ║
// ╚═╝╚═╝ ╩
//----------------------------------------------------------------//

// GET
routes.get(`/bioplan/colaboradores/get/all`, colaboradores.getColaboradores);
routes.get(`/bioplan/colaboradores/get/:id`, colaboradores.getColaboradoById);


// POST
routes.post(`/bioplan/colaboradores/post/colaborador`, colaboradores.postColaborador);

// UPDATE
routes.put(`/bioplan/colaboradores/put/:id`, colaboradores.putColaboradorById);

// DELETE
routes.delete(`/bioplan/colaboradores/delete/:id`, colaboradores.deleteColaboradorById);

export default routes;
