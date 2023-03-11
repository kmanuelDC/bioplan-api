import { Router } from "express";
import Colaboradores from "../controllers/colaboradores.controller.js";
import Convocatorias from "../controllers/convocatorias.controller.js";
import Noticias from "../controllers/noticias.controller.js";
import Proyectos from "../controllers/proyectos.controller.js";

const routes = Router();

const colaboradores = new Colaboradores();
const noticias = new Noticias();
const convocatorias = new Convocatorias();
const proyectos = new Proyectos();
//----------------------------------------------------------------//
// ╔═╗╔═╗╔╦╗
// ║ ╦║╣  ║
// ╚═╝╚═╝ ╩
//----------------------------------------------------------------//

// GET
// ---> colaboradores
routes.get(`/bioplan/colaboradores/get/all`, colaboradores.getColaboradores);
routes.get(`/bioplan/colaboradores/get/:id`, colaboradores.getColaboradoById);

routes.get(`/bioplan/noticias/get/all`, noticias.getNoticias);
routes.get(`/bioplan/noticias/get/:id`, noticias.getNoticiasById);

routes.get(`/bioplan/convocatorias/get/all`, convocatorias.getConvocatorias);
routes.get(
  `/bioplan/convocatorias/get/:id`,
  convocatorias.getConvocatoriasById
);

routes.get(`/bioplan/proyectos/get/all`, proyectos.getProyectos);
routes.get(`/bioplan/proyectos/get/:id`, proyectos.getProyectosById);

// POST
routes.post(
  `/bioplan/colaboradores/post/colaborador`,
  colaboradores.postColaborador
);

routes.post(`/bioplan/noticias/post/noticia`, noticias.postNoticias);

routes.post(
  "/bioplan/convocatorias/post/convocatoria",
  convocatorias.postConvocatorias
);

routes.post(`/bioplan/proyectos/post/proyecto`, proyectos.postProyectos);

// UPDATE
routes.put(`/bioplan/colaboradores/put/:id`, colaboradores.putColaboradorById);

routes.put(`/bioplan/noticias/put/:id`, noticias.putNoticiasById);

routes.put(`/bioplan/convocatorias/put/:id`, convocatorias.putConvocatorias);

routes.put(`/bioplan/proyectos/put/:id`, proyectos.putProyectos);

// DELETE
routes.delete(
  `/bioplan/colaboradores/delete/:id`,
  colaboradores.deleteColaboradorById
);

routes.delete(`/bioplan/noticias/delete/:id`, noticias.deleteNoticiasById);

routes.delete(
  `/bioplan/convocatorias/delete/:id`,
  convocatorias.deleteConvocatorias
);

routes.delete(`/bioplan/proyectos/delete/:id`, proyectos.deleteProyectos);

export default routes;
