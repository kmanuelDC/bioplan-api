import { Router } from "express";
import Colaboradores from "../controllers/colaboradores.controller.js";
import Convocatorias from "../controllers/convocatorias.controller.js";
import Noticias from "../controllers/noticias.controller.js";

const routes = Router();

const colaboradores = new Colaboradores();
const noticias = new Noticias();
const convocatorias = new Convocatorias();
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

// ---> convocatorias
routes.get(`/bioplan/convocatorias/get/all`, convocatorias.getConvocatorias);
routes.get(
  `/bioplan/convocatorias/get/:id`,
  convocatorias.getConvocatoriasById
);
// POST
// ---> colaboradores
routes.post(
  `/bioplan/colaboradores/post/colaborador`,
  colaboradores.postColaborador
);

// ---> noticias
routes.post(`/bioplan/noticias/post/noticia`, noticias.postNoticias);

// ---> convocatorias
routes.post(
  "/bioplan/convocatorias/post/convocatoria",
  convocatorias.postConvocatorias
);
// UPDATE
// ---> colaboradores
routes.put(`/bioplan/colaboradores/put/:id`, colaboradores.putColaboradorById);

// ---> noticias
routes.put(`/bioplan/noticias/put/:id`, noticias.putNoticiasById);

// ---> convocatorias
routes.put(`/bioplan/convocatorias/put/:id`, convocatorias.putConvocatorias);

// DELETE
// ---> colaboradores
routes.delete(
  `/bioplan/colaboradores/delete/:id`,
  colaboradores.deleteColaboradorById
);

// ---> noticias
routes.delete(`/bioplan/noticias/delete/:id`, noticias.deleteNoticiasById);

// ---> convocatorias
routes.delete(
  `/bioplan/convocatorias/delete/:id`,
  convocatorias.deleteConvocatorias
);

export default routes;
