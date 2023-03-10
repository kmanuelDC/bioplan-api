import { Router } from "express";
import Colaboradores from "../controllers/colaboradores.controller.js";
import Noticias from "../controllers/noticias.controller.js";

const routes = Router();

const colaboradores = new Colaboradores();
const noticias = new Noticias();

//----------------------------------------------------------------//
// ╔═╗╔═╗╔╦╗
// ║ ╦║╣  ║
// ╚═╝╚═╝ ╩
//----------------------------------------------------------------//

// GET
// ---> colaboradores
routes.get(`/bioplan/colaboradores/get/all`, colaboradores.getColaboradores);
routes.get(`/bioplan/colaboradores/get/:id`, colaboradores.getColaboradoById);

// ---> noticias
routes.get(`/bioplan/noticias/get/all`, noticias.getNoticias);
routes.get(`/bioplan/noticias/get/:id`, noticias.getNoticiasById);

// POST
// ---> colaboradores
routes.post(
  `/bioplan/colaboradores/post/colaborador`,
  colaboradores.postColaborador
);

// ---> noticias
routes.post(`/bioplan/noticias/post/noticia`, noticias.postNoticias);

// UPDATE
// ---> colaboradores
routes.put(`/bioplan/colaboradores/put/:id`, colaboradores.putColaboradorById);

// ---> noticias
routes.put(`/bioplan/noticias/put/:id`, noticias.putNoticiasById);

// DELETE
// ---> colaboradores
routes.delete(
  `/bioplan/colaboradores/delete/:id`,
  colaboradores.deleteColaboradorById
);

// ---> noticias
routes.delete(`/bioplan/noticias/delete/:id`, noticias.deleteNoticiasById);

export default routes;
