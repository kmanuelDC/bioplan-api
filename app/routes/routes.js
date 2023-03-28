import { Router } from "express";
import Colaboradores from "../controllers/colaboradores.controller.js";
import Convocatorias from "../controllers/convocatorias.controller.js";
import Noticias from "../controllers/noticias.controller.js";
import Proyectos from "../controllers/proyectos.controller.js";
import Contactos from "../controllers/contactos.controller.js";
import Cargo from "../controllers/cargo.controller.js";
import Area from "../controllers/area.controller.js";

const routes = Router();

const colaboradores = new Colaboradores();
const noticias = new Noticias();
const convocatorias = new Convocatorias();
const proyectos = new Proyectos();
const contactos = new Contactos();
const cargo = new Cargo();
const area = new Area();
//----------------------------------------------------------------//
// ╔═╗╔═╗╔╦╗
// ║ ╦║╣  ║
// ╚═╝╚═╝ ╩
//----------------------------------------------------------------//

// GET
// ---> colaboradores
routes.get(`/bioplan/colaboradores/get/all`, colaboradores.getColaboradores);
routes.get(`/bioplan/colaboradores/get/:id`, colaboradores.getColaboradorById);

// ---> noticias
routes.get(`/bioplan/noticias/get/all`, noticias.getNoticias);
routes.get(`/bioplan/noticias/get/:id`, noticias.getNoticiasById);

// ---> convocatorias
routes.get(`/bioplan/convocatorias/get/all`, convocatorias.getConvocatorias);
routes.get(
  `/bioplan/convocatorias/get/:id`,
  convocatorias.getConvocatoriasById
);

// ---> Proyectos
routes.get(`/bioplan/proyectos/get/all`, proyectos.getProyectos);
routes.get(`/bioplan/proyectos/get/:id`, proyectos.getProyectosById);

// ---> contactos
routes.get(`/bioplan/contactos/get/all`, contactos.getContactos);
routes.get(`/bioplan/contactos/get/:id`, contactos.getContactoById);

// ---> cargo
routes.get(`/bioplan/cargo/get/all`, cargo.getCargo);
routes.get(`/bioplan/cargo/get/:id`, cargo.getCargoById);

// ---> area
routes.get(`/bioplan/area/get/all`, area.getArea);
routes.get(`/bioplan/area/get/:id`, area.getAreaById);

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

// ---> Proyectos
routes.post(`/bioplan/proyectos/post/proyecto`, proyectos.postProyectos);

// ---> contactos
routes.post(`/bioplan/contactos/post/contacto`, contactos.postContacto);

// ---> cargo
routes.post(`/bioplan/cargo/post/cargo`, cargo.postCargo);

// ---> area
routes.post(`/bioplan/area/post/area`, area.postArea);

// UPDATE
// ---> colaboradores
routes.put(`/bioplan/colaboradores/put/:id`, colaboradores.putColaboradorById);

// ---> noticias
routes.put(`/bioplan/noticias/put/:id`, noticias.putNoticiasById);

// ---> convocatorias
routes.put(`/bioplan/convocatorias/put/:id`, convocatorias.putConvocatorias);

// ---> Proyectos
routes.put(`/bioplan/proyectos/put/:id`, proyectos.putProyectos);

// ---> contactos
routes.put(`/bioplan/colaboradores/put/:id`, contactos.putContactoById);

// ---> cargo
routes.put(`/bioplan/cargo/put/:id`, cargo.putCargo);

// ---> area
routes.put(`/bioplan/area/put/:id`, area.putArea);

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

// ---> Proyectos
routes.delete(`/bioplan/proyectos/delete/:id`, proyectos.deleteProyectos);

// ---> contactos
routes.put(`/bioplan/contactos/delete/:id`, contactos.putContactoById);

// ---> cargo
routes.delete(`/bioplan/cargo/delete/:id`, cargo.deleteCargo);

// ---> area
routes.delete(`/bioplan/area/delete/:id`, area.deleteArea);

export default routes;
