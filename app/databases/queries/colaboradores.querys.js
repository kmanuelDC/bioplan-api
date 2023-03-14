
const ColaboradoresQuerys = {
  getColaboradores: () => `select * from colaboradores where tiempo_eliminacion is null;`,
  getColaboradoById: (id) =>
    `select * from colaboradores where colaboradores.id = ${id}`,
  postColaborador: (colaborador) => `INSERT INTO colaboradores (
      id, id_cargo, nombres, ap_paterno, ap_materno, dni, carnet_ext, direccion, fecha)
      VALUES (${colaborador.id},
      ${colaborador.id_cargo},
      '${colaborador.nombres}',
      '${colaborador.ap_paterno}',
      '${colaborador.ap_materno}',
      '${colaborador.dni}',
      '${colaborador.carnet_ext}',
      '${colaborador.direccion}',
      '${colaborador.fecha}'
    );`,

  putColaboradorById: (id, colaborador) => `UPDATE colaboradores SET 
        id_cargo=${colaborador.id_cargo},
        nombres='${colaborador.nombres}',
        ap_paterno='${colaborador.ap_paterno}',
        ap_materno='${colaborador.ap_materno}',
        dni='${colaborador.dni}',
        carnet_ext='${colaborador.carnet_ext}',
        direccion='${colaborador.direccion}',
        WHERE colaboradores.id = ${id}`,

  deleteColaboradorById: (id) =>
    `update  colaboradores set tiempo_eliminacion=now() WHERE colaboradores.id = ${id}`,
};

export default ColaboradoresQuerys;
