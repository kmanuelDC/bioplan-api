const ProyectosQuerys = {
  getProyectos: () => `select * from proyectos`,
  getProyectosById: (id) =>
    `select * from proyectos where proyectos.id = ${id}`,
  postProyectos: (item) =>
    `insert into proyectos (id, proyecto_nombre) values(
        ${item.id},
        '${item.proyecto_nombre}'
        )`,
  putProyectos: (id, item) =>
    `update proyectos set  
        id = ${item.id},
        proyecto_nombre= '${item.proyecto_nombre}'
    where proyectos.id='${id}'
    `,
  deleteProyectos: (id) => `delete from proyectos where proyectos.id=${id}`,
};
export default ProyectosQuerys;
